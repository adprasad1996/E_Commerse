import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../store/cartSlice';

function CardComp({ obj = {} }) {
  const [isAdded, setIsAdded] = useState(false)
  const { title = 'No Title', description = 'No Description', image, rating, count = 0, price = 'N/A' } = obj;
  
  const dispatch = useDispatch()
  
  const handleAddToCart = (object)=> {
    dispatch(addItem(object))
    setIsAdded(true)
    console.log()

  }
  
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ padding: '20px', margin: "10px" ,border: '1px solid #ddd', borderRadius: '5px',height: "450px", maxWidth: '270px' }}>
      <h1 style={{ fontSize: '14px', width: "200px" }}>{title}</h1>
      {image ? (
        <img src={image} alt={title} style={{ height: '250px', width: '150px', objectFit: 'cover' }} />
      ) : (
        <div style={{ height: '250px', width: '100%', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span>No Image</span>
        </div>
      )}
      <p>rating: {"*".repeat(rating.rate)+`(${rating.count})`}</p>
      <p>Price: {price}</p>
      <button className={isAdded?'btn btn-secondary':'btn btn-primary' } onClick={()=> handleAddToCart(obj)}>{isAdded? "Added": "Add to cart"}</button>      
    </div>
  );
}

export default CardComp;
