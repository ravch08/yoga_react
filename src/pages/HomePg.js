import React from 'react'

import HeroCarousel from '../components/HeroCarousel';
import Welcome from '../components/Welcome';
import Classes from '../components/Classes';
import Experience from '../components/Experience';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import Events from '../components/Events';
import Blog from '../components/Blog';

const HomePg = () => {
   return (
      <>
         <HeroCarousel />
         <Welcome />
         <Classes />
         <Services />
         <Experience />
         <Blog />
         <Testimonial />
         <Events />
      </>
   )
}

export default HomePg;  