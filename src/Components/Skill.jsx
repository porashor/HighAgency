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
          <Dog color={"#00a"}  title={"Coding"} value={45}/>
          <Dog color={"#f0a"}  title={"seo and ads"} value={60} />
          <Dog color={"#ffa"}  title={"branding"} value={75} />
          <Dog color={"#0f5"}  title={"web design"} value={80} />
        </div>
      </div>
    </div>
  )
}

export default Skill
