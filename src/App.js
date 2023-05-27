import React from 'react';
import Nav from './components/nav';
import Shop from './components/shop';
import Upside from './components/upside';
import Featured from './components/featured';
import Bamboo from './components/bamboo';
import Trend from './components/trending';
import Testimonial from './components/testimonial';
import Gallery from './components/gallery';
import Touch from './components/touch';
import Footer from './components/footer';
import './index.css';

export default function App() {
  return (
    <div className='container'>
      <Nav/>
      <Shop/>
      <Upside/>
      <Featured/>
      <Bamboo/>
      <Trend/>
      <Testimonial/>
      <Gallery/>
      <Touch/>
      <Footer/>
    </div>
  );
}

