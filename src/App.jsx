import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Advantages from './Components/Advantages';
import Services from './Components/Services';

const App = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Hero/>
      <Advantages/>
      <Services/>
    </div>
  )
}

export default App
