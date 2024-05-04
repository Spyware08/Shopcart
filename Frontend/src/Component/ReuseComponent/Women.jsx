import React from 'react'
import { NavLink } from 'react-router-dom'
import data_product from '../../../public/Assets/data'

export default function Women() {
    return (
        <div>
            <div>
                <h2 className='text-3xl font-semibold text-center border-b border-gray-400 py-2 text-red-700'>Great Offers on Women Wear</h2>
            </div> <br /> <br />

            <img src="/Assets/banner_women.png" alt="" /> <br /> <hr />
            <div className='flex gap-10 p-4 max-[450px]:p-2 max-[450px]:block '>
                {
                    data_product && data_product.map((item) =>
                        <div key={item.id}>
                            <div>
                                <NavLink to={`/productDetails/${item.id}`}><img className='transition-all cursor-pointer hover:scale-105 hover:rounded max-[450px]:mx-auto max-[450px]:h-[20rem] ' src={item.image} alt={item.name} />
                                </NavLink>
                                <h2 className='font-semibold max-[450px]:text-sm'>{item.id}. {item.name}</h2>
                                <p className='max-[450px]:text-sm'> <span className='text-green-800 font-semibold'>Price</span>: ${item.new_price}</p> <br />
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}
