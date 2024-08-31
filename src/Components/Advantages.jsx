import React from 'react'
import { advance } from '../Data/dataAll'
import Header from './Header'


const Advantages = () => {
  return (
    <div className='w-[90%] mx-auto my-2 space-y-3'>
      {/* header sections */}
      <Header first={'Our'} sec={'Advantages'}/>
      {/* main body for advantage */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center justify-between gap-4 py-2'>
        {advance.map((item, index)=>(
            <div key={index} className='space-y-1 pb-10'>
                {/* icon sec */}
                <div className='text-7xl w-[170px] h-[170px] mx-auto bg-slate-300 p-5 rounded-full text-green-500 flex items-center justify-center'>
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
