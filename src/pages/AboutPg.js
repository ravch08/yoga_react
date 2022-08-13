import React from 'react';
import Banner from '../components/Banner';

import Events from '../components/Events';
import SectionInfo from '../components/SectionInfo';
import Testimonial from '../components/Testimonial';


const AboutPg = () => {
   return (
      <>
         <Banner title="ABOUT US" />
         <SectionInfo className='row' />
         <Testimonial />
         <SectionInfo className='d-flex flex-row-reverse' />
         <Events />
      </>
   )
};

export default AboutPg;