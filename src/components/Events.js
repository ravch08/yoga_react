import React from 'react';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

import play from '../assets/play-icon.png';
import event1 from '../assets/event-1.jpg';
import event2 from '../assets/event-2.jpg';
import event3 from '../assets/event-3.jpg';
import event4 from '../assets/event-4.jpg';
import event5 from '../assets/event-5.jpg';
import event6 from '../assets/event-6.jpg';

const Events = () => {

   const url = '#';

   const options = {

      autoplay: 500,
      loop: true,
      margin: 15,
      hover: false,
      dots: false,
      nav: true,
      responsive: {

         0: {
            items: 1
         },
         480: {
            items: 2
         },
         577: {
            items: 3
         },
         768: {
            items: 4
         },
         992: {
            items: 5
         },
         1200: {
            items: 6
         }
      }
   };

   return (
      <div className="event-sec text-center">
         <div className="container-fluid">
            <div className="title">
               <h2>Events</h2>
            </div>

            <OwlCarousel rel='events' {...options}>
               <div className="event-item">
                  <a href={url}>
                     <figure><img alt="Event 1" src={event1} /></figure>
                     <div className="event-hover"><img src={play} alt='play icon' /></div>
                  </a>
               </div>
               <div className="event-item">
                  <a href={url}>
                     <figure><img alt="Event 2" src={event2} /></figure>
                     <div className="event-hover"><img src={play} alt='play icon' /></div>
                  </a>
               </div>
               <div className="event-item">
                  <a href={url}>
                     <figure><img alt="Event 3" src={event3} /></figure>
                     <div className="event-hover"><img src={play} alt='play icon' /></div>
                  </a>
               </div>
               <div className="event-item">
                  <a href={url}>
                     <figure><img alt="Event 4" src={event4} /></figure>
                     <div className="event-hover"><img src={play} alt='play icon' /></div>
                  </a>
               </div>
               <div className="event-item">
                  <a href={url}>
                     <figure><img alt="Event 5" src={event5} /></figure>
                     <div className="event-hover"><img src={play} alt='play icon' /></div>
                  </a>
               </div>
               <div className="event-item">
                  <a href={url}>
                     <figure><img alt="Event 6" src={event6} /></figure>
                     <div className="event-hover"><img src={play} alt='play icon' /></div>
                  </a>
               </div>
            </OwlCarousel>

         </div>
      </div>
   )
}

export default Events;