import React from 'react';
import HashModal from './HashModal';

export default () => (
  <HashModal path='about'>
    <h2>about</h2>
    <p>Hi, I'm Dean, a software engineer in the Bay Area.</p>
    <ul>
      <li>I'm currently liberating data and building friendly interfaces on top of obscure APIs at <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>(!).</li>
      <li>Before that: turned mountains of electronic health records into useful bespoke web applications at <a href="https://www.akidolabs.com/" target="_blank" rel="noopener noreferrer">Akido Labs</a>.</li>
      <li>Before <em>that</em>: squashed bugs and implemented features at every level of a Rails stack at <a href="https://www.everlane.com/" target="_blank" rel="noopener noreferrer">Everlane</a>.</li>
      <li>In a prior life: a student of film and history, a teacher of middle school science, and a barista of <a href="https://en.wikipedia.org/wiki/Coffee" target="_blank" rel="noopener noreferrer">coffee</a>.</li>
    </ul>
  </HashModal>
);

