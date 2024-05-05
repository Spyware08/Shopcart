import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Username(props) {
    const [dropDown, setdropDown] = useState(false)
    const navigate=useNavigate()

    const toggleDropdown = () => {
        setdropDown(!dropDown)
    }
    const clearCookie = () => {
        sessionStorage.clear()
        location.reload();
        navigate("/")
    }

    return (
        <div>
            <button onClick={toggleDropdown}>Hi, <span className='capitalize font-semibold'>{props.firstname}</span></button>


            {
                dropDown && (
                    <div className='absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10'>
                        <div className='py-1'>
                            <p onClick={clearCookie} className='block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100'>Logout</p>
                        </div>
                    </div>
                )

            }





        </div>
    )
}
