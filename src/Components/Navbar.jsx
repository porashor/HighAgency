import React from 'react'
import { navData, NavIcon, phone } from '../Data/dataAll'

const Navbar = () => {
  return (
    <div>
        {/* top-header */}
        <div className='bg-[#202122] text-white py-2 text-xl'>
            <div className='w-[90%] mx-auto flex justify-between items-center gap-2'>
                {/* icon nav div */}
                <div className='flex gap-2 '>
                    {NavIcon.map((item, index)=>(
                        <div key={index} className='bg-[#2f3031] p-2 rounded-full cursor-pointer text-sm text-white/70 hover:text-white transition-all duration-200'>{item}</div>
                    ))}
                </div>
                {/* phone and call button div */}
                <div className='flex gap-3 items-center py-2'>
                    {phone.map((item, index)=>(
                        <div key={index}>{item}</div>
                    ))}
                    <button className='text-sm bg-[#99dd2c] text-black font-semibold py-1 px-4 rounded-md'>Call me back</button>
                </div>
            </div>
        </div>
        {/* main-header */}
        <div className='py-5 bg-white text-black'>
            <div className='w-[90%] mx-auto flex justify-between items-center gap-2'>
                {/* logo section */}
                <div>
                    <a href="home" className='text-2xl font-bold uppercase italic'>
                        HighAgency
                    </a>
                </div>
                {/* main navbar sectiom */}
                <div className='flex gap-4 font-semibold '>
                    {navData.map((item, index)=>(
                        <div key={index} className='group'><a href={item.link}>{item.name}</a><div className='w-full h-[4px]  my-2 bg-white/0 transition-all duration-300 group-hover:bg-[#99dd2c]'></div></div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
