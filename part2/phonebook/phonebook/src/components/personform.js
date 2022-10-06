import React from "react";

function PersonForm ({addName, newName, handleNewNameChange, newNumber, handleNewNumberChange}) {
    return (
      <div>
      <form onSubmit={addName}>
      <div>
        name: <input value={newName} 
        onChange={handleNewNameChange}
        />
      </div>
      <div>
      number: <input  
      type="number"
      value={newNumber} 
      onChange={handleNewNumberChange}
      />
    </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
      </div>
    )
  }

  export default PersonForm;