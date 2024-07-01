import React from 'react'
import { useEffect,useState} from 'react'
// import new_collections from '../assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
    const [new_collections, setnew_collections] = useState([])
    useEffect(() => {
        fetch("https://e-commerce-backend-ten-gray.vercel.app/newcollection", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          }).then((res) => res.json()).then((data) => { setnew_collections(data) })
    }, [])

    return (

        <div className='newcollection flex items-center flex-col mb-[100px] '>


            <h1 className='text-4xl font-bold text-[#171717]'>New Collection</h1>
            <div>
                <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
            </div>

            <div className="collections grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2   gap-[30px] mt-[50px]">
                {new_collections.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>


        </div>
    )
}

export default NewCollections
