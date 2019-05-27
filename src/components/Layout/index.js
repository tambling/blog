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
        <img src="https://github.com/tambling.png" alt="Dean Tambling, wearing a ballcap that says 'Cats'" className={styles.image} />
        <h1><Link to="/">dean tambling</Link></h1>
        <ul>
          <li><h6><HashLink to="about">about</HashLink></h6></li>
          <li><h6><HashLink to="currently">currently</HashLink></h6></li>
          <li><h6><HashLink to="contact">contact</HashLink></h6></li>
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
