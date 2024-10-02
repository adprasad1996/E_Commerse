import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems';
import BillingCart from './BillingCart';


function Cart() {

  const cart = useSelector((store) => store.cart.items);
  const itemMap = {}

  cart.forEach(item => {
    if (itemMap[item]){
      itemMap[item].quantity += 1;

    }else{
      itemMap[item] = {item, quantity: 1};

    }
  })
  
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