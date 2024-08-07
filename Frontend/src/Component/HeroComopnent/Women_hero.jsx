import React from 'react'
import { NavLink } from 'react-router-dom'
import all_product from '../../../public/Assets/all_product'
import Footer from '../main_Component/Footer'


let womenProduct = all_product.filter(e => e.category === "women")
export default function Women() {
  return (
    <div className='bg-gray-100 h-dvh overflow-y-scroll   pb-14 max-[450px]:w-screen  max-[450px]:overflow-x-hidden max-[450px]:pb-[5rem]'>
      <img className='cursor-pointer' src="/Assets/banner_women.png" alt="" />
      <h3 className='text-center text-3xl font-semibold text-red-600 py-5'>Women Category</h3>
      <hr className='border-gray-500 mx-auto w-[30rem]' />
      <div className='grid grid-cols-4 gap-10 p-5 max-[450px]:block max-[450px]:p-0'>
        {womenProduct && womenProduct.map((item) =>
          <div className='border p-2 rounded-md bg-gray-200 m-4
        ' key={item.id}>
          {/* max-[450px]:block max-[450px]:-ml-1 max-[450px]:w-screen max-[450px]:mb-5   */}
            <NavLink to={`/productDetails/${item.id}`}>  <img className='hover:scale-105 transition cursor-pointer px-1 py-2  max-[450px]:w-[20rem]  max-[450px]:mx-auto' src={item.image} alt={item.name} />
            </NavLink>
            <h1 className='font-semibold my-2'>{item.name}</h1>
            <h1 className=' max-[450px]:text-sm'>Category: <span className='capitalize font-semibold'>{item.category}</span></h1>
            <p className=' max-[450px]:text-sm'>
              New Price: <span className='text-green-900 font-semibold mr-2'>${item.new_price} </span>
              <span className='text-gray-600 font-semibold line-through'>${item.old_price}</span>
            </p>
            <h1 className='max-[450px]:text-sm'>Rating: <span className=''><span className='text-green-800 font-bold'>{item.rating}</span>/5</span></h1>

          </div>
        )}
      </div>
      <div className='my-5 mb-5'>
        <Footer />
      </div>


    </div>


  )
}
