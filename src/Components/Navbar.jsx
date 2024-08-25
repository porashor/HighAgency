import React, { useState } from 'react'
import { navData, NavIcon, phone } from '../Data/dataAll'
import { MdMenu } from 'react-icons/md'
import { FaX } from 'react-icons/fa6'

const Navbar = () => {
    const [manu, setMenu] = useState(false)
  return (
    <div>
        {/* top-header */}
        <div className='bg-[#202122] text-white py-2 text-xl hidden md:block'>
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
                <div className='md:flex gap-2 lg:gap-4 font-semibold hidden'>
                    {navData.map((item, index)=>(
                        <div key={index} className='group'><a href={item.link} className='text-xs lg:text-xl'>{item.name}</a><div className='w-full h-[4px]  my-2 bg-white/0 transition-all duration-300 group-hover:bg-[#99dd2c] '></div></div>
                    ))}
                </div>
                {/* mobile navber */}
                <div className='md:hidden text-2xl'>
                    {manu ? <MdMenu onClick={()=>setMenu(false)}/> : <FaX onClick={()=>setMenu(true)}/> }
                </div>
                <div className={`w-fit h-fit  bg-black/70 backdrop-blur-lg absolute top-[80px] right-[50px] rounded-md ${manu? "hidden": "block md:hidden"}`}>
                {/* top header icon nav */}
                <div className='flex gap-2 px-6 py-3'>
                    {NavIcon.map((item, index)=>(
                        <div key={index} className='bg-[#2f3031] p-2 rounded-full cursor-pointer text-sm text-white/70 hover:text-white transition-all duration-200'>{item}</div>
                    ))}
                </div>
                {/* main navber  */}
                <div className='text-white px-6'>
                <div className='font-semibold'>
                    {navData.map((item, index)=>(
                        <div key={index} className='group'><a href={item.link} className='text-xs lg:text-xl'>{item.name}</a><div className='w-full h-[4px]  bg-white/0 transition-all duration-300 group-hover:bg-[#99dd2c] '></div></div>
                    ))}
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
