import React from 'react'
import { navData, RPN } from '../Data/dataAll'
import {NavIcon} from "../Data/dataAll"



const Foother = () => {
  return (
    <div className='py-10 bg-[#4ca323] text-white h-fit'>
      <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-start justify-between gap-5'>
        {/* foother main section */}
        <div className='border-r flex flex-col items-start h-full'>
            {/* logo section */}
            <a href="" className='text-4xl uppercase font-bold italic'>HighAgency</a>
            {/* details section */}
            <div className='py-3 text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas perspiciatis facilis natus, vitae ipsum, repellendus eius vel alias inventore eligendi obcaecati consequuntur similique molestiae, sunt soluta harum facere dolores?
            </div>
            {/* marker */}
            <div>@HighAgency 2019</div>
        </div>
        <div className='border-r'>
            {/* header */}
            <div className='text-center uppercase text-2xl py-2 font-semibold'>services</div>
            {/* links */}
            <div>
                {navData.map((item, index)=>(
                    <div key={index}>
                        <a href={item.link}>{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
        <div className='border-r'>
            {/* header */}
            <div className='text-center uppercase text-2xl py-2 font-semibold'>useful links</div>
            {/* links */}
            <div>
                {navData.map((item, index)=>(
                    <div key={index}>
                        <a href={item.link}>{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
        <div className=''>
            {/* header */}
            <div className='text-center uppercase text-2xl py-2 font-semibold'>contact</div>
            {/* links */}
            <div>
                {RPN.map((item, index)=>(
                    <div key={index}>
                        <div className='flex gap-5 items-center text-xl font-semibold'>
                            <div>{item.icon}</div>
                            <div>{item.number}</div>
                        </div>
                    </div>
                ))}
            </div>
            {/* follow us  */}
            <div>
                {/* header */}
                <div className='text-center uppercase text-2xl py-2 font-semibold'>Follow Us</div>
                {/* links */}
                <div className='flex gap-2 '>
                    {NavIcon.map((item, index)=>(
                        <div key={index} className='bg-[#2f3031] p-2 rounded-full cursor-pointer text-sm text-white/70 hover:text-white transition-all duration-200'>{item}</div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Foother
