import React from 'react'

import styles from './index.module.css';

export default ({ data }) => (
  <div>
    {
      data.allMarkdownRemark.edges.map(({ node }) => (
        <article>
          <header>
            <h1>{node.frontmatter.title}</h1>
            <p className={ styles.date }>{node.frontmatter.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{__html: node.html}}/>
        </article>
      ))
    }

    <div className={ styles.buttons }>
      <p className={ styles.newerButton }>
        <span className={styles.icon}>
          {String.fromCodePoint(0x1F448)}
      </span>
      </p>
      <p className={ styles.olderButton }>
        <span className={styles.icon}>
          {String.fromCodePoint(0x1F64C)}
      </span>
      </p>
    </div>
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          html
        }
      }
    }
  }
`
