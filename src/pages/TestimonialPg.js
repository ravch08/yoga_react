import React from 'react';

import Banner from '../components/Banner';
import Events from '../components/Events';
import Testimonial from '../components/Testimonial';

const TestimonialPg = () => {

   const styling = {
      newStyle: {
         color: '#111',
         backgroundImage: 'none'
      }
   };

   return (
      <>
         <Banner title="TESTIMONIALS" />
         <Testimonial style={styling.newStyle} />
         <Events />
      </>
   )
};

export default TestimonialPg;