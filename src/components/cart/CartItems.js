import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, decreaseQuantity, increaseQuantity } from '../store/cartSlice';

function CartItems({ obj }) {
    const { title = 'No Title', image, rating, price = 'N/A', id, quantity = 1 } = obj;

    const dispatch = useDispatch();

    return (
        <div className='d-flex flex-column justify-content-center align-items-center p-3 border rounded' 
             style={{ margin: "10px", maxWidth: '570px' }}>
            <h1 style={{ fontSize: '14px', width: "200px", textAlign: "center" }}>{title}</h1>
            
            {image ? (
                <img src={image} alt={title} style={{ height: '100px', width: '50px', objectFit: 'cover' }} />
            ) : (
                <div style={{ height: '150px', width: '100%', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span>No Image</span>
                </div>
            )}

            <p>Rating: {"*".repeat(rating?.rate || 0)} ({rating?.count || 0})</p>
            <p>Price: ${price}</p>
            <p><strong>Quantity:</strong> {quantity}</p> {/* ✅ Display Quantity Properly */}

            <div className='d-flex align-items-center'>  
                <button className='btn btn-danger m-2' onClick={() => dispatch(decreaseQuantity(id))}>-</button>
                <span className="px-3">{quantity}</span>
                <button className='btn btn-success m-2' onClick={() => dispatch(increaseQuantity(id))}>+</button>
            </div>

            <button className='btn btn-primary mt-2' onClick={() => dispatch(removeItem(id))}>Remove Item</button>  
        </div>
    );
}

export default CartItems;
