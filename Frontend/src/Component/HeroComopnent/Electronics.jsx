import React from 'react'
import { NavLink } from 'react-router-dom'
import { electronics } from "../../../public/Assets/Electonics"
import Footer from '../main_Component/Footer'




export default function Electronics() {

  return (
    <div>
      <div className='bg-gray-100 h-dvh overflow-y-scroll   pb-14   max-[450px]:w-screen  max-[450px]:overflow-x-hidden max-[450px]:pb-[5rem]'>
        <h3 className='text-center text-3xl font-semibold text-red-600 py-5'>Electonics Category</h3>
        <hr className='border-gray-500 mx-auto w-[30rem]' />
        <div className='grid grid-cols-4 gap-10  p-5 max-[450px]:block max-[450px]:p-0'>
          {electronics && electronics.map((item) =>
            <div className='border p-2 rounded-md flex flex-col justify-center bg-gray-200 m-4
           ' key={item.id}>
            {/*  max-[450px]:block max-[450px]:-ml-1 max-[450px]:w-screen max-[450px]:mb-5 */}
              <NavLink to={`/electronicDetails/${item.id}`}>  <img className='hover:scale-105 transition cursor-pointer px-1 py-2 max-[450px]:w-[20rem] max-[450px]:mx-auto' src={item.image} alt={item.name} />
              </NavLink>
              <h1 className='font-semibold'>{item.name}</h1> <hr className='border-gray-300' />
              <h1 className='font-serif max-[450px]:text-sm'>Category: <span className='capitalize font-semibold font-sans'>{item.category}</span></h1>
              <p className='font-serif max-[450px]:text-sm'>
                Offer price: <span className='text-green-900 font-semibold mr-2 font-sans'>${item.new_price} </span>
              </p>
              <p className='font-serif'>Rating:  <span className='font-sans'>{item.rating.rate} </span>/ 5</p>

            </div>
          )}
        </div>



      <div className='my-5 mb-5'>
        <Footer />
      </div>
      </div>
    </div>
  )
}
