import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsletter w-[75%] lg:h-[40vh] flex flex-col justify-center items-center mx-auto  gap-[30px] px-44 max-lg:px-7 py-8 my-14 rounded-lg  bg-gradient-to-b from-red-300 '>
      
      <h1 className='text-[#454545] text-6xl max-2xl:text-5xl max-xl:text-4xl max-lg:text-2xl font-semibold text-center ' >Get Exclusive Offfers on Your Email</h1>
      <p className='text-[#454545] text-xl text-center'>Subscribe to our Newletter and Stay Updated</p>
      <div className='flex max-md:flex-col justify-between items-center w-[730px] h-[70px] max-xl:w-[600px] max-xl:h-[65px] max-lg:w-[500px] max-lg:h-[60px] max-md:w-[400px] max-sm:w-[300px] md:rounded-[80px]  md:border-solid  md:bg-white md:shadow-lg max-md:gap-4'>
        <input className='md:w-[500px] max-md:w-[400px] max-sm:w-[250px] text-[16px]  border-none outline-none max-md:rounded-[80px] max-md:border max-md:border-solid max-md:border-[#e3e3e3] max-md:bg-white max-md:shadow-lg text-[#616161] font-serif px-5 py-3 mx-2' type="email" placeholder='Your Email Id' />
        <button className='w-[210px] h-[70px] max-xl:w-[180px] max-xl:h-[65px] max-lg:w-[180px] max-lg:h-[60px]  text-[16px] cursor-pointer bg-black text-white rounded-[80px] px-4 py-3'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
