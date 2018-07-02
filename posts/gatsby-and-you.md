---
title: “Gatsby, Markdown, and You”
date: "2018-07-01"
---

If you’re reading this, then Gatsby and I have finally made our peace. It required a deep dive on how Markdown gets turned into HTML, and how Gatsby handles its plugins and where functionality should live, but hopefully the results speak for themselves. There were a couple of things that I had to chew on for a bit before I got comfortable with them:
* [Remark](https://github.com/remarkjs/remark), and the conversion from a Markdown abstract syntax tree (MDAST) to an HTML one, to an HTML string.
* Firming up the sometimes-blurry line between a Gatsby plugin and a MDAST/Remark one.

# The Remark Ecosystem
If I had been less particular or more disciplined, I could have saved a lot of time and head-scratching. Fortunately for all of us, I’m not. For this blog, I’m writing my entries in Markdown, with some frontmatter, including title and date. When everything is parsed and rendered, it looks like this:
```
<header>
    <h1>Post Title</h1>
    <p>July 1, 2018</p>
</header>
<section>
    Here's the actual text of the post…
</section>
```
This would be fine, except for the fact that I didn’t feel like remembering to nest my headers down a level. When I use a single hash for a header (`# Header`), it parses dutifully to an `h1`, yielding this:
```
<header>
    <h1>Post Title</h1>
    <p>July 1, 2018</p>
</header>
<section>
    <h1>Post's First Header</h1>
</section>
```
Semantically, this isn’t great. Ideally, I’d be able to just tell Gatsby (or Remark, or whomever) that no post should have a header higher than `h2`. I looked around, and there was no way to do this out of the box, but Remark has a nice menagerie of [plugins](https://github.com/remarkjs/remark/blob/master/doc/plugins.md), so I started fishing around to see how to accomplish this.

## Do HAST
One tricky thing about extending Remark is that it’s hard to be sure what you’re supposed to be aiming at: Remark is just a bunch of plugins on top of Unified, and it parses the Markdown to MDAST, but at some point Gatsby turns it into HTML, which involves HAST under the hood, but we use something called Unist to traverse these trees and etc., etc. I spent a good couple of weeks just trying to tease out what was based on what, and what was something else but with some plugins, and how to just move my headers over a level. 

When I finally teased it all out, it was almost hilarious in its simplicity. Are you ready for it? Here it comes:
```
Markdown -> MDAST -> HAST -> HTML
```
That’s it. That first arrow there is Remark, and `gatsby-transformer-remark` handles the next two. That’s it. MDAST and HAST are both based on Unist, which has some utilities for traversing their node structure, but functionally, it’s just a Markdown abstract syntax tree that gets turned into an HTML abstract syntax tree. Since it’s easier and nicer to transform the MDAST, I started looking for an MDAST transformer that accomplished something similar to what I was looking for.

## Expected Visitors
As it turns out, the creators of MDAST had  a similar desire to adjust their headings: they created [`normalize-headings`](https://github.com/syntax-tree/mdast-normalize-headings) to make sure there was only one top-level (i.e. title) heading in the document (as opposed to my desire to see zero). Having found nearly the right thing, I started pattern-matching.

`normalize-headers` is actually relatively simple: it traverses the tree of Markdown nodes, and checks if any of them have a depth of 1. If none do, it promotes the first heading it finds to a depth of 1. If several do, it leaves the first one at its current depth, and moves all the others one level deeper. From its implementation, I realized that `unist-util-visit` was just a nice, semantic way of traversing the tree, and that the nodes traversed thereby can be edited in place — changing the depth of a node is easy as saying `node.depth = newDepth`. 

Equipped with that knowledge, the rest was simple: traverse the tree, find the difference between the shallowest heading level and the desired shallowest heading, and then traverse the tree again and apply the difference. If you want a minimum depth of 3, and you find a heading with a depth of 1, then your difference is 2, and you can go through the tree again and nest every heading two levels deeper. I ended up making a little NPM package to encapsulate this process: [mdast-minimum-heading](https://github.com/tambling/mdast-minimum-heading).

# Gatsby and Remark Plugins
I spent a while trying to figure out which functionality should go in which package. Wrapping everything into a Gatsby plugin felt brittle, while making two packages felt indulgent, especially because the Gatsby plugin in that case would basically just `require` and call the MDAST transformer as part of Remark’s parsing step. Ultimately, decided that indulgent was better than brittle, and made two packages:
* The aforementioned `mdast-minimum-heading`, which, given a Markdown AST and a minimum heading level, nests the headers properly.
* A Gatsby plugin called `gatsby-remark-minimum-heading`, which just takes a minimum heading level from the options passed to it in `gatsby-config.js` and runs `mdast-minimum-heading` on each Markdown AST that Remark produces.

It still feels funny that `gatsby-remark-minimum-heading` is a one-line package, but if it helps `mdast-minimum-heading` stay useful and self-contained, then the tradeoff is worth it.

# Conclusion
It probably would have been easier for me to just remember to use `##` instead of `#`, but now I [don’t need to](https://github.com/tambling/blog/blob/master/posts/gatsby-and-you.md).