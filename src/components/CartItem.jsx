import React from 'react'
import {toast}  from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';

function CartItem({item}) {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }

  return (
    <div className='mt-16'>
      
      <div className='flex lg:flex-row md:flex-row items-center flex-col'>
         
         <div >
            <div className='lg:h-[180px] md:h-[180px] h-[100px] lg:w-[180px] w-[100px]'>
                <img src={item.image} alt='Product' className='h-full w-full object-contain'/>
            </div>
         </div>
         <div className='flex flex-col ml-10 max-w-[330px]'>
            <h1 className='font-bold text-lg'>{item.title}</h1>
            <h1 className=' text-gray-500 font-normal text-[13px] text-left mt-5'>{item.description.split(" ").slice(0,15).join(" ")+("...")}</h1>
            <div className='flex justify-between mt-5 flex-wrap'>
                <p className='text-green-600 font-semibold text-[15px]'>${item.price}</p>
                <div onClick={removeFromCart} className='w-7 mr-5 h-7 rounded-full bg-red-400 flex items-center justify-center hover:border-2 hover:border-red-800'>
                    <MdDelete />
                </div>
            </div>

         </div>

      </div>

    </div>
  )
}

export default CartItem
