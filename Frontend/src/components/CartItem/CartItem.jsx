import React, { useContext } from 'react'
import { shopcontext } from '../../context/shopcontext'
import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'

const CartItem = () => {

    const { all_product, cartItem, addtocart, removefromcart, gettotalcartamount } = useContext(shopcontext)

    return (
        <div className='cartitem  xl:mx-44 md:mx-20 mx-5 my-2'>
            <h1 className='mb-6 lg:text-4xl text-2xl font-serif font-bold text-center'>Manage Your Cart</h1>
            <div className='max-lg:hidden'>
                <div>
                    <div className='cartitem-format-main grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] py-3 gap-10 items-center text-center md:text-xl max-md:text-base font-semibold'>
                        <p>Products</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Adjust Qty</p>
                    </div>
                </div>

                <hr className='h-[3px]' />
                {all_product.map((e) => {
                    if (cartItem[e.id] > 0) {
                        return (
                            <>
                                <div key={e.id} className='cartitem-format py-4 grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr]  text-center  gap-10 items-center md:text-xl max-md:text-base font-semibold'>
                                    <span className='w-[80px]'><img src={e.image} alt="" /></span>
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className='product-quantity w-12 h-12 border '>{cartItem[e.id]}</button>
                                    <p>${e.new_price * cartItem[e.id]}</p>
                                    <div className='flex justify-center gap-4 mx-3'>
                                        <img src={minus} onClick={() => removefromcart(e.id)} alt="" />
                                        <img src={plus} onClick={() => addtocart(e.id)} alt="" />
                                    </div>

                                </div>
                                <hr className='h-[3px]' />
                            </>
                        )
                    }
                    return null
                })}
            </div>
            <div className='lg:hidden'>
                <hr className='h-[1px] bg-black border-none' />
                {all_product.map((e) => {
                    if (cartItem[e.id] > 0) {
                        return (
                            <div key={e.id} className='my-4'>

                                <div className='cartitem-format grid grid-cols-[1.5fr_3fr]  gap-5 my-3 md:text-xl max-md:text-base font-medium'>
                                    <span className='flex flex-col items-center'>
                                        <p className='text-xl font-semibold'>Product</p>
                                        <img className='w-[80px]' src={e.image} alt="" />
                                    </span>
                                    <span className='flex flex-col items-center'>
                                        <p className='text-xl font-semibold '>Title</p>
                                        <p className='text-center'>{e.name}</p>
                                    </span>
                                    <span className='flex flex-col items-center'>
                                        <p className='text-xl font-semibold'>Price</p>
                                        <p>${e.new_price}</p>
                                    </span>
                                    <span className='flex flex-col items-center'>
                                        <p className='text-xl font-semibold'>Quantity</p>
                                        <button className='product-quantity w-12 h-12 border '>{cartItem[e.id]}</button>
                                    </span>
                                    <span className='flex flex-col items-center'>
                                        <p className='text-xl font-semibold'>Total</p>
                                        <p>${e.new_price * cartItem[e.id]}</p>
                                    </span>
                                    <span className='flex flex-col items-center'>
                                        <p className='text-xl font-semibold'>Adjust Quantity</p>
                                        <div className='flex gap-6'>
                                            <img src={minus} onClick={() => removefromcart(e.id)} alt="" />
                                            <img src={plus} onClick={() => addtocart(e.id)} alt="" />
                                        </div>
                                    </span>


                                </div>
                                <hr className='h-[2px] bg-black border-none' />
                            </div>
                        )
                    }


                })}



            </div>

            <div className='cartitem-down flex max-lg:flex-col-reverse max-lg:items-center gap-5 my-20'>
                <div className="cartitem-total flex flex-1 flex-col gap-10 w-[60%]">
                    <h1 className='text-3xl max-lg:text-center font-serif font-semibold'>
                        Cart Total
                    </h1>
                    <div>
                        <div className='flex justify-between py-4'>
                            <p>SubTotal</p>
                            <p>${gettotalcartamount()}</p>
                        </div>
                        <hr />
                        <div className='flex justify-between py-4'>
                            <p>Shipping fee</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className='flex justify-between py-4'>
                            <h3>Total :</h3>
                            <h3>${gettotalcartamount()}</h3>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='border outline-none text-base font-medium rounded-md p-4 w-60 bg-red-300 border-[#7a7a7a] text-black shadow-sm cursor-pointer active:bg-[#f3f3f3]'>Proceed to Checkout</button>
                    </div>

                </div>
                <div className='promcode text-center flex flex-col items-center mx-3 sm:w-[40%]'>
                    <p>If You have a Promo Code,Enter it here</p>
                    <div className='flex flex-col'>
                        <input className='p-3 my-2 border border-[#7a7a7a] rounded-lg' type="text" placeholder="Name" />
                        <button className='border outline-none text-base font-medium rounded-md p-4 w-60 bg-red-300 border-[#7a7a7a] text-black shadow-sm cursor-pointer active:bg-[#f3f3f3]' type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
