import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function BillingCart() {
  const [totalBill, setTotalBill] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const cart = useSelector((store) => store.cart.items);

  useEffect(() => {
    const calculateTotals = () => {
      const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
      setTotalBill(totalAmount);
      setTotalItems(totalQty);
    };
    calculateTotals();
  }, [cart]);

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-xl p-6 mt-5 text-center border border-gray-300 transition-transform transform hover:scale-105">
      <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">Shopping Cart Summary</h3>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-medium text-gray-600">Total Items:</span>
        <span className="text-2xl font-bold text-blue-600">{totalItems}</span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-medium text-gray-600">Total Bill:</span>
        <span className="text-3xl font-bold text-green-500">${totalBill.toFixed(2)}</span>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <button className="w-full btn btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">Proceed to Checkout</button>
    </div>
  );
}

export default BillingCart;
