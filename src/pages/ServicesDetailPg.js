import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner';
import Events from '../components/Events';

const ServicesDetailPg = () => {
   return (
      <>
         <Banner />

         <div className="modal fade" id="service_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
               <div className="modal-content">
                  <div className="modal-header text-center">
                     <h4 className="modal-title w-100 font-weight-bold">Write to us</h4>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div className="modal-body">
                     <div className="md-form mb-3">
                        <input type="text" id="form34" className="form-control validate" placeholder="Name" />
                     </div>

                     <div className="md-form mb-3">
                        <input type="email" id="form29" className="form-control validate" placeholder="Email" />
                     </div>

                     <div className="md-form mb-3">
                        <input type="tel" id="form32" className="form-control validate" placeholder="Phone Number" />
                     </div>

                     <div className="md-form mb-3">
                        <textarea type="text" id="form8" className="md-textarea form-control" rows="4"
                           placeholder="Message"></textarea>
                     </div>

                  </div>
                  <div className="d-flex justify-content-center mb-5">
                     <button className="w-btn btn-2 bdr1-30 border-0">Submit</button>
                  </div>
               </div>
            </div>
         </div>

         <div className="info-sec">
            <div className="container">
               <div className="row mb-5" data-aos="fade-up">
                  <div className="col-sm-12 col-md-5 col-lg-6 text-center">
                     <figure><img src="img/serv-det-img.png" className="info-img" alt="About Us" /></figure>
                  </div>
                  <div className="col-sm-12 col-md-7 col-lg-6 text-right pt-5">
                     <h6>Lorem Ipsum</h6>
                     <h2 className="mb-5">CLASSICAL YOGA</h2>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eveniet officia nemo minima,
                        voluptatibus ullam accusamus, obcaecati, delectus asperiores aliquid soluta! Deleniti porro
                        explicabo nesciunt ipsam numquam voluptate culpa fugit.
                        <br /> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi rem quos, neque sequi
                        nesciunt temporibus ut, aspernatur optio aliquid nulla quo earum voluptate molestiae dignissimos
                        ea, modi ipsum ab.
                     </p>
                     <Link id="join_class" className="w-btn btn-2 bdr1-30 mt-4" data-toggle="modal"
                        data-target="#service_modal">Join Us</Link>
                  </div>
               </div>
            </div>
         </div>

         <Events />
      </>
   )
};

export default ServicesDetailPg;