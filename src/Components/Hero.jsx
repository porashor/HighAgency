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
      };
  return (
    <div>
      this is a hero section
      <Slider>
        {
            bannerData.map((item, index)=>(
                <div className={`bg-cover bg-center w-full h-[400px]`} key={index} style={{ backgroundImage: `url(${Dhl})` }}>
                    <div className='w-[90%] mx-auto py-10'>
                        {item.title}
                    </div>
                </div>
            ))
        }
      </Slider>
    </div>
  )
}

export default Hero
