import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePg from './pages/HomePg';
import BlogPg from './pages/BlogPg';
import AboutPg from './pages/AboutPg';
import ErrorPg from './pages/ErrorPg';
import EventPg from './pages/EventPg';
import ContactPg from './pages/ContactPg';
import ClassesPg from './pages/ClassesPg';
import ServicesPg from './pages/ServicesPg';
import TestimonialPg from './pages/TestimonialPg';
import EventsDetailPg from './pages/EventsDetailPg';
import ServicesDetailPg from './pages/ServicesDetailPg';

import './App.css';

const App = () => {

   return (
      <BrowserRouter>
         <Navbar></Navbar>
         <Routes>
            <Route index path='/' element={<HomePg />}></Route>
            <Route path='about' element={<AboutPg />}></Route>
            <Route path='classes' element={<ClassesPg />}></Route>
            <Route path='services' element={<ServicesPg />}>
               <Route path='services-detail' element={<ServicesDetailPg />}></Route>
            </Route>
            <Route path='events' element={<EventPg />}>
               <Route path='events-detail' element={<EventsDetailPg />}></Route>
            </Route>
            <Route path='testimonial' element={<TestimonialPg />}></Route>
            <Route path='blog' element={<BlogPg />}></Route>
            <Route path='contact' element={<ContactPg />}></Route>
            <Route path='*' element={<ErrorPg />}></Route>
         </Routes>
         <Footer></Footer>
      </BrowserRouter >
   )
};

export default App;