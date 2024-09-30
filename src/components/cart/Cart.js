import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems';
import BillingCart from './BillingCart';


function Cart() {

  const cart = useSelector((store) => store.cart.items);
  
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      {cart.map((each)=> (
        <div key={each.id}>
          <CartItems obj = {each}/>    
              
        </div>

      ))}
      <BillingCart/>
    </div>
  )
}

export default Cart