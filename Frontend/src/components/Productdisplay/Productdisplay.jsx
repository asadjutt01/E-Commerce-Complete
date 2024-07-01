import React, { useContext } from 'react'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { shopcontext } from '../../context/shopcontext'

const Productdisplay = (props) => {
    const { product } = props
    const { addtocart } = useContext(shopcontext)
    const image = product ? product.image : 'Unknown';
    const name = product ? product.name : 'Unknown Name';
    const old_price = product ? product.old_price : 'Unknown';
    const new_price = product ? product.old_price : 'Unknown';
    return (
        <div className='productdisplay xl:h-[100vh]  flex max-lg:flex-col gap-5 xl:mx-44 mx-20 max-sm:mx-2'>
            <div className='productdisplay-left xl:h-[80%] max-md:h-[50%]  max-sm:h-[100%] lg:items-start items-center flex max-xl:flex-col-reverse  gap-2 xl:w-1/2 lg:w-[55%]'>
                <div className='productdisplay-image-list flex xl:flex-col  xl:h-[90%]  xl:w-[20%] w-[100%] max-lg:w-[50%] max-md:w-[50%] max-sm:w-[70%] gap-2 object-cover '>
                    <div className='xl:h-1/4 max-xl:w-1/4 overflow-hidden'>
                        <img className='h-[100%] w-[100%] object-cover' src={image} alt="" />
                    </div>
                    <div className='xl:h-1/4 max-xl:w-1/4 overflow-hidden'>
                        <img className='h-[100%] w-[100%] object-cover' src={image} alt="" />
                    </div>
                    <div className='xl:h-1/4 max-xl:w-1/4 overflow-hidden'>
                        <img className='h-[100%] w-[100%] object-cover' src={image} alt="" />
                    </div>
                    <div className='xl:h-1/4 max-xl:w-1/4 overflow-hidden'>
                        <img className='h-[100%] w-[100%] object-cover' src={image} alt="" />
                    </div>



                </div>
                <div className='productdisplay-image-main xl:h-[90%] lg:h-[100%] md:h-[70%]  xl:w-[75%]  max-lg:w-[50%] lg:w-[100%] max-md:w-[50%] max-sm:w-[70%]  overflow-hidden'>
                    <img className='h-[100%] w-[100%] object-cover' src={image} alt="" />
                </div>
            </div>
            <div className='productdisplay-right flex flex-col gap-3 max-md:mx-4 my-5 xl:w-1/2 lg:w-[45%]'>
                <h1 className='lg:text-4xl md:text-3xl max-md:text-2xl font-medium'>{name}</h1>
                <div className='productdisplay-right-star flex items-center my-2'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className='productdisplay-right-price-old text-2xl md:text-xl line-through'>${old_price}</div>
                    <div className='productdisplay-right-price-new text-2xl md:text-xl text-red-500 font-bold'>${new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio voluptates eum veritatis placeat ullam quis, laborum dolores harum asperiores. Corrupti ad eligendi molestias rerum, sunt obcaecati. Ipsam, eaque omnis?
                </div>
                <div className="productdisplay-right-sizes flex flex-col gap-3">
                    <h1 className='lg:text-4xl md:text-3xl max-md:text-2xl font-medium'>Select Sizes</h1>
                    <div className='productdisplay-right-size flex flex-wrap gap-4 my-2'>
                        <div className='border border-black rounded-md px-4 py-3 max-md:px-2 max-md:py-1 bg-[#f3f3f3]'>S</div>
                        <div className='border border-black rounded-md px-4 py-3 max-md:px-2 max-md:py-1 bg-[#f3f3f3]'>M</div>
                        <div className='border border-black rounded-md px-4 py-3 max-md:px-2 max-md:py-1 bg-[#f3f3f3]'>L</div>
                        <div className='border border-black rounded-md px-4 py-3 max-md:px-2 max-md:py-1 bg-[#f3f3f3]'>XL</div>
                        <div className='border border-black rounded-md px-4 py-3 max-md:px-2 max-md:py-1 bg-[#f3f3f3]'>XXL</div>
                    </div>
                    <button onClick={() => addtocart(product.id)} className='border outline-none text-base font-medium rounded-md p-4 sm:w-60 w-52 bg-red-300 border-[#7a7a7a] text-black shadow-sm cursor-pointer active:bg-[#f3f3f3]'>ADD TO CART</button>
                    <p className='productdisplay-right-category'><span className='text-xl font-semibold'>Category : </span><span>Women, T-shirt, Crop top</span></p>
                    <p className='productdisplay-right-category'><span className='text-xl font-semibold'>Tag : </span><span>Modern, Latest</span></p>
                </div>
            </div>
        </div>
    )
}

export default Productdisplay
