import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';

import * as styles from '../components/Layout/index.module.css';

export default () => { 
  return(
    <Layout>
        <Helmet>
          <title>four oh four | tambling dot me</title>
        </Helmet>

      <div className={styles.message}>
        <h1>ah pips</h1>
        <p>Couldn't find any content at this URL — maybe you followed a bad
        link; maybe I got embarrassed and deleted what used to be here.</p>

        <p>Either way, feel free to go back <Link to="/">home</Link>.</p>
      </div>
    </Layout>
  )
};
