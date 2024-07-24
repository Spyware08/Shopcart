import React from 'react';
import { useCart } from '../CartFile/cart_context';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart() {
  const { cartItems, removeItemFromCart, AddQuantity, DecQuantity } = useCart();
  console.log("cartitem", cartItems);

  function calculateTotal(item) {
    return (item.new_price * item.quantity).toFixed(2);
  }

  function deleteItem(itemId) {
    toast.error("Item Deleted")
    removeItemFromCart(itemId);
  }

  return (
    <div className=''>
      <h2 className='text-xl font-semibold text-center pb-3 pt-2  '>Your Cart</h2> <hr className='w-[20rem] border-[1px] border-green-700 mx-auto' />
      <div className='w-[60rem]  my-4 mx-auto max-[450px]:w-screen'>
        <div className='font-semibold text-gray-700 capitalize mx-5 flex pb-4 max-[450px]:mx-0 max-[450px]:pb-1'>
          <div className='w-[30rem] mr-5 max-[450px]:ml-[1rem] '>Items</div>
          <div className='px-2 w-[5rem]'>Price</div>
          <div className='px-2 w-[5rem]'>Quantity</div>
          <div className='px-2 w-[5rem]'>Total</div>
          <div className='px-2 w-[5rem]'>Remove</div>
        </div>
        <hr />
        <div>
          {cartItems.length === 0 ? (
            <div className='text-center my-10 text-2xl text-gray-700 max-[450px]:text-xl'>Cart Empty, Please Add some Items 🙂... </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className='flex items-center w-50rem my-5'>
                  <div className='mx-0 flex w-[30rem] items-center
                 max-[450px]:block max-[450px]:w-[13rem] max-[450px]:px-5 max-[450px]:leading-3 min-[450px]:mr-[2.5rem]'>
                    <img className='h-[3rem] mx-5
                   max-[450px]:mx-0' src={item.image} alt={item.name} />
                    <div className='block max-[450px]:w-[5rem]'>
                      <span className='text-sm font-semibold leading-3 max-[450px]:text-[0.6rem] '>{item.name}</span> <br />
                      <span className='capitalize text-sm font-semibold text-gray-700 max-[450px]:hidden'>{item.category}</span>
                    </div>
                  </div>
                  <p className='px-2 w-[5rem] font-semibold
                max-[450px]:px-1 max-[450px]:text-[.7rem] max-[450px]:-ml-[1rem]'>${item.new_price}</p>
                  <p className='px-2 w-[5rem]  text-gray-800 font-semibold 
                max-[450px]:text-[.8rem] max-[450px]:px-1'>
                    <span onClick={() => AddQuantity(item.id)} className='font-semibold text-xl hover:font-bold hover:text-green-700 cursor-pointer p-1 m-1
                  max-[450px]:text-base
                  '>+</span>
                    {item.quantity}
                    <span onClick={() => DecQuantity(item.id)} className='font-semibold text-xl hover:font-bold hover:text-red-700 cursor-pointer p-1 m-1
                  max-[450px]:text-base 
                  '>-</span>
                  </p>
                  <p className='px-2 w-[5rem] font-semibold
                max-[450px]:text-[.7rem]
                '>${calculateTotal(item)}</p>
                  <p onClick={() => deleteItem(item.id)} className='px-2 w-[5rem] text-red-700 text-xl cursor-pointer '><MdDelete /></p>
                  <hr />
                </div>
              ))}
            </div>

          )}
        </div>
      </div>
      <ToastContainer className="max-[450px]:w-[15rem] max-[450px]:ml-[170px] max-[450px]:mt-2"
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Slide}
      />
    </div>
  );
}
