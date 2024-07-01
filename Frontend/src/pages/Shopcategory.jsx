import React,{useContext} from 'react'
import { shopcontext } from '../context/shopcontext'
import dropdown_icon from '../components/assets/dropdown_icon.svg'
import Item from '../components/Item/Item'
const Shopcategory = (props) => {

  const {all_product} = useContext(shopcontext)

  return (
    <div className='shopcategory  flex flex-col items-center'>
      <img className='shopcategory-banner sm:mx-auto sm:my-8 mb-4 sm:w-[90%]'  src={props.banner} alt="banner" />
      <div className='shopcategory-indexsort flex items-center justify-between mx-40 w-[90%]'>
        <p className='flex max-sm:flex-col gap-1'>
          <span className='flex  items-center sm:text-xl text-base font-semibold'>Showing 1-12</span><span className='flex items-center sm:text-base text-sm'>Out of 36 products</span>
        </p>
        <div className='shopcategory-sort flex px-5 sm:py-3 py-2 border border-black rounded-full'>
            <span className='sm:text-base text-sm'>Sort by</span> <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='shopcategory-products  grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-[30px]  my-[50px]'>
        {all_product.map((item,i)=>{
          if (props.category === item.category) {
            return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }else{
            return null
          }
        })}
      </div>
      <div className="loadmore  flex px-5 sm:py-3 py-2 border border-black rounded-full sm:text-base text-sm">
        Explore more
      </div>
    </div>
  )
}

export default Shopcategory
