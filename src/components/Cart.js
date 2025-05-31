import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ListItem from './ListItem';
import { clearCart } from '../utils/cartSlice';


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const handleClearCart = () =>{
      dispatch(clearCart())
  }
  return (
    <div className =" text-center m-5 p-5">
      <h1 className='text-2xl font-bold text-black'>Cart</h1>
      <div className='w-6/12 p-5 mx-auto'>
      <button className='bg-black text-white px-5 py-1 my-1 rounded-lg' onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length === 0 && <h1 className='text-2xl font-bold text-black'>Your Cart is Empty</h1>}
        <ListItem itemList={cartItems}/>
      </div>
    </div>
  )
}

export default Cart