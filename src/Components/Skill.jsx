import React from 'react'
import Header from './Header'
import { Bar, Line } from 'react-chartjs-2'
import Dog from './Dog'





const Skill = () => {
  return (
    <div className='py-10'>
      <div className='w-[90%] mx-auto'>
        {/* header section  */}
        <Header first={"our"} sec={"skills "}/>
        {/* main body of skills  */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center  justify-center gap-3 '>
          <Dog color={"#00a"} per={"45%"} title={"Coding"} value={45} resV={55}/>
          <Dog color={"#f0a"} per={"60%"} title={"seo and ads"} value={60} resV={40}/>
          <Dog color={"#ffa"} per={"75%"} title={"branding"} value={75} resV={25}/>
          <Dog color={"#0f5"} per={"80%"} title={"web design"} value={80} resV={20}/>
        </div>
      </div>
    </div>
  )
}

export default Skill
