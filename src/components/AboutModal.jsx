import React from 'react';
import HashModal from './HashModal';

export default () => (
  <HashModal path='about'>
    <h2>about</h2>
    <p>Hi, I'm Dean, a fullish-stack software engineer in Los Angeles.</p>
    <ul>
      <li>Currently turning mountains of electronic health records into useful bespoke web applications at <a href="https://www.akidolabs.com/" target="_blank">Akido Labs</a>.</li>
      <li>Before that: minted a new crop of competent beginner software engineers at <a href="https://generalassemb.ly/" target="_blank">General Assembly</a>.</li>
      <li>Before <em>that</em>: squashed bugs and implemented features at every level of a Rails stack at <a href="https://www.everlane.com/" target="_blank">Everlane</a>.</li>
      <li>In a prior life: a student of film and history, a teacher of middle school science, and a barista of <a href="https://en.wikipedia.org/wiki/Coffee" target="_blank">coffee</a>.</li>
    </ul>
  </HashModal>
);

