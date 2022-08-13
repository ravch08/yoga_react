import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner';

const EventsDetailPg = () => {
   return (
      <>
         <Banner />

         <div className="gallery-sec" data-aos="fade-up">
            <div className="container p-0">
               <div className="row justify-content-center">
                  <div className="title mb-5" data-aos="fade-up">
                     <h2>Album Name</h2>
                  </div>
               </div>

               <div className="row" id="gallery" data-aos="fade-up">

                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 pics animation all 2">
                     <Link to="">
                        <figure><img className="img-fluid" src="img/gal-1.jpg" alt="Card" /></figure>
                     </Link>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 pics animation all 1">
                     <Link to="">
                        <figure><img className="img-fluid" src="img/gal-2.jpg" alt="Card" /></figure>
                     </Link>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 pics animation all 1">
                     <Link to="">
                        <figure><img className="img-fluid" src="img/gal-3.jpg" alt="Card" /></figure>
                     </Link>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 pics animation all 2">
                     <Link to="">
                        <figure><img className="img-fluid" src="img/gal-4.jpg" alt="Card" /></figure>
                     </Link>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 pics animation all 2">
                     <Link to="">
                        <figure><img className="img-fluid" src="img/gal-5.jpg" alt="Card" /></figure>
                     </Link>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 pics animation all 1">
                     <Link to="">
                        <figure><img className="img-fluid" src="img/gal-6.jpg" alt="Card" /></figure>
                     </Link>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 pics animation all 2">
                     <Link to="">
                        <figure><img className="img-fluid" src="img/gal-1.jpg" alt="Card" /></figure>
                     </Link>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 pics animation all 1">
                     <Link to="">
                        <figure><img className="img-fluid" src="img/gal-2.jpg" alt="Card" /></figure>
                     </Link>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 pics animation all 1">
                     <Link to="">
                        <figure><img className="img-fluid" src="img/gal-3.jpg" alt="Card" /></figure>
                     </Link>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 pics animation all 2">
                     <Link to="">
                        <figure><img className="img-fluid" src="img/gal-4.jpg" alt="Card" /></figure>
                     </Link>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 pics animation all 2">
                     <Link to="">
                        <figure><img className="img-fluid" src="img/gal-5.jpg" alt="Card" /></figure>
                     </Link>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 pics animation all 1">
                     <Link to="">
                        <figure><img className="img-fluid" src="img/gal-6.jpg" alt="Card" /></figure>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
};

export default EventsDetailPg;