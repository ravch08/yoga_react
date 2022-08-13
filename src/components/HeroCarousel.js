import React from 'react';

import bannerImg from '../assets/banner.jpg'

const HeroCarousel = () => {

   return (
      <div id="mslider" className="carousel slide" data-ride="carousel">

         <div className="carousel-inner">
            <div className="carousel-item active">
               <img src={bannerImg} className="d-block w-100" alt="..." />
               <div className="carousel-caption d-none d-md-block ">
                  <h5>Body & Soul</h5>
                  <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
                     for previewing layouts
                     and visual mockups.</p>
                  <p><a href="classNamees.html">Join Now</a></p>

               </div>
            </div>
            <div className="carousel-item">
               <img src={bannerImg} className="d-block w-100" alt="..." />
               <div className="carousel-caption d-none d-md-block ">
                  <h5>Body & Soul</h5>
                  <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
                     for previewing layouts
                     and visual mockups.</p>
                  <p><a href="classNamees.html">Join Now</a></p>
               </div>
            </div>
            <div className="carousel-item">
               <img src={bannerImg} className="d-block w-100" alt="..." />
               <div className="carousel-caption d-none d-md-block ">
                  <h5>Body & Soul</h5>
                  <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
                     for previewing layouts
                     and visual mockups.</p>
                  <p><a href="classNamees.html">Join Now</a></p>
               </div>
            </div>
         </div>

         <a className="carousel-control-prev" href="#mslider" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="sr-only">Previous</span>
         </a>
         <a className="carousel-control-next" href="#mslider" role="button" data-slide="next">
            <span className="carousel-control-next-icon"></span>
            <span className="sr-only">Next</span>
         </a>
      </div>
   )
};

export default HeroCarousel;