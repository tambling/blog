import React from 'react';
import { Link } from 'gatsby';

import styles from './index.module.css';

import AboutModal from '../AboutModal';
import CurrentlyModal from '../CurrentlyModal';
import ContactModal from '../ContactModal';

import HashLink from '../HashLink';

export default ({ children }) => (
  <div className={styles.page}>
    <header className={styles.pageHeader}>
      <nav>
        <Link to="/"><h1>dean tambling</h1></Link>
        <ul>
          <li><HashLink to="about">about</HashLink></li>
          <li><HashLink to="currently">currently</HashLink></li>
          <li><HashLink to="contact">contact</HashLink></li>
        </ul>
      </nav>
    </header>

    <main>
      {children}
    </main>

    <AboutModal />
    <CurrentlyModal />
    <ContactModal />
  </div>
);
