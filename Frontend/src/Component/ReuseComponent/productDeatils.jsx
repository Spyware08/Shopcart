import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useCart } from '../CartFile/cart_context';
import all_product from '../../../public/Assets/all_product';


function ProductDetails() {
  const { Id } = useParams();
  const [userData, setUserData] = useState(null);

  const { addToCart } = useCart()

  const product = all_product.find(e => e.id === parseInt(Id));
  console.log(product.id);

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div className='p-3 max-[450px]:pb-[5rem] h-dvh overflow-y-scroll '>
      <div className='flex pb-6 max-[450px]:block  '>
        <img className='max-[450px]:h-[20rem] mx-auto' src={product.image} alt="" />
        <div className='mx-3 p-5 max-[450px]:mx-1 max-[450px]:p-1'>
          <h1 className='text-3xl max-w-[40rem] font-semibold underline max-[450px]:text-xl'>{product.name}</h1>
          <p className='capitalize max-[450px]:text-sm'>Category: <span className='font-semibold '>{product.category}</span></p>
          <p></p>
          <p className='max-[450px]:text-sm'>New Price: <span className='text-green-800 font-semibold' > ${product.new_price}</span></p>
          <p className='max-[450px]:text-sm'>Old Price: <span className='line-through text-gray-600 font-semibold' >${product.old_price}</span></p>
          <p className='my-4 font-sans max-w-[43rem] max-[450px]:text-sm max-[450px]:mt-1'>Elevate your brand with custom unisex shirts. Versatile and professional, they offer high visibility and build brand recognition. Customization options ensure a unique look aligned with your brand values. From corporate events to promotional giveaways,leaving a lasting impression on your audience.</p>
          <div className='flex max-[450px]:-mt-3 '>
            <li className='list-none flex items-center justify-center  h-[2rem] w-[2rem] m-1 p-2 border rounded-md'>S</li>
            <li className='list-none flex items-center justify-center  h-[2rem] w-[2rem] m-1 p-2 border rounded-md'>M</li>
            <li className='list-none flex items-center justify-center  h-[2rem] w-[2rem] m-1 p-2 border rounded-md'>L</li>
            <li className='list-none flex items-center justify-center  h-[2rem] w-[2rem] m-1 p-2 border rounded-md' >XL</li>
            <li className='list-none flex items-center justify-center  h-[2rem] w-[2rem] m-1 p-2 border rounded-md'>XXL</li>
          </div>
          <div className=' my-3 flex gap-5 max-[450px]:my-1'>
            <button className='border rounded-lg bg-orange-600 px-5 py-2  text-white'>

              {userData ? <NavLink to='/cart' onClick={() => addToCart(product)}>Add to Cart</NavLink>
                : <p className='cursor-not-allowed'>Please Login for Buy</p>}
            </button>
            {/* <button className='border rounded-lg  px-5 py-2 bg-green-600 text-white'>Buy Now</button> */}
          </div>
          <label className='font-serif'>Enter your Pincode: <input type="number" placeholder='Pincode' className='border px-2 py-1' /></label>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
