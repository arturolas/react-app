import React from 'react';
import Header from '../Header';

function Template(props) {
  return <div>
    <Header />
    {props.children}
  </div>
}

export default Template;