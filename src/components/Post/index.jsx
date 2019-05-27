import React from 'react'
import { Link } from 'gatsby';

import styles from './index.module.css';

export default ({link, title, date, body}) => (
  <article>
    <header className={styles.postHeader}>
        {link ? 
            <Link to={link}><h1>{title}</h1></Link> :
            <h1>{title}</h1>

        }
            <h6 className={ styles.date }>{date}</h6>
          </header>
          <section dangerouslySetInnerHTML={{__html: body}}/>
        </article>
);
