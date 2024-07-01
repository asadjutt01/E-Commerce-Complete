import { useState, useEffect } from 'react'
import React, { createContext } from 'react'


export const shopcontext = createContext(null)

const getdefaultcart = () => {
    let cart = {}
    for (let i = 0; i < 300; i++) {

        cart[i] = 0;
    }
    return cart;
}


const ShopContextprovider = (props) => {
    const [all_product, setall_product] = useState([]);
    const [cartItem, setcartItem] = useState(getdefaultcart)

    useEffect(() => {
        fetch("https://e-commerce-backend-9gkclwdt1-asad-nadeems-projects.vercel.app/allproduct", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => res.json()).then((data) => { setall_product(data) })


        if (localStorage.getItem('auth-token')) {
            fetch("https://e-commerce-backend-9gkclwdt1-asad-nadeems-projects.vercel.app/getcart", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    "Content-Type": "application/json"
                },
                body:''
            }).then((res) => res.json()).then((data) => setcartItem(data) )
        }

    }, [])



    // console.log(cartItem)
    const addtocart = (ItemId) => {
        setcartItem((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch("https://e-commerce-backend-9gkclwdt1-asad-nadeems-projects.vercel.app/addtocart", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "ItemId": ItemId })
            })
                .then((res) => res.json())
                .then((data) => { console.log(data) })
        }


    }
    const removefromcart = (ItemId) => {
        setcartItem((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch("https://e-commerce-backend-9gkclwdt1-asad-nadeems-projects.vercel.app/removefromcart", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "ItemId": ItemId })
            })
                .then((res) => res.json())
                .then((data) => { console.log(data) })
        }
    }

    const gettotalcartamount = () => {
        let toatlamount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let iteminfo = all_product.find((product) => product.id === Number(item))
                toatlamount += iteminfo.new_price * cartItem[item]
                console.log(item)
            }

        }
        return toatlamount;
    }

    const gettotalcartitem = () => {
        let totalitem = 0
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalitem += cartItem[item]
            }
        }
        return totalitem;
    }

    const Contextvalue = { all_product, cartItem, addtocart, removefromcart, gettotalcartamount, gettotalcartitem }

    return (
        <shopcontext.Provider value={Contextvalue}>
            {props.children}
        </shopcontext.Provider>
    )
}
export default ShopContextprovider;