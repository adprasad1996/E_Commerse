
import React, {useEffect, useState} from 'react'
import CardComp from '../cardComp/CardComp';
import Shimmer from '../shimmer/Shimmer';


function RestrentCard() { 
    const [resData, setResData] = useState([]);



    useEffect(()=> {
        fetchData()

    }, []);

    
    const fetchData = async()=> {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();      
      setResData(data)
      
     
      
      
      
        
    }

  return( resData.length === 0? <Shimmer/>: 
    <div className='container d-flex flex-wrap'>
      {resData.map((each) => (
        <div key={each.id} >                
                <CardComp obj = {each}/>             
                
        </div>
      )
      )}
      
     
    </div>
    

    )   
  
}

export default RestrentCard