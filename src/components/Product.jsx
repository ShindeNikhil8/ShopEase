import React from 'react'
import { useDispatch } from 'react-redux';
import {toast} from "react-hot-toast";
import { useSelector } from 'react-redux';
import {add, remove} from '../redux/Slices/CartSlice';


function Product({post}) {

  const {cart} = useSelector( (state) => state );
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  }

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl  [box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_15px] hover:[box-shadow:rgba(0,_0,_0,_0.25)_0px_54px_55px,_rgba(0,_0,_0,_0.12)_0px_-12px_30px,_rgba(0,_0,_0,_0.12)_0px_4px_6px,_rgba(0,_0,_0,_0.17)_0px_12px_13px,_rgba(0,_0,_0,_0.09)_0px_-3px_5px]' >
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className='lg:h-[180px] md:h-[180px] h-[100px]'>
        <img src={post.image} alt='Product' className='h-full w-full'/>
      </div>
      <div className='flex justify-between flex-wrap gap-12 items-cente w-full mt-5'>
        <div>
          <p className='text-green-600 font-semibold'>${post.price}</p>
        </div>
        {
          cart.some( (p) => p.id === post.id ) ? 
          (<button onClick={removeFromCart} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  transition duration-300 ease-in active:[box-shadow:0_5px_20px_rgba(255,_0,_0,_0.7)] active:text-red-400 active:transition active:duration-300 '>Remove Item</button>) :
          (<button onClick={addToCart} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  transition duration-300 ease-in active:[box-shadow:0_5px_20px_rgba(0,_255,_0,_0.7)] active:text-green-400 active:transition active:duration-300 '>Add to Cart</button>)
        }
      </div>
      
    </div>
  )
}

export default Product
