import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Cart() {

    const {cart} = useSelector( (state) => state );
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount( cart.reduce( (acc,curr) => acc + curr.price,0 ) );
    }, [cart] )

  return (
    <div className='max-w-[1000px] mx-auto'>
    {
        cart.length > 0 ?
        (<div className='flex lg:flex-row  mt-10 justify-between flex-col '>

            <div className='flex flex-col max-w-[700px]'>
                {
                    cart.map( (item, index) => (
                            <div key={item.id}>
                                <CartItem item={item} itemIndex={index} />

                                {/* Show separator if more than 1 item and NOT the last item */}
                                {cart.length > 1  && (
                                <div className="w-full h-[1px] bg-black my-2 mt-7"></div>
                                )}
                            </div> 
                        ))
                }
            </div>
            <div className='fixed right-64 top-28'>
            <div className='mt-10 relative max-h-fit'>
                <div className='flex flex-col'>
                    <div className='text-green-700 font-semibold text-2xl uppercase'>Your Cart</div>
                    <div className='text-green-900 font-bold text-5xl uppercase leading-4 mt-5'>Summary</div>
                    <p className='text-green-800 font-semibold text-lg mt-5'>
                        <span>Total Items: {cart.length}</span>
                    </p>   
                </div>
                <div className='absolute top-[450px] w-full '>
                    <p className='text-green-700 text-lg'>Total Amount: <span className='text-green-900 font-bold'>${totalAmount.toFixed(2)}</span></p>
                    <button className='w-full h-12 bg-green-600 text-white font-bold text-lg rounded-md'>
                        CheckOut Now
                    </button>
                </div>
            </div>
            </div>

        </div>) :
        (<div className='flex flex-col justify-center items-center h-screen '>
            <h1 className='text-green-500 font-bold text-lg'>Cart Empty</h1>
            <Link to={"/"}>
                <button className='bg-yellow-500 w-40 h-9 rounded-md [box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_15px] mt-5 text-lg font-semibold hover:bg-orange-500 hover:[box-shadow:rgba(0,_0,_0,_0.35)_5px_10px_25px]  active:text-white active: transition active: duration-300'>
                    Shop Now
                </button>
            </Link>
        </div>)
    }
    </div>
  )
}

export default Cart
