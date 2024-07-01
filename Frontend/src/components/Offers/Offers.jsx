import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'


const Offers = () => {
  return (
    <div className='offers w-[75%] 2xl:w-[80%] xl:w-[85%]  mx-auto my-14 lg:px-20 px-3 lg:h-[60vh] rounded-lg leading-10 flex overflow-hidden bg-gradient-to-t from-red-200 max-md:flex-col justify-center items-center'>
      <div className="offers-left w-[50%] max-sm:w-[80%] flex flex-1 flex-col justify-center gap-2">
        <h1 className='text-[#ff4343] text-7xl max-xl:text-5xl max-lg:text-3xl font-semibold'>EXCLUSIVE</h1>
        <h1 className='text-[#171717] text-6xl max-xl:text-4xl max-lg:text-3xl font-semibold'>OFFERS FOR YOU</h1>
        <p className='text-2xl max-lg:text-xl text-[#171717] font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
        <div className='flex max-md:justify-center max-md:items-center'>
          <button class="flex justify-center items-center  gap-4 w-[282px] h-[70px] max-xl:w-[260px] max-xl:h-[60px] max-lg:w-[205px] max-lg:h-[50px] p-4 max-lg:p-2  mt-[30px]  cursor-pointer  text-3xl max-lg:text-2xl text-white font-medium rounded-full bg-[#ff4141] border hover:border-[#470f0f] shadow-lg">Check Now</button></div>
      </div>
      <div className="offers-right md:w-[50%] w-[80%] flex items-center max-md:justify-center">
        <img className='max-md:w-[70%] max-sm:w-[90%]' src={exclusive_image} alt="Exclusive_Image" />
      </div>
    </div>
  )
}

export default Offers
