import React from 'react'
import data_product from '../assets/data.js'
import Item from '../Item/Item'

const Relatedproduct = () => {
    return (
        <div className='realted flex items-center flex-col 2xl:h-[90vh] '>
            <h1 className='text-3xl font-bold text-[#171717]'>Related Products</h1>
            <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
            <div className='popular-item  grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-[30px] mt-[50px]'>
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>

        </div>
    )
}

export default Relatedproduct
