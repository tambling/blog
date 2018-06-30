import React from 'react';
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link';
import { GoogleFont } from 'react-typography';

import styles from './index.module.css';
import typography from '../utils/typography';

import HashLink from '../components/HashLink';
import HashModal from '../components/HashModal';

export default ({ children }) => (
  <div className={styles.page}>
    <Helmet>
      <meta charset="UTF-8" />
      <GoogleFont typography={typography} />
    </Helmet>

    <header className={styles.pageHeader}>
      <nav>
        <Link to="/"><h1>dean tambling</h1></Link>
        <ul>
          <li><HashLink to="about">about</HashLink></li>
          <li><HashLink to="currently">currently</HashLink></li>
        </ul>
      </nav>
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
