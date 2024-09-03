import React from 'react'

const FormSec = () => {
  return (
    <div className='bg-[#2eb62e] py-10 text-white'>
      <div className='w-[90%] mx-auto'>
        {/* heading section */}
        <div className='text-center uppercase text-4xl md:text-5xl xl:text-6xl font-semibold py-3'>Start your new project </div>
        {/* main form section */}
        <form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-between py-5'>
            <input type="text" placeholder='Your name...' className='text-xl py-1 px-3 rounded-md uppercase outline-none text-black' />
            <input type="email" placeholder='Your email...'  className='text-xl py-1 px-3 rounded-md uppercase outline-none text-black' />
            <input type="number" placeholder='Your phone...' className='text-xl py-1 px-3 rounded-md uppercase outline-none text-black' />
            <button type='submit' className='text-xl py-1 px-3 rounded-md uppercase outline-none bg-[#d3a937]'>Send your request</button>
        </form>
        <div className='text-xs w-[80%] lg:w-[60%] text-center mx-auto py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nam possimus assumenda pariatur nostrum ratione eveniet, nesciunt debitis perferendis aspernatur laudantium cupiditate fugit. Quis aut sapiente beatae quas est labore.</div>
      </div> 
    </div>
  )
}

export default FormSec
