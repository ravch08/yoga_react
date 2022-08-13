import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {
   return (
      <div className="eoy-sec">
         <div className="container">

            <div className="row justify-content-end">
               <div className="col-12 col-md-9 col-lg-8">
                  <div className="title">
                     <h2>Experience of Yoga</h2>
                  </div>
                  <ul>
                     <li>Balance Body & Mind</li>
                     <li>Healthy Daily Life</li>
                     <li>Meditation Practice</li>
                     <li>Yoga Month Challenge</li>
                     <li>Boost your willpower</li>
                     <li>Create cool mind</li>
                  </ul>
                  <h3>Start Your Training
                     <Link to="classes" className="w-btn btn-2">Join className</Link>
                  </h3>
               </div>
            </div>
         </div>
      </div >
   )
};

export default Experience;