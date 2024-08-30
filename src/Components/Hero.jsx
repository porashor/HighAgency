import React from 'react'
import Slider from 'react-slick';
import { bannerData } from '../Data/dataAll';
import Dhl from "../assets/banner/image2.jpg"



const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false
      };
  return (
    <div className='overflow-hidden'>
      <Slider {...settings}>
        {
            bannerData.map((item, index)=>(
                <div className={`bg-cover bg-center w-full h-[400px] relative`} key={index}>
                    <img src={item.image} alt="" className='w-full h-[600px] object-cover'/>
                    <div className='absolute w-full h-[105%] top-0 backdrop-blur-sm bg-black/20'>
                      <div className='w-[90%] mx-auto h-full flex items-center justify-center'>
                        <div className='text-center text-white text-shadow-lg space-y-4'>
                          <div className='text-shadow-lg text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold '>{item.title}</div>
                          <div className='text-xl text-slate-200'>{item.details}</div>
                          <button className='text-xl font-semibold bg-green-400 rounded-md px-3 py-1'>{item.btnText}</button>
                        </div>
                      </div>
                    </div>
                </div>
            ))
        }
      </Slider>
    </div>
  )
}

export default Hero
