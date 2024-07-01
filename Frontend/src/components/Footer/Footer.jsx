import React from 'react'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import pintester_icon from '../assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer w-[100%] flex flex-col justify-center items-center gap-[50px] shadow-xl'>
      <div className='footer-logo flex flex-col  items-center gap-[20]px cursor-pointer'>
        <img className='max-lg:w-12' src={footer_logo} alt="footerlogo" />
        <p className='font-bold max-lg:text-xl lg:text-3xl'>SHOPPER</p>
        <hr className='w-[100px] h-[3px] rounded-[10px] bg-[#252525]' />
      </div>
      <ul className='footer-links mx-4  flex justify-center flex-wrap gap-4 text-[#252525] md:text-xl text-base'>
        <li className='cursor-pointer font-serif font-normal hover:underline'>Comapany</li>
        <li className='cursor-pointer font-serif font-normal hover:underline'>Products</li>
        <li className='cursor-pointer font-serif font-normal hover:underline'>Offices</li>
        <li className='cursor-pointer font-serif font-normal hover:underline'>About</li>
        <li className='cursor-pointer font-serif font-normal hover:underline'>Contact</li>
      </ul>
      <div className='foter-social-icon flex  gap-5 '>

        <div className='socail-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#f7d4d4] rounded-lg'>
          <img src={instagram_icon} alt="InstagramIcon" />
        </div>
        <div className='socail-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#f7d4d4] rounded-lg'>
          <img src={whatsapp_icon} alt="InstagramIcon" />
        </div>
        <div className='socail-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#f7d4d4] rounded-lg'>
          <img src={pintester_icon} alt="InstagramIcon" />
        </div>

      </div>
      <div className='footer-copyright flex flex-col justify-center items-center w-[100%] py-6 gap-[10px]  bg-red-300 shadow-xl'>
      
      <span className='text-[#1a1a1a]'>Copyright &copy; @ 2024 | All Right Reserved</span>
     
      </div>


    </div>
  )
}

export default Footer
