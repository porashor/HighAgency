import React from 'react'
import Header from './Header'
import { people } from '../Data/dataAll'
import pic from "../assets/progress/img1.png"




const People = () => {
  return (
    <div className='bg-slate-300 py-10'>
      <div className='w-[90%] mx-auto'>
        {/* header section  */}
        <Header first={"People"} sec={"about us"}/>
        {/* main body section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5'>
            {people.map((item, index)=>(
                <div className='grid grid-cols-[3fr_7fr] items-center justify-center bg-white py-5 rounded-lg' key={index}>
                    {/* image section */}
                    <div className='flex justify-center items-center p-2 '>
                        <div className='bg-slate-300 rounded-full p-3'>
                        <img src={pic} alt="" className='w-[100px] aspect-square ' />
                        </div>
                    </div>
                    {/* details body section */}
                    <div>
                        <h1 className='text-xl uppercase font-semibold py-1'>{item.title}</h1>
                        <h1 className='text-slate-500'>{item.details}</h1>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default People
