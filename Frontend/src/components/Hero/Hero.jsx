import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'


const Hero = () => {
  return (
    <div className='hero max-md:flex max-md:justify-center  bg-gradient-to-b from-red-100'>
      <div className='flex p-9 max-md:flex-col-reverse max-md:items-center 2xl:mx-44 xl:mx-28 lg:mx-20 md:mx-10'>
        <div className="hero-left md:w-[50%]  flex flex-1 flex-col leading-[1.1] justify-center gap-5">
          <h2 className='text-[#090909] text-2xl max-sm:text-xl font-semibold'>NEW ARRIVALS ONLY</h2>
          <div>
            <div className='hero-hand-icon flex items-center gap-5'>
              <p className='text-8xl max-lg:text-6xl text-[#171717] font-bold'>New</p>
              <img className='w-24 max-lg:w-12' src={hand_icon} alt="Handicon" />
            </div>
            <p className='text-[70px] max-xl:text-4xl text-[#171717] font-bold'>Collections</p>
            <p className='text-[70px] max-xl:text-4xl text-[#171717] font-bold'>For Everyone</p>
          </div>
          <div className='hero_latest_btn flex justify-center items-center  gap-4 w-[310px] h-[70px] max-xl:w-[280px] max-xl:h-[60px] max-lg:w-[230px] max-lg:h-[50px] p-4 max-lg:p-2 rounded-[75px] mt-[30px] bg-[#ff4141] cursor-pointer'>
            <div className='text-2xl max-xl:text-xl max-lg:text-base text-white font-medium'>Latest Collections</div>
            <img src={arrow} className='invert' alt="arrow" />
          </div>
        </div>
        <div className="hero-right md:w-[50%] w-[80%] flex flex-1 justify-center items-center">
          <img className='max-md:w-[70%] max-sm:w-[90%]' src={hero_image} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Hero
