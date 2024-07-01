import React from 'react'
import { useState } from 'react'
import uploadarea from '../assets/uploadarea.svg'

const AddProduct = () => {
    const [image, setimage] = useState(false)
    const [Productdetail, setProductdetail] = useState({
        name: "",
        image: "",
        category: "women",
        old_price: "",
        new_price: ""
    })
    const Imagehandler = (e) => {
        setimage(e.target.files[0])
    }
    const Changehandler = (e) => {
        setProductdetail({ ...Productdetail, [e.target.name]: e.target.value })
    }
    const AddProduct = async () => {
        console.log(Productdetail)
        let responsedata;
        let product = { ...Productdetail };

        // Convert prices to numbers
        product.old_price = Number(product.old_price);
        product.new_price = Number(product.new_price);
        let formdata = new FormData()
        formdata.append('product', image)
        await fetch("http://localhost:4000/upload", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formdata
        }).then((resp) => resp.json()).then((data) => { responsedata = data })
        if (responsedata.success) {
            product.image = responsedata.imageurl
            console.log(product)
            await fetch("http://localhost:4000/addproduct", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert("Product Added") : alert("Failed")
            })
        }
    }


    return (
        <div className='flex sm:w-[70vw] items-center md:h-[80vh] sm:px-8 px-3 py-8  max-sm:w-[90vw] border  justify-center sm:mt-8 mt-5 lg:mx-5  lg:gap-5 gap-2 bg-white rounded-lg'>
            <div className='addproduct sm:w-[100%] max-sm:w-[90%] h-[100%] flex flex-col border sm:px-10 px-4 sm:py-10 py-4 sm:gap-8 gap-4 text-[#383838]'>


                <div className="product-title">
                    <p className='xl:text-lg lg:text-base sm:text-sm text-xs'>Product Title</p>
                    <input type="text" value={Productdetail.name} onChange={Changehandler} name='name' placeholder='Type Here' className='box-border w-[100%] h-12 border border-sold border-[#c3c3c3] outline-none text-sm px-2' />
                </div>
                <div className='product-Price flex max-md:flex-col lg:gap-8 gap-4'>
                    <div className="product-old-Price md:w-1/2">
                        <p className='xl:text-lg lg:text-base sm:text-sm text-xs'>Product Price</p>
                        <input type="text" value={Productdetail.old_price} onChange={Changehandler} name='old_price' placeholder='Type Here' className='box-border w-[100%] h-12 border border-sold border-[#c3c3c3] outline-none text-sm px-2' />
                    </div>
                    <div className="product-Offer-Price md:w-1/2 w-full">
                        <p className='xl:text-lg lg:text-base sm:text-sm text-xs'>Product Offer Price</p>
                        <input type="text" value={Productdetail.new_price} onChange={Changehandler} name='new_price' placeholder='Type Here' className='box-border w-[100%] h-12 border border-sold border-[#c3c3c3] outline-none text-sm px-2' />
                    </div>
                </div>

                <div className="product-category flex max-sm:flex-col items-center sm:gap-8 gap-4">
                    <p className='xl:text-lg lg:text-base sm:text-sm text-xs'>Product Category</p>
                    <select value={Productdetail.category} onChange={Changehandler} name="category" className='addproductselector lg:p-2 lg:w-28 lg:h-12 w-26 h-8 text-[#7b7b7b] border border-[#7b7b7b8d] rounded-md'>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kid">Kid</option>
                    </select>
                </div>
                <div className='product-image flex max-sm:flex-col items-center sm:gap-8 gap-4'>
                    <p className='xl:text-lg lg:text-base sm:text-sm text-xs'>Product Category</p>
                    <label htmlFor="file-input">
                        <img src={image ? URL.createObjectURL(image) : uploadarea} className='product-image-thumbnail md:w-[120px] w-[90px] md:h-[120px] h-[90px] object-contain rounded-lg my-2' />
                    </label>
                    <input onChange={Imagehandler} type="file" name="image" id="file-input" hidden />
                </div>

                <div className='flex justify-center items-center'>
                    <button onClick={AddProduct} className='border outline-none text-base font-medium rounded-md sm:p-4 p-3 w-60 bg-red-300 border-[#7a7a7a] text-black shadow-sm cursor-pointer active:bg-[#f3f3f3]'>Add Product</button>

                </div>

            </div>
        </div>
    )
}

export default AddProduct
