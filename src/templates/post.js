import React from 'react';
import {Helmet} from 'react-helmet';

import styles from './post.module.css';

export default ({pathContext: {node: {frontmatter: {title, date}, html}}}) => { 
  return(
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
  )
};
