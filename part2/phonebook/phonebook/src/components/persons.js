import React from "react";


function Persons ({persons, filterValue}) {
    return (
      <>
      {persons.filter (person => person.name.toLowerCase ().includes (filterValue)).map (person => (
        <div key={person.name}>{person.name} {person.number} </div>
      ))}
      </>
    )
  }

  export default Persons