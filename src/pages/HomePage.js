import React from 'react';
import Home from '../components/Home';
import Template from '../components/Template'

function HomePage() {
  return <Template children={<Home />} />
}

export default HomePage;