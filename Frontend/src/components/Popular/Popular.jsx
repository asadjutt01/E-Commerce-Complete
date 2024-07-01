import React from 'react'
import { useState,useEffect } from 'react'
// import data_product from '../assets/data.js'
import Item from '../Item/Item'

const Popular = () => {

    const [popular_in_women, setpopular_in_women] = useState([])
    useEffect(() => {
        fetch("https://e-commerce-backend-9gkclwdt1-asad-nadeems-projects.vercel.app/popularinwomen", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          }).then((res) => res.json()).then((data) => { setpopular_in_women(data) })
    }, [])

    return (
        <div className='popular flex items-center my-10 flex-col 2xl:h-[80vh] '>
            
                
                <h1 className='text-3xl font-bold text-[#171717]'>POPULAR IN WOMEN</h1>
                <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
                <div className='popular-item grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  gap-[30px] mt-[50px]'>
                    {popular_in_women.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            
        </div>
    )
}

export default Popular
