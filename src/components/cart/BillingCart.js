import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function BillingCart() {
  const [totalBill, setTotalBill] = useState(0);
  const cart = useSelector((store) => store.cart.items);

  useEffect(() => {
    const calculateTotalBill = () => {
      const total = cart.reduce((accumulator, item) => accumulator + item.price, 0);
      setTotalBill(total);
    };

    calculateTotalBill();
  }, [cart]);

  return (
    <div>
      <p>{"*".repeat(40)}</p>
      <p>Total Items: {cart.length}</p>
      <p>{"*".repeat(40)}</p>
      <h1>Total Bill: {totalBill}</h1>
      <p>{"*".repeat(40)}</p>
    </div>
  );
}

export default BillingCart;
