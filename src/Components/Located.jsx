import React, { useEffect, useState } from 'react'
import Header from './Header';
import { BiLocationPlus, BiMessage, BiPhone } from 'react-icons/bi';
import { DiVim } from 'react-icons/di';
import { RPN } from '../Data/dataAll';

const Located = () => {
    const [wid, setWid] = useState((window.innerWidth/100) * 80)
    const [hid, setHid] = useState((window.innerHeight/100) * 80)
    const LN = ["bangladesh", "india", "Pakistan"]
    
    useEffect(()=>{
        const mainWidth = (window.innerWidth/100) * 90
        const mainHight = (window.innerHeight/100) * 80
        setWid(mainWidth)
        setHid(mainHight)
    },[])
    console.log(wid)
  return (
    <div className='bg-slate-100 py-10'>
      <div className='w-[90%] mx-auto'>
        {/* heading section */}
        <Header first={"Our"} sec={"contacts"}/>
        {/* contact section */}
        <div>
            {/* location name section */}
            <div className='flex items-center justify-center gap-4 py-5'>
                <BiLocationPlus className='text-2xl font-bold text-red-800'/>
                {LN.map((item, index)=>(
                    <div className='text-xl capitalize leading-8' key={index}>{item},</div>
                ))}
            </div>
            {/* contact number */}
            <div className='flex items-center justify-center gap-x-3 text-2xl font-semibold py-5'>
                {RPN.map((item, index)=>(
                    <div key={index} className='flex items-center justify-center gap-2'>
                        <div>{item.icon}</div>
                        <div>{item.number}</div>
                    </div>
                ))}
            </div>
        </div>
    {/* location here */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1891648.073295606!2d91.970914!3d22.1783367!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE5JzMyLjAiTiA5McKwNTAnMDAuNCJF!5e0!3m2!1sen!2sbd!4v1725433931900!5m2!1sen!2sbd"
        width={wid}
        height={hid}
      ></iframe>
      </div>
    </div>
  )
}

export default Located
