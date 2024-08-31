import React from 'react'
import Header from './Header'
import { serviceData } from '../Data/dataAll'
import { BsStar } from 'react-icons/bs'



const Services = () => {
  return (
    <div className='bg-slate-200 py-10'>
      <div className='w-[90%] mx-auto'>
        {/* header section */}
        <Header first={'Our'} sec={'Services'}/>
        {/* main-section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-5 my-10'>
            {serviceData.map((item, index)=>(
                <div key={index} className='bg-slate-300 w-full h-[200px] mt-15 pt-2 rounded-md'>
                    {/* logo section */}
                    <div className='text-4xl p-5 bg-yellow-500 w-fit rounded-full mx-auto -translate-y-12'>
                        <BsStar/>
                    </div>
                    {/* header section */}
                    <div className='text-center uppercase font-semibold text-xl'>{item.name}</div>
                    {/* details section */}
                    <div className='py-1 text-center text-slate-700 leading-4 px-4'>{item.details}</div>
                    {/* read more links */}
                    <div className='text-center '><a href="" className='underline text-green-500'>{item.btn}</a></div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Services
