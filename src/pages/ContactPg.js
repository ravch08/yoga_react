import React from 'react';
import Banner from '../components/Banner';

const ContactPg = () => {
   return (

      <>
         <Banner title="CONTACT" />
         <div className="contact-sec">
            <div className="container p-0">
               <div className="row">
                  <div className="col-sm-12 col-lg-6">
                     <div className="map mb-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83191.97489813127!2d77.18162713708382!3d28.575212543839154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfab96ffffff3%3A0xdfdea9c8110aabff!2sDivyaa%20Yoga%20Institute!5e0!3m2!1sen!2sin!4v1575010866174!5m2!1sen!2sin"
                           className="w-100" title="Map" style={{ height: "400", frameborder: "0", border: "0" }} />

                     </div>
                     <div className="address">
                        <div className="d-block mb-4">
                           <h3>Address</h3>
                           <p>210, Cross Road Broadway ,<br /> Lorem City, Indian 18813</p>
                        </div>
                        <div className="d-flex justify-content-between">
                           <div className="phone">
                              <h3>Phone</h3>
                              <p>+ 91 76949 39493</p>
                           </div>
                           <div className="email">
                              <h3>Email</h3>
                              <p>Info@divyaayogainstitute.com</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-sm-12 col-lg-6">
                     <form>
                        <div className="form-group">
                           <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                           <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                           <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                           <input type="tel" className="form-control" placeholder="Number" />
                        </div>
                        <div className="form-group">
                           <textarea name="message" className="w-100 form-control" rows="6"
                              placeholder="Message"></textarea>
                        </div>
                        <div className="text-center">
                           <button type="submit" className="w-btn btn-s">Submit</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
};

export default ContactPg;