import React from 'react'
import { FaShopify } from "react-icons/fa";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


export default function Footer() {
    return (
        <div className='mb-10 p-5'>
            <div className='flex justify-center items-center font-bold text-3xl'>
                <span className='text-green-800 text-4xl mr-1'><FaShopify /></span>ShopCart
            </div>

            <div className='flex justify-center  my-10 text-3xl'>
                <span className='mx-3 cursor-pointer transition ease-linear hover:text-green-800 hover:scale-125'><FaWhatsapp /></span>
                <span className='mx-3 cursor-pointer transition ease-linear hover:text-purple-800 hover:scale-125'><FaInstagram /></span>
                <span className='mx-3 cursor-pointer transition ease-linear hover:text-blue-500 hover:scale-125'><CiTwitter /></span>

            </div>
            <hr className='border-slate-400' />

            <div className='text-center p-2 text-sm font-semibold'>
                <p>Copyright @2024 - All right Reserved</p>
            </div>


        </div>
    )
}
