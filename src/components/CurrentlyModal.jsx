import React from 'react';
import HashModal from './HashModal';

export default () => (
  <HashModal path='currently'>
    <h2>currently</h2>
    <p>Right now, I am:</p>
    <ul>
      <li><em>Living in</em>: Los Angeles, California</li>
      <li><em>Working at</em>: <a href="https://www.akidolabs.com/" target="_blank">Akido Labs</a></li>
      <li><em>Making</em>: <a href="https://github.com/tambling/128x64/tree/experimental" target="_blank">128x64</a>, a framework for tiny games</li>
      <li><em>Learning</em>: C, with the help of <a href="https://github.com/tambling/kandr" target="_blank">Kernighan and Ritchie</a></li>
    </ul>
  </HashModal>
);

