import React from 'react'
import { advance } from '../Data/dataAll'


const Advantages = () => {
  return (
    <div className='w-[90%] mx-auto my-2 space-y-3'>
      {/* header sections */}
      <div className='space-y-1'>
        <h1 className='uppercase py-10 font-bold text-center text-2xl md:text-3xl lg:text-4xl'>
            <span>Our </span><span className='text-green-300'>Advantages</span>
        </h1>
      </div>
      {/* main body for advantage */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center justify-between gap-4 py-2'>
        {advance.map((item, index)=>(
            <div key={index} className='space-y-1 pb-10'>
                {/* icon sec */}
                <div className='text-9xl w-[170px] h-[170px] mx-auto bg-slate-300 p-5 rounded-full text-green-400'>
                    {item.icon}
                </div>
                {/* advance header */}
                <div className='text-2xl text-center uppercase font-semibold py-2'>{item.name}</div>
                <div className='w-[90%] leading-6 text-center text-slate-600 text-xl'>{item.details}</div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Advantages
