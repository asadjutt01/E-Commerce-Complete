import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props) => {
    return (
        <div className='item w-[350px] max-2xl:w-[300px] max-lg:w-[270px] cursor-pointer'>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)}  className='rounded-lg' src={props.image} alt="Image" /></Link>
            <p className='my-[6px]'>{props.name}</p>
            <div className='item-prices flex gap-5'>
                <div className='item-price-old line-through text-[#8c8c8c] font-medium'>
                    ${props.old_price}
                </div>
                <div className='item-price-new text-[#374151] text-[18px] font-semibold'>
                    ${props.new_price}
                </div>
            </div>
        </div>
    )
}

export default Item
