import React from 'react';
import HashModal from './HashModal';

export default () => (
  <HashModal path='currently'>
    <h2>currently</h2>
    <p>Right now, I am:</p>
    <ul>
      <li><em>Living in</em>: San Jose, California</li>
      <li><em>Working at</em>: <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><em>Making</em>: Yeeter, a write-only Twitter client (really!)</li>
      <li><em>Learning</em>: all of the <a href="https://www.coursera.org/specializations/discrete-mathematics" target="_blank" rel="noopener noreferrer">Discrete Math</a> I've been pretending to know all along</li>
    </ul>
  </HashModal>
);

