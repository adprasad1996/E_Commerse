import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseQuantity, decreaseQuantity } from '../store/cartSlice';

function CardComp({ obj = {} }) {
  const dispatch = useDispatch();
  const { id, title = 'No Title', image, rating, price = 'N/A' } = obj;

  const cartItemsList = useSelector((store) => store.cart.items);
  const existingItem = cartItemsList.find((item) => item.id === id);
  const quantity = existingItem?.quantity || 0;

  const handleAddToCart = () => {
    dispatch(addItem({ ...obj, quantity: 1 }));
  };

  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center'
      style={{
        padding: '20px',
        margin: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        height: '450px',
        maxWidth: '270px',
      }}
    >
      <h1 style={{ fontSize: '14px', width: '200px' }}>{title}</h1>

      {image ? (
        <img
          src={image}
          alt={title}
          style={{ height: '250px', width: '150px', objectFit: 'cover' }}
        />
      ) : (
        <div
          style={{
            height: '250px',
            width: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span>No Image</span>
        </div>
      )}

      <p>
        Rating: {'⭐'.repeat(Math.floor(rating?.rate || 0))} ({rating?.count || 0})
      </p>
      <p>Price: ${price}</p>

      {quantity > 0 ? (
        <div className='d-flex align-items-center'>
          <button className='btn btn-danger m-2' onClick={() => dispatch(decreaseQuantity(id))}>
            -
          </button>
          <span>{quantity}</span>
          <button className='btn btn-success m-2' onClick={() => dispatch(increaseQuantity(id))}>
            +
          </button>
        </div>
      ) : (
        <button className='btn btn-primary' onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default CardComp;
