import React from 'react'
import Header from './Header'
import Button from './Button'
import Pic from "../assets/banner/about.png"



const Services = () => {
  return (
    <div className='bg-slate-200 py-10'>
      <div className='w-[90%] mx-auto'>
        {/* header section */}
        <Header first={'Our'} sec={'Services'} low/>
        {/* main body */}
        <div className='py-2 grid grid-cols-1 lg:grid-cols-2 items-center justify-between'>
            {/* text-section */}
            <div className='px-10 py-2 order-2 lg:order-1'>
                <div className='text-slate-700 leading-7 my-3 line-clamp-[9]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente aperiam eaque eveniet hic, enim unde, impedit facilis labore mollitia porro officia quis deserunt sunt nam. Sequi possimus quibusdam, eaque magni quo deserunt est. Impedit sed in consequuntur tenetur libero laborum quo officia distinctio iure doloribus vitae ipsa aliquam exercitationem, provident, quibusdam repellat ipsam eveniet harum aut suscipit atque? Laborum obcaecati at deleniti voluptates quisquam alias illo ipsam rerum quos dolores, velit eos accusantium aut quo, vero odio dignissimos necessitatibus numquam sint magnam mollitia excepturi nostrum inventore? Odit fugit delectus eius pariatur maxime voluptas accusamus, sapiente, corporis voluptatum nulla harum!
                </div>
                <Button>Read more</Button>
            </div>
            {/* image-section */}
            <div className='order-1 lg:order-2'>
                <img src={Pic} alt="" className='w-[80%] h-[80%] ' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
