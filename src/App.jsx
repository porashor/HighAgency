import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Advantages from './Components/Advantages';
import Services from './Components/Services';
import About from './Components/About';
import Portfolio from './Components/Portfolio';

const App = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Hero/>
      <Advantages/>
      <About/>
      <Services/>
      <Portfolio/>
    </div>
  )
}

export default App
