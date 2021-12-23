import React from 'react'
import { Link } from 'gatsby';

import './index.module.css';

const Post = ({link, title, date, body}) => (
  <article>
    <header>
        {link ? 
            <Link to={link}><h1>{title}</h1></Link> :
            <h1>{title}</h1>

        }
            <h6>{date}</h6>
          </header>
          <section dangerouslySetInnerHTML={{__html: body}}/>
        </article>
);

export default Post;
