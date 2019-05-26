import React from 'react'
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import styles from './index.module.css';

const pointLeft = String.fromCodePoint(0x1F448)
const pointRight = String.fromCodePoint(0x1F449)

export default ({ data, pageContext: {group, nextPath, prevPath} }) => (
  <Layout>
  <div>
    {
      group.map(({ node }) => (
        <article key={node.fields.slug}>
          <header>
            <Link to={`/posts/${node.fields.slug}`}><h1>{node.frontmatter.title}</h1></Link>
            <p className={ styles.date }>{node.frontmatter.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{__html: node.html}}/>
        </article>
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
