import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

const Navbar = () => {

   return (

      <header>
         <nav>
            <div className="container">
               <div className="navbar navbar-expand-md">
                  <div className="d-lg-none w-100 d-flex justify-content-between align-items-center">
                     <Link to="/" className="navbar-brand">
                        <img alt="Divyaa Yoga Institute" src={logo} />
                     </Link>

                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_icon"
                        aria-controls="navbar_icon" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                  </div>

                  <div className="collapse navbar-collapse justify-content-center" id="navbar_icon">
                     <ul className="navbar-nav">
                        <li><Link className='nav-link' to="/">Home</Link></li>
                        <li><Link className='nav-link' to="about">About Us</Link></li>

                        <li className="dropdown">
                           <Link className='nav-link' to="classes">Classes</Link>
                           <div className="dropdown-nav">
                              <Link to="">POWER YOGA</Link>
                              <Link to="">BIKRAM YOGA</Link>
                              <Link to="">VINYASA YOGA</Link>
                              <Link to="">CLASSICAL YOGA</Link>
                           </div>
                        </li>
                        <li className="dropdown">
                           <Link className='nav-link' to="services">Services</Link>
                           <div className="dropdown-nav text-right">
                              <Link to="">CLASSICAL YOGA</Link>
                              <Link to="">CLASSICAL YOGA</Link>
                              <Link to="">CLASSICAL YOGA</Link>
                              <Link to="">CLASSICAL YOGA</Link>
                           </div>
                        </li>

                        <li className="center-logo">
                           <Link to="/" className="navbar-brand">
                              <img alt="Divyaa Yoga Institute" src={logo} />
                           </Link>
                        </li>

                        <li><Link className='nav-link' to="events">Events</Link></li>
                        <li><Link className='nav-link' to="testimonial">Testimonials</Link></li>
                        <li><Link className='nav-link' to="blog">Blog</Link></li>
                        <li><Link className='nav-link' to="contact">Contact Us</Link></li>

                     </ul>

                  </div>
               </div>

            </div>
         </nav>
      </header >
   )
};

export default Navbar;