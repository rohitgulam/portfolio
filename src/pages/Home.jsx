import React from 'react';
import Hero from '../componets/Hero';
import Service from '../componets/Service';
import IconSection from '../componets/IconSection';
import Footer from '../componets/Footer';
import Testimonial from '../componets/Testimonial';

function Home() {
  return (
    <>
      <Hero/>
      <IconSection/>
      <Service/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default Home