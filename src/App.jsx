import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Advantages from './Components/Advantages';
import Services from './Components/Services';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Progress from './Components/Progress';
import People from './Components/People';
import Skill from './Components/Skill';
import 'chart.js/auto';
import FormSec from './Components/FormSec';
import Located from './Components/Located';
import Foother from './Components/Foother';


const App = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Hero/>
      <Advantages/>
      <About/>
      <Services/>
      <Portfolio/>
      <Progress/>
      <People/>
      <Skill/>
      <FormSec/>
      <Located/>
      <Foother/>
    </div>
  )
}

export default App
