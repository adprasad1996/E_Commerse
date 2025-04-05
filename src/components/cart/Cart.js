import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import BillingCart from './BillingCart';

function Cart() {
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ marginLeft: '200px' }}>

      {cart.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        cart.map((each) => (
          <CartItems key={each.id} obj={each} />
        ))
        
      )}
      
      {cart.length > 0 && <BillingCart />}
      
    </div>
  );
}

export default Cart;
