import React from 'react';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

import client from '../assets/t-img.png';

const Testimonial = () => {

   const options = {
      items: 1,
      margin: 0,
      nav: false,
      loop: true,
      dots: true,
      hover: false,
      autoplay: 500
   };

   return (
      <div className="testimonials-sec">
         <div className="container">

            <OwlCarousel {...options}>
               <div className="tm-item">
                  <figure><img alt="Peter Parker" src={client} /></figure>
                  <h3>Beautiful, welcoming Divyaa Yoga Institute</h3>
                  <p>“ Pellentesque aliquet sed magna consequat venenatis. Ut fermentum viverra porta. Nullam dui
                     odio, tempus ut porttitor
                     non, dignissim vel felis. Vestibulum convallis eu eros sit amet pellentesque. Vestibulum
                     ullamcorper, magna vitae ornare
                     pretium, justo tortor auctor eros, eget congue enim est ac odio. Ut vel lobortis tortor. Mauris
                     a cursus diam, vitae
                     interdum ante. ”</p>
               </div>
               <div className="tm-item">
                  <figure><img alt="Peter Parker" src={client} /></figure>
                  <h3>Beautiful, welcoming Divyaa Yoga Institute</h3>
                  <p>“ Pellentesque aliquet sed magna consequat venenatis. Ut fermentum viverra porta. Nullam dui
                     odio, tempus ut porttitor
                     non, dignissim vel felis. Vestibulum convallis eu eros sit amet pellentesque. Vestibulum
                     ullamcorper, magna vitae ornare
                     pretium, justo tortor auctor eros, eget congue enim est ac odio. Ut vel lobortis tortor. Mauris
                     a cursus diam, vitae
                     interdum ante. ”</p>
               </div>
            </OwlCarousel>
         </div>
      </div>
   )
}

export default Testimonial;