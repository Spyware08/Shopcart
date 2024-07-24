import React, { useState, useEffect } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { FaShopify } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useCart } from '../CartFile/cart_context';
import Accountdropdown from '../ReuseComponent/Accountdropdown';
import Username from '../ReuseComponent/Username';
import { TbShoppingCartCancel } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { ToastContainer, toast, Slide } from 'react-toastify';


const activeClass = "text-green-900";

export default function Navbar() {
    const { cartItems } = useCart();
    const [userData, setUserData] = useState(null);

    // function demoUser() {
    //     let userData =  
    //     {
    //       firstname: "DEMOUser",
    //       lastname: "aman",
    //       token: "abc"

    //     }
    //     localStorage.setItem("userData", JSON.stringify(userData));
    //     console.log(userData);
    //   }
    //   demoUser()
    useEffect(() => {
        const storedUserData = sessionStorage.getItem("userData");
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    function Showtoast() {
        console.log("hi");
        toast.info("Please Login for Cart")
    }

    return (
        <div className=''>
            <div className='flex justify-between items-center p-6 bg-sky-500 max-[450px]:p-2'>
                <div className='flex items-center font-semibold text-2xl'>
                    <span className='text-green-800 text-3xl mr-1'><FaShopify /></span>Shop<span className='text-pink-700'>Cart</span>
                </div>
                <div className='  max-[450px]:hidden'>
                    <ul className='flex'>
                        <li className='mx-2 font-semibold hover:text-red-700 hover:underline duration-100 cursor-pointer'>
                            <NavLink to="/" activeclassname={activeClass}>Home</NavLink>
                        </li>
                        <li className='mx-2 font-semibold hover:text-red-700 hover:underline duration-100 cursor-pointer'>
                            <NavLink to="/men" activeclassname={activeClass}>Men</NavLink>
                        </li>
                        <li className='mx-2 font-semibold hover:text-red-700 hover:underline duration-100 cursor-pointer'>
                            <NavLink to="/women" activeclassname={activeClass}>Women</NavLink>
                        </li>
                        <li className='mx-2 font-semibold hover:text-red-700 hover:underline duration-100 cursor-pointer'>
                            <NavLink to="/kids" activeclassname={activeClass}>Kids</NavLink>
                        </li>
                        <li className='mx-2 font-semibold hover:text-red-700 hover:underline duration-100 cursor-pointer'>
                            <NavLink to="/electronic" activeclassname={activeClass}>Electronic</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex relative items-center mx-5' >
                    <NavLink to="/search" activeclassname={activeClass}><p className='text-lg cursor-pointer px-2'><IoSearchOutline /></p></NavLink>


                    <div className='mx-2 cursor-pointer' >
                        {userData ? <Username firstname={userData.firstname} /> : <Accountdropdown />}
                    </div>

                    <div className='text-2xl'>
                        {userData ? <NavLink to="/cart" className="flex items-center">
                            <CiShoppingCart />
                            <span className='text-white bg-orange-600 text-xs px-[5px] rounded-full -ml-[10px] -mt-[15px]'>{cartItems.length}</span>
                        </NavLink> :
                            <div className='text-gray-500 cursor-pointer ml-1'><TbShoppingCartCancel onClick={Showtoast} /></div>}
                    </div>
                </div>
            </div>

            <div className='min-[450px]:hidden max-[450px]:visible fixed bottom-0 w-screen'>
                <ul className='flex justify-center bg-sky-500 py-3'>
                    <li className='mx-3 font-semibold hover:text-red-700 hover:underline duration-100 cursor-pointer'>
                        <NavLink to="/" activeclassname={activeClass}>Home</NavLink>
                    </li>
                    <li className='mx-3 font-semibold hover:text-red-700 hover:underline duration-100 cursor-pointer'>
                        <NavLink to="/men" activeclassname={activeClass}>Men</NavLink>
                    </li>
                    <li className='mx-3 font-semibold hover:text-red-700 hover:underline duration-100 cursor-pointer'>
                        <NavLink to="/women" activeclassname={activeClass}>Women</NavLink>
                    </li>
                    <li className='mx-3 font-semibold hover:text-red-700 hover:underline duration-100 cursor-pointer'>
                        <NavLink to="/kids" activeclassname={activeClass}>Kids</NavLink>
                    </li>
                    <li className='mx-3 font-semibold hover:text-red-700 hover:underline duration-100 cursor-pointer'>
                        <NavLink to="/electronic" activeclassname={activeClass}>Electronic</NavLink>
                    </li>
                </ul>
            </div>
            <ToastContainer
                className="max-[450px]:w-[18rem]"
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                theme="colored"
                transition={Slide}
            />
        </div>
    );
}
