import React from 'react'
import { useEffect, useState } from 'react'
import cross_icon from '../assets/cross_icon.png'
const ProductList = () => {

  const [allproducts, setallproducts] = useState([])

  const FetchInfo = async () => {
    await fetch("http://localhost:4000/allproduct", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => res.json()).then((data) => { setallproducts(data) })
  }

  useEffect(() => {
    FetchInfo();


  }, [])

  const RemoveProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id })
    })
    await FetchInfo();
  }


  return (
    <div className='flex flex-col sm:w-[70vw] items-center sm:h-[80vh] sm:px-8 px-3 py-8  max-sm:w-[90vw] border sm:mt-8 mt-5 lg:mx-5 mx-2 lg:gap-2 gap-2 bg-white rounded-lg'>
      <h1 className='font-semibold lg:text-3xl md:text-2xl sm:text-xl max-sm:text-base'>All Product</h1>


      
        <div className='max-lg:hidden cartitem-format-main grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] py-3 gap-10 items-center text-center md:text-xl max-md:text-base font-semibold w-full'>
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Catogory</p>
          <p>Remove</p>
        </div>
        <hr className='max-lg:hidden w-full h-[3px]' />

        <div className='max-lg:hidden overflow-y-scroll w-full'>
          {allproducts.map((product, index) => {

            return (
              <>

                <div key={index} className='cartitem-format py-4 grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr]  text-center  gap-10 items-center md:text-xl max-md:text-base font-semibold w-full'>
                  <span className='flex justify-center'><img className='xl:w-[80px]' src={product.image} alt="" /></span>
                  <p>{product.name}</p>
                  <p>${product.old_price}</p>
                  <p>${product.new_price}</p>
                  <p>{product.category}</p>
                  <p className='flex justify-center'><img className='cursor-pointer' onClick={() => { RemoveProduct(product.id) }} src={cross_icon} alt="" /></p>



                </div>
                <hr className='w-full h-[3px]' />
              </>
            )


          })}
        </div>
      
      <div className='lg:hidden overflow-y-scroll'>
        {allproducts.map((product, index) => {

          return (
            <>

              <div key={index} className='my-4'>

                <div className='cartitem-format grid grid-cols-[1.5fr_3fr]  gap-5 my-3 md:text-xl max-md:text-base font-medium'>
                  <span className='flex flex-col items-center gap-4'>
                    <p className='text-xl font-semibold'>Product</p>
                    <img className='w-[80px]' src={product.image} alt="" />
                  </span>
                  <span className='flex flex-col items-center gap-4'>
                    <p className='text-xl font-semibold '>Title</p>
                    <p className='text-center'>{product.name}</p>
                  </span>
                  <span className='flex flex-col items-center gap-4'>
                    <p className='text-xl font-semibold'>Old Price</p>
                    <p>${product.old_price}</p>
                  </span>
                  <span className='flex flex-col items-center gap-4'>
                    <p className='text-xl font-semibold'>New Price</p>
                    <p>${product.new_price}</p>
                  </span>

                  <span className='flex flex-col items-center gap-4'>
                    <p className='text-xl font-semibold'>Category</p>
                    <p>{product.category}</p>
                  </span>
                  <span className='flex flex-col items-center gap-4'>
                    <p className='text-xl font-semibold'>Remove</p>

                    <img src={cross_icon} onClick={() => { RemoveProduct(product.id) }} alt="" />


                  </span>


                </div>
                {/* <hr className='h-[2px] bg-black border-none' /> */}
              </div>
              <hr className='w-full h-[3px]' />
            </>
          )


        })}
      </div>

    </div>
  )
}

export default ProductList
