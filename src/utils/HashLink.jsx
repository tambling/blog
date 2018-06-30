import React from 'react';
import { navigateTo } from 'gatsby-link';

const HashLink = ({ to, children, history }) => {
  return (<a onClick={() => navigateTo(`#${to}`)}>
    {children}
  </a>);
}

export default HashLink;

