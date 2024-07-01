import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import navprofile from '../assets/navprofile.png'
import dropdown from '../assets/dropdown_icon.png'

const Navbar = () => {
    return (
        <nav className='bg-red-300 z-50 shadow-xl sticky top-0'>
            <div className='flex justify-between lg:mx-10 max-lg:mx-4'>

                <div className='nav-logo  flex items-center px-5 max-lg:px-2 sm:py-2'>
                    <Link to="/" className='flex items-center px-5 max-lg:px-2 '>
                        <img className='max-lg:w-10' src={logo} alt="logo" />
                        <span className='flex flex-col'>

                            <span className='font-bold max-lg:text-xl lg:text-3xl'>SHOPPER</span>
                            <span className='text-red-600 text-red max-lg:text-sm lg:text-base'>Admin panel</span>
                        </span>
                    </Link>

                </div>

                <div className="nav-login-cart flex justify-center items-center gap-2 cursor-pointer ">
                    <img src={navprofile} className='lg:w-10 max-lg:w-8' alt="" />
                    <span>Asad Jutt</span>
                    <img src={dropdown} className='lg:w-3 max-lg:w-2' alt="" />
                </div>

            </div>
        </nav >
    )
}

export default Navbar
