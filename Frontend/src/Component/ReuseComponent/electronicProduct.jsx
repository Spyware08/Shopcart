// ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartFile/cart_context';
import { NavLink } from 'react-router-dom';

import { electronics } from "../../../public/Assets/Electonics"

function ElectronicDetails() {
    const [userData, setUserData] = useState(null);

    const { Id } = useParams();

    const { addToCart } = useCart()

    const product = electronics.find(e => e.id === parseInt(Id));
    console.log(product.id);

    useEffect(() => {
        const storedUserData = sessionStorage.getItem("userData");
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    return (
        <div className='p-3 overflow-y-scroll max-[450px]:w-screen max-[450px]:pb-[7rem] h-dvh max-[450px]:overflow-x-hidden'>
            <div className='flex justify-center max-[450px]:block '>
                <img className=' max-h-[25rem] max-w-[28rem] max-[450px]:w-screen max-[450px]:px-5' src={product.image} alt="" />
                <div className='mx-3 p-5 max-[450px]:p-1 max-[450px]:mx-1 '>
                    <h1 className='text-3xl max-w-[40rem] font-semibold underline max-[450px]:text-xl'>{product.name}</h1>
                    <p className='capitalize'>Category: <span className='font-semibold'>{product.category}</span></p>
                    <p></p>
                    <p className='text-'>Price: <span className='text-green-800 font-semibold' > ${product.new_price}.00</span></p>
                    <p className='my-6 font-sans max-w-[43rem]'>Elevate your brand with custom unisex shirts. Versatile and professional, they offer high visibility and build brand recognition. Customization options ensure a unique look aligned with your brand values. From corporate events to promotional giveaways, branded shirts serve as effective marketing tools, leaving a lasting impression on your audience.</p>
                    <div className=' my-10 flex gap-10 max-[450px]:my-3'>
                        <button className='border rounded-lg bg-orange-600 px-5 py-2 text-white'>
                            {userData ? <NavLink to='/cart' onClick={() => addToCart(product)}>Add to Cart</NavLink>
                                : <NavLink className="cursor-pointer" to="/login">Please Login for Buy</NavLink>
                            }</button>                    </div>
                </div>
            </div>
        </div>
    );
}

export default ElectronicDetails;
