import React from 'react';

function Shimmer() {
  // Initialize an empty array to hold the elements
  const shimmerItems = [];

  // Use a for loop to populate the array with elements
  for (let i = 0; i < 10; i++) {
    shimmerItems.push(
      <div
        
        key={i} // Use index as key, but ideally use unique IDs in real scenarios
        style={{ height: '400px', width: '250px', backgroundColor: '#eeeee4', padding: '10px', margin: "10px" }}
      ></div>
    );
  }

  return <div className='d-flex flex-wrap'>{shimmerItems}</div>;
}

export default Shimmer;
