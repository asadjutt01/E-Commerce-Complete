import React from 'react'
import { useContext } from 'react'
import { shopcontext } from '../context/shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import Productdisplay from '../components/Productdisplay/Productdisplay'
import Descriptionbox from '../components/Descriptionbox/Descriptionbox'
import Relatedproduct from '../components/Relatedproduct/Relatedproduct'
const Product = () => {
  const { all_product } = useContext(shopcontext)
  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  
  return (
    <div className='md:my-12 lg:my-20 my-8'>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
      <Descriptionbox />
      <Relatedproduct/>
    </div>
  )
}

export default Product
