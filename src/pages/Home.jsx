import React from 'react';
import Hero from '../componets/Hero';
import Service from '../componets/Service';
import IconSection from '../componets/IconSection';
import Footer from '../componets/Footer';
import Testimonial from '../componets/Testimonial';
import Contact from '../componets/Contact';

function Home() {
  return (
    <>
      <Hero/>
      <IconSection/>
      <Service/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home