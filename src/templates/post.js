import React from 'react';

export default ({pathContext: {node: {frontmatter: {title, date}, html}}}) => { 
  return(
  <article>
    <header>
      <h1>{title}</h1>
      <p>{date}</p>
    </header>
    <section dangerouslySetInnerHTML={{__html: html}}/>
    </article>
  )
    };
