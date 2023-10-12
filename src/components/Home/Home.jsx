import React from 'react';
import logo from '/logo.png'
import { TypeAnimation } from 'react-type-animation';
import Hero from '../Hero/Hero';
import WhyYoga from '../WhyYoga/WhyYoga';

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <WhyYoga></WhyYoga>
    </div>
  );
};

export default Home;