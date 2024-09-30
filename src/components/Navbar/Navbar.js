import React from 'react'
import { Link } from 'react-router-dom'
import Shimmer from '../shimmer/Shimmer'
import { useSelector } from 'react-redux';

function Navbar() {
  const cart = useSelector((store) => store.cart.items);
  return (
    <div className='nav_card d-flex justify-content-between align-items-center'>
            <div className='logo_card'>               
                <img style={{height: '70px', width: '70px', borderRadius: "40px"}} src='https://miro.medium.com/v2/resize:fit:1400/1*Qw11nbTP2pBb08x-H2WDSA.png' alt = 'logo'/>
            </div>
            <ul className='tabs_card d-flex list-unstyled p-2 justify-content-center align-items-center'>
                <li style={{padding: "5px"}}><Link to = '/'>Home</Link></li>
                <li style={{padding: "5px"}}><Link to = '/about'>About us</Link></li>
                <li style={{padding: "5px"}}><Link to = '/contact'>Contact us</Link></li>
                <li style={{padding: "5px"}}><Link to = '/cart'>Cart({cart.length})</Link></li>
            </ul>
            
        </div>
  )
}

export default Navbar