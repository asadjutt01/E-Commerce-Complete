import React from 'react'
import { Link } from 'react-router-dom'
import addproduct from '../assets/addproduct.png'
import productlist from '../assets/productlist.png'
const Sidebar = () => {
    return (
        <div className='sidebar flex sm:flex-col 2xl:w-[20vw] xl:w-[25vw] sm:w-[30vw] max-xl:w-[90vw] border sm:h-[80vh] max-sm:justify-center sm:mt-8 mt-5 lg:mx-5 mx-2 lg:gap-5 gap-2 lg:p-8 p-4 bg-white rounded-lg'>
            <Link to={'/addproduct'}>
                <div className='flex gap-5 items-center justify-between border rounded-lg lg:px-5 px-2 lg:py-2 py-1 bg-[#f6f6f6]'>
                    <img className='lg:w-10 max-lg:w-8' src={addproduct} alt="" />
                    <p className='xl:text-lg lg:text-base sm:text-sm text-xs text-black'>Add Product</p>
                </div>
            </Link>
            <Link to={'/productlist'}>
                <div className='flex gap-5 items-center justify-between border rounded-lg lg:px-5 px-2 lg:py-2 py-1 bg-[#f6f6f6]'>
                    <img className='lg:w-10 max-lg:w-8' src={productlist} alt="" />
                    <p className='xl:text-lg lg:text-base sm:text-sm text-xs text-black'>Product List</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
