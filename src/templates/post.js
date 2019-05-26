import React from 'react';
import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';

import styles from './post.module.css';

export default ({pageContext: {node: {frontmatter: {title, date}, html}}}) => { 
  return(
    <Layout>
      <article>
        <Helmet>
          <title>{title} | tambling dot me</title>
        </Helmet>

        <header>
          <h1>{title}</h1>
          <p className={styles.date}>{date}</p>
        </header>
        <section dangerouslySetInnerHTML={{__html: html}}/>
      </article>
    </Layout>
  )
};
