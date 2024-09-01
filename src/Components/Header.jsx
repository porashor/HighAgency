import React from 'react'

const Header = ({first, sec, low}) => {
  return (
    <div className='space-y-1 py-10'>
        {/* upper header */}
        <h1 className='uppercase  font-bold text-center text-2xl md:text-3xl lg:text-4xl'>
            <span>{first} </span><span className='text-green-300'>{sec}</span>
        </h1>
        {/* lower header */}
        <div className={`text-center w-[60%] ${low ? "hidden" : "block"} mx-auto text-slate-600 line-clamp-2`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt suscipit laborum accusamus hic voluptatum, repellat doloribus fuga reiciendis sequi quia sed tempora harum. Distinctio rem inventore de.</div>
      </div>
  )
}

export default Header
