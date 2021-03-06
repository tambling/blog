import React from 'react'
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Post from '../components/Post';

import styles from './index.module.css';

const pointLeft = String.fromCodePoint(0x1F448)
const pointRight = String.fromCodePoint(0x1F449)

export default ({ data, pageContext: {group, nextPath, prevPath} }) => (
  <Layout>
  <div>
    {
      group.map(({ node }) => (
        <Post
          key={node.fields.slug}
          link={`/posts/${node.fields.slug}`}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          body={node.html}
        />
      ))
    }

    <div className={ styles.buttons }>
      {
        nextPath &&
        <Link className={ styles.newerButton } to={nextPath}>
          <span className={styles.icon}>
            {pointLeft}
          </span>
        </Link>
      }
      {
        prevPath  &&
          <Link className={styles.olderButton} to={prevPath}>
            <span className={styles.icon}>
              {pointRight}
            </span>
          </Link>
      }
    </div>
  </div>
</Layout>
);
