import React from 'react';
import {Helmet} from 'react-helmet';

import Post from '../components/Post';

import Layout from '../components/Layout';

export default ({pageContext: {node: {frontmatter: {title, date}, html}}}) => { 
  return(
    <Layout>
        <Helmet>
          <title>{title} | tambling dot me</title>
        </Helmet>

        <Post
          title={title}
          date={date}
          body={html}
        />
    </Layout>
  )
};
