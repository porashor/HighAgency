import React from 'react'
import Header from './Header'
import { progress } from '../Data/dataAll'

const Progress = () => {
  return (
    <div className='py-10'>
        <div className='w-[90%] mx-auto'>
            {/* header section */}
            <Header first={"Our"} sec={"progress"}/>
            {/* main body section */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center justify-between'>{progress.map((item, index)=>(
                <div key={index} className='py-10'>
                    {/* image section */}
                    <div className='border-4 rounded-full w-[80%] flex items-center justify-center aspect-square border-slate-500 mx-auto'>
                        <div>
                            <div className='bg-yellow-600 w-[30px] h-[30px] flex items-center justify-center rounded-full mx-auto -translate-y-8 text-white font-semibold'>{index}</div>
                            <img src={item.img} alt="" className='h-[120px] object-cover' />
                        </div>
                    </div>
                    {/* progress title */}
                    <div>
                        <h1 className='text-center font-semibold uppercase py-4 text-xl'>{item.title}</h1>
                    </div>
                    {/* progress details */}
                    <div className='text-center line-clamp-2 text-slate-500'>{item.details}</div>
                </div>
            ))}</div>
        </div>
    </div>
  )
}

export default Progress
