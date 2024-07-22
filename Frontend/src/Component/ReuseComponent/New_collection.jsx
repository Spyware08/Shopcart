import React from 'react'
import new_collections from '../../../public/Assets/new_collections'
import { NavLink } from 'react-router-dom'

export default function New_collection() {
    return (
        <div className='py-10'>
            <div>
                <h2 className='text-3xl font-semibold text-center border-b border-gray-400 py-2 text-red-700 font-mono'>Our New Collection</h2>
            </div> <br /> <br />
            <div className='grid grid-cols-4 gap-10 p-4
             max-[450px]:block max-[450px]:p-0 '>
                {new_collections && new_collections.map((item) =>
                    <div key={item.id}>
                        <div className='bg-gray-200 p-3 m-2 max-[450px]:m-4 rounded-md' >
                            <NavLink to={`/productDetails/${item.id}`}><img className='transition-all cursor-pointer hover:scale-105 hover:rounded max-[450px]:mx-auto max-[450px]:h-[20rem] ' src={item.image} alt={item.name} />
                            </NavLink>
                            <h2 className='font-semibold max-[450px]:text-sm max-[450px]:ml-[3rem]'> {item.name}</h2>
                            <p className='max-[450px]:text-sm max-[450px]:ml-[4rem]'> <span className='text-green-800 font-bold'>Price</span>: ${item.new_price}
                                <span className='text-gray-600 font-semibold text-sm mx-4 line-through'>${item.old_price}</span></p> <br />
                        </div>

                    </div>
                )
                }
            </div>
        </div>
    )
}
