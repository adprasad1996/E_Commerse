import React from 'react'
import { useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';

function CartItems({obj}) {
    const { title = 'No Title', description = 'No Description', image, rating, count = 0, price = 'N/A' } = obj;
    console.log(obj)
    
    const dispatch = useDispatch()
    const handleRemove = (object)=> {
        dispatch(removeItem(object))       

    }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ padding: '20px', margin: "10px" ,border: '1px solid #ddd', borderRadius: '5px',height: "250px", maxWidth: '570px' }}>
      <h1 style={{ fontSize: '14px', width: "200px", textAlign: "center" }}>{title}</h1>
      {image ? (
        <img src={image} alt={title} style={{ height: '100px', width: '50px', objectFit: 'cover' }} />
      ) : (
        <div style={{ height: '150px', width: '100%', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span>No Image</span>
        </div>
      )}
      <p>rating: {"*".repeat(rating.rate)+`(${rating.count})`}</p>
      <p>Price: {price}</p>
      <button className='btn btn-primary' onClick={()=> handleRemove(obj)}>Remove Item</button>  
      <div>    
       
        <div>+</div>
      </div>
    </div>
  )
}

export default CartItems