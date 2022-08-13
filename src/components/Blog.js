import React from 'react';
import { Link } from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";

import blog1 from '../assets/blog-1.jpg';
import blog2 from '../assets/blog-2.jpg';
import blog3 from '../assets/blog-3.jpg';

const Blog = () => {

   const options = {
      autoplay: 500,
      loop: true,
      margin: 30,
      hover: false,
      dots: true,
      nav: false,

      responsive: {
         0: {
            items: 1
         },
         460: {
            items: 1
         },
         768: {
            items: 3
         }
      }
   };

   return (
      <div className="blog-sec">
         <div className="container">

            <div className="row justify-content-center">
               <div className="col-12 col-md-12 col-lg-10">
                  <div className="title text-center">
                     <h2>Blog</h2>
                  </div>

                  <OwlCarousel {...options}>
                     <div className="blog-item">
                        <Link to="">
                           <figure><img alt="Blog 1" src={blog1} /></figure>
                           <h3>You can always control what goes on inside</h3>
                        </Link>
                        <p>Through the practices of yoga, we discover that concern for the happiness…</p>
                     </div>
                     <div className="blog-item">
                        <Link to="">
                           <figure><img alt="Blog 2" src={blog2} /></figure>
                           <h3>Why you should go to yoga</h3>
                        </Link>
                        <p>Through the practices of yoga, we discover that concern for the happiness…</p>
                     </div>
                     <div className="blog-item">
                        <Link to="  ">
                           <figure><img alt="Blog 3" src={blog3} /></figure>
                           <h3>Yoga is a way to freedom</h3>
                        </Link>
                        <p>Through the practices of yoga, we discover that concern for the happiness…</p>
                     </div>
                  </OwlCarousel>

                  <div className="text-center mt-4">
                     <Link to="blog" className="w-btn btn-2">View all</Link>
                  </div>

               </div>
            </div>
         </div>

      </div>
   )
}

export default Blog;