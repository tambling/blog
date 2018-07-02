const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

const pageToPath = (index, maxPages) => {
  if (index === 1) {
    return '';
  }

  if (index > 1 && index <= maxPages) {
    return `page/${index}`
  }

  return '';
}


exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const allMarkdownQuery = () => graphql(
    `
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {

            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
            }
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `
  )
  const postsPerPage = 10;

  const createPaginatedPages = ({
    edges,
    component,
  }) => {
    const groupedPages = edges
      .map((edge, index) => 
        index % postsPerPage === 0 ? edges.slice(index, index + postsPerPage) : null
      )
      .filter(group => group)
    const maxPages = groupedPages.length;

    groupedPages.forEach((group, index) => {
      const pageNumber = index + 1;

      return createPage({
        path: pageToPath(pageNumber, maxPages),
        component,
        context: {
          group,
          nextPath: pageToPath(pageNumber - 1, maxPages),
          prevPath: pageToPath(pageNumber + 1, maxPages),
        }
      })
    })
  };

  return new Promise((resolve, reject) => {
    resolve(
      allMarkdownQuery()
      .then((result) => {
        if (result.errors) {
          reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges;

        createPaginatedPages({
          edges: posts,
          component: path.resolve('./src/templates/index.js'),
        });

        posts.forEach(({ node }) => {
          createPage({
            path: `/posts/${node.fields.slug}`,
            component:  path.resolve(`src/templates/post.js`),
            context: {
              node,
            }
          })
        })
      })
    );
  });

};

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const [slug] = createFilePath({ node, getNode, basePath: `pages` })
      .match(/[^\/]+/)

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};
