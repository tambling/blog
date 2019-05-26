import React from 'react';
import { navigate } from "gatsby"

const HashLink = ({ to, children, history }) => {
  return (<button onClick={() => navigate(`#${to}`)}>
    {children}
  </button>);
}

export default HashLink;

