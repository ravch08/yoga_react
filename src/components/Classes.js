import React from 'react';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

import oc1 from '../assets/oc-1.jpg';
import oc2 from '../assets/oc-2.jpg';
import oc3 from '../assets/oc-3.jpg';
import oc4 from '../assets/oc-4.jpg';
import oc5 from '../assets/oc-5.jpg';

const Classes = () => {

   const options = {
      autoplay: 500,
      loop: true,
      margin: 20,
      hover: false,
      dots: false,
      responsive: {

         0: {
            items: 1
         },
         564: {
            items: 1
         },
         768: {
            items: 2
         },
         992: {
            items: 3
         },
         1200: {
            items: 4
         }
      }
   };

   return (
      <div className="oc-sec text-center">
         <div className="container">
            <div className="title">
               <h2>Our Classes</h2>
            </div>

            <OwlCarousel {...options}>

               <div className="oc-box">
                  <a href="class-detail.html">
                     <figure><img alt="Bikram Yoga" src={oc1} /></figure>
                     <h3>Bikram Yoga</h3>
                  </a>
                  <p>October 2, 2019 - 13:00 - 15:00
                     <br />
                     By : Anurag Bashu
                  </p>
                  <a href="class-detail.html" className="w-btn btn-s">Join now</a>
               </div>
               <div className="oc-box">
                  <a href="class-detail.html">
                     <figure><img alt="Power Yoga" src={oc2} /></figure>
                     <h3>Power Yoga</h3>
                  </a>
                  <p>October 2, 2019 - 13:00 - 15:00
                     <br />
                     By : Anurag Bashu
                  </p>
                  <a href="class-detail.html" className="w-btn btn-s">Join now</a>
               </div>
               <div className="oc-box">
                  <a href="class-detail.html">
                     <figure><img alt="Vinyasa Yoga" src={oc3} /></figure>
                     <h3>Vinyasa Yoga</h3>
                  </a>
                  <p>October 2, 2019 - 13:00 - 15:00
                     <br />
                     By : Anurag Bashu
                  </p>
                  <a href="class-detail.html" className="w-btn btn-s">Join now</a>
               </div>
               <div className="oc-box">
                  <a href="class-detail.html">
                     <figure><img alt="Ashtanga Yoga" src={oc4} /></figure>
                     <h3>Ashtanga Yoga</h3>
                  </a>
                  <p>October 2, 2019 - 13:00 - 15:00
                     <br />
                     By : Anurag Bashu
                  </p>
                  <a href="class-detail.html" className="w-btn btn-s">Join now</a>
               </div>
               <div className="oc-box">
                  <a href="class-detail.html">
                     <figure><img alt="Iyengar Yoga" src={oc5} /></figure>
                     <h3>Iyengar Yoga</h3>
                  </a>
                  <p>October 2, 2019 - 13:00 - 15:00
                     <br />
                     By : Anurag Bashu
                  </p>
                  <a href="class-detail.html" className="w-btn btn-s">Join now</a>
               </div>
               <div className="oc-box">
                  <a href="class-detail.html">
                     <figure><img alt="Iyengar Yoga" src={oc5} /></figure>
                     <h3>Iyengar Yoga</h3>
                  </a>
                  <p>October 2, 2019 - 13:00 - 15:00
                     <br />
                     By : Anurag Bashu
                  </p>
                  <a href="class-detail.html" className="w-btn btn-s">Join now</a>
               </div>
            </OwlCarousel>

         </div>
      </div>
   )
};

export default Classes;