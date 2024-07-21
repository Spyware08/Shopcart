import React from 'react';
import Women from '../ReuseComponent/Women';
import New_Collection from '../ReuseComponent/New_Collection';
import Footer from '../main_Component/Footer';
import Main_Slider from './Slider/Main_Slider';
import { NavLink } from 'react-router-dom';
export default function Homepage() {
  return (
    <div className='bg-gray-100 h-dvh overflow-y-scroll max-[450px]:p-0 max-[450px]:overflow-x-hidden'>
      <Main_Slider />
      <div className='flex  justify-between m-2 px-5 py-3 border rounded max-[450px]:block max-[450px]:w-screen max-[450px]:px-1'>
            <div className='my-5 max-[450px]:my-0'>
                <h2 className='text-red-700 text-xl font-semibold max-[450px]:text-lg'>Welcome Here</h2>
                <h4 className='my-2 font-bold text-2xl max-[450px]:text-base max-[450px]:my-1'>NEW ARRIVALS ONLY</h4>
                <h4 className='text-5xl font-bold underline w-8 leading-snug my-6 max-[450px]:text-[1.4rem] max-[450px]:w-[250px] max-[450px]:mb-[4.5rem] max-[450px]:my-2'>
                    New collections for Everyone.
                </h4>
                <NavLink className='bg-green-700 text-white p-1.5 rounded-xl'>See Collections</NavLink>
            </div>
            <div className='max-[450px]:-mt-[13rem] max-[450px]:ml-[12rem] flex justify-center items-center'>
                <img src='/Assets/family.png' className='object-cover h-full w-full max-[450px]:ml-[1rem] max-[450px]:h-[12.5rem] max-[450px]:mb-[1rem]' alt='' />
            </div>
        </div>
      <div className='p-10 max-[450px]:p-2'>
        <Women />
        <New_Collection />
      </div>
      <hr />
      <div className='my-8 pb-10 bg-gradient-to-b from-cyan-300 to-blue-100 border rounded-xl text-center'>
        <h2 className='text-3xl my-8 font-semibold'>Get Exclusive Offers On Your Email</h2>
        <p className='my-4 text-xl font-medium text-gray-700'>Subscribe to get Offers Updates</p>
        <div className='flex justify-center items-center max-[450px]:flex-col'>
          <input type='email' placeholder='Your Email id' className='px-5 py-3 rounded-full outline-none w-[30rem] max-[450px]:w-[20rem] mb-4 max-[450px]:mb-2' />
          <button className='font-semibold hover:bg-green-600 hover:text-white px-4 py-2 rounded-xl transition border max-[450px]:w-[10rem]'>Subscribe</button>
        </div>
      </div>
      <div className='my-5'>
        <Footer />
      </div>

    </div>
  );
}
