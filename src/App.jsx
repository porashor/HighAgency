import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Advantages from './Components/Advantages';

const App = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Hero/>
      <Advantages/>
    </div>
  )
}

export default App
