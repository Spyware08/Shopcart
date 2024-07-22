import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function Accountdropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Define dropdownRef using useRef hook

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <button onClick={toggleDropdown} className='font-medium'>Login</button>
            {
                isDropdownOpen && (
                    <div ref={dropdownRef} className='absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                        <div className='py-1'>
                            <NavLink to='/login' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>Login</NavLink>
                            <NavLink to='/signup' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>Signup</NavLink>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
