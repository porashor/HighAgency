import React from 'react'
import Header from './Header'
import { portfolio, portfolioNav } from '../Data/dataAll'

const Portfolio = () => {
  return (
    <div className='bg-slate-800 text-white py-10' >
      <div className='w-[90%] mx-auto'>
        {/* header section */}
        <Header first={"our"} sec={"portfolio"} />
        {/* portfolio navber */}
        <div className='flex items-center justify-center gap-5 py-3'>
            {portfolioNav.map((item , index)=>(
                <div key={index}>
                    <a href={item.link} className='uppercase font-semibold text-xl hover:text-red-600 duration-200 transition-all'>{item.title}</a>
                </div>
            ))}
        </div>
        {/* main body of portfolio section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center justify-between pt-3'>
            {portfolio.map((item, index)=>(
                <div className='' key={index}>
                    <a href={item.title}><img src={item.image} alt="" className='aspect-square'/></a>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
