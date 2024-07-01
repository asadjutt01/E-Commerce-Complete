import React from 'react'
import rightarrow_icon from '../assets/rightarrow_icon.svg'

const Breadcrum = (props) => {
  const { product } = props
  const category = product ? product.category : 'Unknown Category';
  const name = product ? product.name : 'Unknown Name';
  // console.log(product.category)
  return (
    <div className='breadcrum flex text-base max-lg:flex-col font-semibold xl:mx-44 md:mx-20 mx-5 my-2'>
      <span className='flex items-start'>Home<img width={23} src={rightarrow_icon} alt="" /> Shop<img width={23} src={rightarrow_icon} alt="" /> {category} </span>
      <span className='flex items-start'><img width={23} src={rightarrow_icon} alt="" /> <span className='text-ellipsis'>{name}</span></span>
    </div>
  )
}

export default Breadcrum
