import React from 'react';
import bannerTextBorder from '../../assets/banner-border.png';

const Banner = (props) => {

   return (
      <div className="banner">
         < div className="container" >
            < div className="row" >
               <div className="col-12 text-center">
                  <h1>{props.title}</h1>
                  <figure><img src={bannerTextBorder} alt="border" /></figure>
               </div>
            </ div >
         </ div >
      </div >
   )
};

export default Banner; 