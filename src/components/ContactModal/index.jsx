import React from 'react';
import HashModal from '../HashModal';

import * as styles from './index.module.css'

const bird = String.fromCodePoint(0x1F426)
const envelope = String.fromCodePoint(0x2709, 0xFE0F)

const ContactModal = () => (
  <HashModal path='contact'>
    <h2>contact</h2>
    <span className={styles.contactMethods}>
      <a href="mailto:dean@tambling.me">{envelope}</a>
      <span>or</span>
      <a href="https://twitter.com/DeanTambling" target="_blank" rel="noopener noreferrer">{bird}</a>
    </span>
  </HashModal>
);

export default ContactModal;
