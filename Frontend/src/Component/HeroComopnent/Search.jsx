import all_product from '../../../public/Assets/all_product'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Search() {
    const [filterdata, setfilterdata] = useState([])
    const [rangedata, setrangedata] = useState(2)
    const [inputValue, setInputValue] = useState("")

    function handleinput(e) {
        let inputsearch = e.target.value.toLowerCase()
        setInputValue(inputsearch)
        if (inputsearch) {
            const filter = all_product.filter(e =>
                e.category.toLocaleLowerCase() === inputsearch ||
                e.name.toLocaleLowerCase().includes(inputsearch)
            )
            setfilterdata(filter)
            setrangedata(2)
        } else {
            setfilterdata([])
        }
    }

    function handlerange(e) {
        const selectedRating = parseInt(e.target.value)
        setrangedata(selectedRating)
    }

    const filteredRangeData = filterdata.filter(item => item.rating >= rangedata)

    return (
        <div className='bg-gray-100 h-dvh overflow-y-scroll pb-14 max-[450px]:w-screen max-[450px]:overflow-x-hidden max-[450px]:pb-[5rem]'>
            <div className='flex justify-center pt-5'>
                <input type="text"
                    placeholder='Search Your fashion'
                    className='border p-1 px-3 rounded-full outline-none w-[20rem]'
                    value={inputValue}
                    onInput={handleinput} />
            </div>
            {filterdata.length > 0 && (
                <div className=' text-center pt-2'>
                    <div className=' mt-1'>Rating Filter: {rangedata}</div>
                    <input type="range"
                        value={rangedata}
                        onInput={handlerange}
                        min={2} max={5}
                        step={1} 
                        className='w-[15rem]' />
                </div>
            )}
            <div className='grid grid-cols-4 p-5 max-[450px]:block max-[450px]:p-1'>
                {inputValue.length > 0 ? (
                    filteredRangeData.length > 0 ? (
                        filteredRangeData.map(item => (
                            <div className='border p-2 rounded-md m-4 bg-gray-200' key={item.id}>
                                <NavLink to={`/productDetails/${item.id}`}>
                                    <img className='hover:scale-105 transition cursor-pointer px-1 py-2 max-[450px]:w-[20rem] max-[450px]:mx-auto' src={item.image} alt={item.name} />
                                </NavLink>
                                <h1 className='font-semibold my-2'>{item.name}</h1>
                                <h1 className='max-[450px]:text-sm'>Category: <span className='capitalize font-semibold'>{item.category}</span></h1>
                                <h1 className='max-[450px]:text-sm'>Rating: <span className=''><span className='text-green-800 font-bold'>{item.rating}</span>/5</span></h1>
                                <p className='max-[450px]:text-sm'>
                                    New Price: <span className='text-green-900 font-semibold mr-2'>${item.new_price}</span>
                                    <span className='text-gray-600 font-semibold line-through'>${item.old_price}</span>
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No result found, try something different.</p>
                    )
                ) : (
                    all_product.map(item => (
                        <div className='border p-2 rounded-md m-4 bg-gray-200' key={item.id}>
                            <NavLink to={`/productDetails/${item.id}`}>
                                <img className='hover:scale-105 transition cursor-pointer px-1 py-2 max-[450px]:w-[20rem] max-[450px]:mx-auto' src={item.image} alt={item.name} />
                            </NavLink>
                            <h1 className='font-semibold my-2'>{item.name}</h1>
                            <h1 className='max-[450px]:text-sm'>Category: <span className='capitalize font-semibold'>{item.category}</span></h1>
                            <h1 className='max-[450px]:text-sm'>Rating: <span className=''>{item.rating}/5</span></h1>
                            <p className='max-[450px]:text-sm'>
                                New Price: <span className='text-green-900 font-semibold mr-2'>${item.new_price}</span>
                                <span className='text-gray-600 font-semibold line-through'>${item.old_price}</span>
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
