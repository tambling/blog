import React from 'react';
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link';
import { GoogleFont } from 'react-typography';

import styles from './index.module.css';
import typography from '../utils/typography';
import HashLink from '../utils/HashLink';
import HashModal from '../utils/HashModal';

export default ({ children }) => (
  <div className={styles.page}>
    <Helmet>
      <meta charset="UTF-8" />
      <GoogleFont typography={typography} />
    </Helmet>

    <header className={styles.pageHeader}>
      <div>
        <Link to="/"><h1>dean tambling</h1></Link>
        <ul>
          <li><HashLink to="about">about</HashLink></li>
          <li><HashLink to="currently">currently</HashLink></li>

        </ul>
      </div>
    </header>

    <main>
      {children()}
    </main>

      <HashModal path='about'>
        about
      </HashModal>

      <HashModal path='currently'>
        currently
      </HashModal>
  </div>
);
