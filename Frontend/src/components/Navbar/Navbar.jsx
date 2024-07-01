import { React, useContext, useState } from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { shopcontext } from '../../context/shopcontext'
import hamburger from '../assets/menu.png';
import cross from '../assets/cross.svg';
const Navbar = () => {
    const [menu,

        setmenu] = useState("shop")
    const [Toggle, setToggle] = useState(false);
    const { gettotalcartitem } = useContext(shopcontext)


    return (
        <nav className='bg-red-300 z-50 shadow-xl sticky top-0 '>
            <div className='flex justify-around'>
                <div className='hidden mx-2 max-md:flex justify-center items-center'>
                    <div>
                        <img src={Toggle ? cross : hamburger} alt="" className='invert w-[30px] h-[30px] object-contain cursor-pointer' onClick={() => {
                            setToggle(!Toggle);
                            window.scrollTo(0, 0);
                        }} />
                        <div className={`${!Toggle ? "hidden" : "flex"} p-6 flex-col bg-[#ffc2c2] absolute top-20 right-0 gap-4 my-2 min-w-[140px] z-10 rounded-xl w-[100vw] h-[90vh]`}>
                            <ul className='list-none flex justify-end items-start flex-col gap-4'>
                                <li className='flex flex-col items-center gap-1 justify-center cursor-pointer' onClick={() => {

                                    setmenu("shop")
                                    setToggle(!Toggle);
                                    window.scrollTo(0, 0);
                                }}> <Link to='/'
                                //  onClick={() => {
                                //     setToggle(!Toggle);
                                //     window.scrollTo(0, 0);
                                // }}
                                 style={{ fontWeight: menu === "shop" ? "bold" : "normal" }} >Shop </Link> </li>
                                <li className='flex flex-col items-center gap-1 justify-center cursor-pointer' onClick={() => {
                                 setmenu("men")
                                 setToggle(!Toggle);
                                 window.scrollTo(0, 0);
                                }}> <Link to='/men' style={{ fontWeight: menu === "men" ? "bold" : "normal" }}>Men </Link> </li>
                                <li className='flex flex-col items-center gap-1 justify-center cursor-pointer' onClick={() => {
                                setmenu("women")
                                setToggle(!Toggle);
                                window.scrollTo(0, 0);
                                }}> <Link to='/women' style={{ fontWeight: menu === "women" ? "bold" : "normal" }}>Women </Link> </li>
                                <li className='flex flex-col items-center gap-1 justify-center cursor-pointer' onClick={() => {
                                setmenu("kids")
                                setToggle(!Toggle);
                                window.scrollTo(0, 0);
                                }}><Link to='/kid' style={{ fontWeight: menu === "kids" ? "bold" : "normal" }}>Kids</Link> </li>
                            </ul>
                            {/* <div className='flex flex-col justify-center gap-4'>
                                <Link to="/contact" className="text-white hover:text-black" onClick={() => {
                                    setToggle(!Toggle);
                                    window.scrollTo(0, 0);
                                }}>
                                    Contact
                                </Link>
                                <a href="" className='text-[#ffffff] hover:text-black'>
                                    <span>030123456789</span>
                                </a>
                                <a href="" className='text-[#fff7f7] hover:text-black'>
                                    <span>030123456789</span>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div onClick={() => {

                    setmenu("shop")
                }} className='nav-logo  flex items-center px-5 max-lg:px-2 py-2'>
                    <Link to="/" className='flex items-center px-5 max-lg:px-2 py-2'>
                        <img className='max-lg:w-10' src={logo} alt="logo" />
                        <span className='font-bold max-lg:text-xl lg:text-3xl '>SHOPPER</span>
                    </Link>

                </div>
                <ul className='nav-menu flex max-md:hidden items-center text-xl text-[#626262] gap-[20px]'>
                    <li className='flex flex-col items-center gap-1 justify-center cursor-pointer' onClick={() => {

                        setmenu("shop")
                    }}> <Link to='/' style={{ fontWeight: menu === "shop" ? "bold" : "normal" }} >Shop </Link> {menu === "shop" ? <hr className='h-[3px] w-[80%] border-none bg-[#FF4141]' /> : <></>}</li>
                    <li className='flex flex-col items-center gap-1 justify-center cursor-pointer' onClick={() => {

                        setmenu("men")
                    }}> <Link to='/men' style={{ fontWeight: menu === "men" ? "bold" : "normal" }}>Men </Link> {menu === "men" ? <hr className='h-[3px] w-[80%] border-none bg-[#FF4141]' /> : <></>}</li>
                    <li className='flex flex-col items-center gap-1 justify-center cursor-pointer' onClick={() => {

                        setmenu("women")
                    }}> <Link to='/women' style={{ fontWeight: menu === "women" ? "bold" : "normal" }}>Women </Link> {menu === "women" ? <hr className='h-[3px] w-[80%] border-none bg-[#FF4141]' /> : <></>}</li>
                    <li className='flex flex-col items-center gap-1 justify-center cursor-pointer' onClick={() => {

                        setmenu("kids")
                    }}><Link to='/kid' style={{ fontWeight: menu === "kids" ? "bold" : "normal" }}>Kids</Link> {menu === "kids" ? <hr className='h-[3px] w-[80%] border-none bg-[#FF4141]' /> : <></>}</li>
                </ul>



                <div className="nav-login-cart flex justify-center items-center max-sm:gap-6 gap-10  m-3">
                    <Link to='/cart' className='relative'>
                        <img src={cart_icon} className='cursor-pointer w-8' alt="logo" />
                        <div className=" absolute -top-3 -right-3 nav-cart-count w-[22px] h-[22px] flex justify-center items-center  bg-red-700 rounded-[11px] text-14px text-white">{gettotalcartitem()}</div>
                    </Link>
                    {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} className='border outline-none text-xl max-lg:text-base font-medium rounded-[75px] w-[110px] h-[50px] max-md:w-[80px] max-md:h-[40px] bg-white border-[#7a7a7a] text-[#515151] shadow-sm cursor-pointer active:bg-[#f3f3f3]'>Logout</button>:<Link to='login'><button className='border outline-none text-xl max-lg:text-base font-medium rounded-[75px] w-[110px] h-[50px] max-md:w-[80px] max-md:h-[40px] bg-white border-[#7a7a7a] text-[#515151] shadow-sm cursor-pointer active:bg-[#f3f3f3]'>Login</button></Link>}
                    
                    




                </div>

            </div>
        </nav >
    )
}

export default Navbar
