import React from 'react';

function Filter ({filterValue, filterSearch}) {
    return (
      <p>filter shown with <input value={filterValue} onChange={filterSearch}/></p>
    )
  }
  
  export default Filter