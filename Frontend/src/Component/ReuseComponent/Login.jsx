import React from 'react'
import { FaShopify } from "react-icons/fa6";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../API/API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginAccount() {
  const navigate = useNavigate()

  const log_useremail = useRef()
  const log_password = useRef()

  async function handleSubmit(e) {
    e.preventDefault();
    if (log_useremail.current && log_password.current) {
      let log_data = {
        email: log_useremail.current.value,
        password: log_password.current.value
      };
      console.log("log data is", log_data);

      try {
        const res = await API.post("/login", log_data);
        localStorage.setItem("userData", JSON.stringify(res.data.userdata));
          return navigate("/");

      } catch (e) {
        console.error("e", e.response.status);
        if (e.response.status === 401) {
          // Handle wrong password scenario
          toast.info("Invalid Password");
        } else if (e.response.status === 404) {
          toast.info("User Not Found");
        } else {
          // Handle other status codes if needed
          toast.error("Please Fill all Details");
        }

      }
    }
  }

  return (
    <div className='border-spacing-1 rounded-xl m-10 max-[450px]:h-screen max-[450px]:m-0'>

      <div className="flex flex-col justify-center py-10 px-12 border max-[450px]:px-5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className='flex items-center text-green-800 text-2xl font-bold justify-center'><FaShopify />ShopCart</h3>
          <p className='text-center text-sm text-gray-800'>Buy Top Brands Cloths and Gadgets Here.</p>
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"  >
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">User email</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" ref={log_useremail} required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" ref={log_password} autoComplete="current-password" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit" onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Slide
      />
    </div>
  )
}
