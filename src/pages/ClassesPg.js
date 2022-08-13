import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner';
import Events from '../components/Events';
import Testimonial from '../components/Testimonial';

import oc1 from '../assets/oc-1.jpg';
import oc2 from '../assets/oc-2.jpg';
import oc3 from '../assets/oc-3.jpg';
import oc4 from '../assets/oc-4.jpg';
import oc5 from '../assets/oc-5.jpg';

const ClassesPg = () => {

   return (
      <>
         <Banner title="CLASSES" />

         <div class="clss-sec">
            <div class="container">
               <div class="row mb-5 justify-content-center">
                  <div class="title text-center">
                     <h2 class="mb-3">Lorem ipsum</h2>
                     <h6>Lorem ipsum dolor sit amet consectetur adipisicing </h6>
                  </div>
               </div>

               <div class="row mb-4">

                  <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                     <div class="oc-box text-center">
                        <Link to="">
                           <figure><img alt="Bikram Yoga" src={oc1} /></figure>
                           <h3>Bikram Yoga</h3>
                        </Link>
                        <p>October 2, 2019 - 13:00 - 15:00
                           <br />
                           By : Anurag Bashu
                        </p>
                        <Link to="" class="w-btn btn-s">Join now</Link>
                     </div>
                  </div>

                  <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                     <div class="oc-box text-center">
                        <Link to="">
                           <figure><img alt="Power Yoga" src={oc2} /></figure>
                           <h3>Power Yoga</h3>
                        </Link>
                        <p>October 2, 2019 - 13:00 - 15:00
                           <br />
                           By : Anurag Bashu
                        </p>
                        <Link to="" class="w-btn btn-s">Join now</Link>
                     </div>
                  </div>

                  <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                     <div class="oc-box text-center">
                        <Link to="">
                           <figure><img alt="Vinyasa Yoga" src={oc3} /></figure>
                           <h3>Vinyasa Yoga</h3>
                        </Link>
                        <p>October 2, 2019 - 13:00 - 15:00
                           <br />
                           By : Anurag Bashu
                        </p>
                        <Link to="" class="w-btn btn-s">Join now</Link>
                     </div>
                  </div>

                  <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                     <div class="oc-box text-center">
                        <Link to="">
                           <figure><img alt="Ashtanga Yoga" src={oc4} /></figure>
                           <h3>Ashtanga Yoga</h3>
                        </Link>
                        <p>October 2, 2019 - 13:00 - 15:00
                           <br />
                           By : Anurag Bashu
                        </p>
                        <Link to="" class="w-btn btn-s">Join now</Link>
                     </div>
                  </div>

                  <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                     <div class="oc-box text-center">
                        <Link to="">
                           <figure><img alt="Iyengar Yoga" src={oc5} /></figure>
                           <h3>Iyengar Yoga</h3>
                        </Link>
                        <p>October 2, 2019 - 13:00 - 15:00
                           <br />
                           By : Anurag Bashu
                        </p>
                        <Link to="" class="w-btn btn-s">Join now</Link>
                     </div>
                  </div>

                  <div class="col-xs-12 col-sm-6 col-lg-4 ">
                     <div class="oc-box text-center">
                        <Link to="">
                           <figure><img alt="Iyengar Yoga" src={oc5} /></figure>
                           <h3>Iyengar Yoga</h3>
                        </Link>
                        <p>October 2, 2019 - 13:00 - 15:00
                           <br />
                           By : Anurag Bashu
                        </p>
                        <Link to="" class="w-btn btn-s">Join now</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <Testimonial />
         <Events />
      </>
   )
};

export default ClassesPg;