import React from 'react'
import { IoMdCart } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from '../pages/Cart';

function Navbar() {

  const { cart } = useSelector((state) => state);
    
  return (
    <div>
      <nav className=' bg-[#0f172a] flex flex-row justify-between items-center h-20 max-w-6xl mx-auto'>

        <NavLink to="/">
            <div className='ml-5'>
                <img src='https://clipart-library.com/images_k/transparent-png-online/transparent-png-online-2.png' alt='Shop here' className='h-[70px] w-[100px]' />
            </div>
        </NavLink>
        <div className='flex items-center font-medium text-[#f1f5f9] mr-5 space-x-6'>
            <NavLink to="/">
                <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
                <div className='relative'>
                    <IoMdCart className='text-2xl' />
                    {
                        cart.length > 0 &&
                        <span className='absolute -top-1 -right-2 bg-green-600 text-x5 w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
                    }
                </div>
            </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
