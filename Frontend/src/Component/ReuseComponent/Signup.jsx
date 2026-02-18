import React, { useRef } from 'react';
import API from '../../API/API';
import { FaShopify } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast,Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Signup() {
    const navigate = useNavigate()


    const user_name = useRef();
    const user_lName = useRef();
    const pass_word = useRef();
    const u_email = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        // console.log((user_name.current.value).length>0);

        if (
            user_name.current.value.length > 0 &&
            user_lName.current.value.length > 0 &&
            pass_word.current.value.length > 0 &&
            u_email.current.value.length > 0
        ) {
            const signup_data = {
                firstname: user_name.current.value,
                lastname: user_lName.current.value,
                password: pass_word.current.value,
                email: u_email.current.value
            };
            console.log("Signup data is", signup_data);

            try {
                await API.post("/signup", signup_data).then(e => {
                    console.log("data created");
                    toast.success("Account Created");

                    setTimeout(() => {
                        return navigate("/login")

                    }, 1500);
                })
            } catch (e) {
                //  console.log("err",e.response.status);
                 if(e.response.status===409){
                    return toast.error("Email Already exist")
                 }
                 else return toast.error("Response error")

            }
        } else return toast.info("Please provide valid data")
    }

    return (
        <>
            <form action='/signup' method='post' className='w-[40rem] m-1 border p-5 mx-auto rounded-lg max-[450px]:w-screen' onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900 flex">Signup here with <span className='flex items-center mx-2 text-green-800 font-semibold'><FaShopify />Shop<span className='text-red-700'>Cart</span></span></h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Create your Account Here for Shopping</p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                <div className="mt-2">
                                    <input type="text" ref={user_name} name="first_name" id="first-name" autoComplete="given-name" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                <div className="mt-2">
                                    <input type="text" ref={user_lName} name="last_name" id="last-name" autoComplete="family-name" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input ref={u_email} id="email" name="email" type="email" autoComplete="email" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                </div>
                                <div className="mt-2">
                                    <input ref={pass_word} id="password" name="password" type="password" autoComplete="current-password" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button onClick={()=>{navigate("/")}} className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                </div>
               
            </form>
        </>
    );
}
