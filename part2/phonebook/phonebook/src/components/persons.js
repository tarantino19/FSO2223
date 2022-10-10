import React from "react";



function Persons ({persons, filterValue, deletePerson}) {
    return (
      <>
      {persons.filter (person => person.name.toLowerCase ().includes (filterValue)).map (person => (
        <div key={person.id}>{person.name} {person.number} <button onClick={deletePerson}>delete</button></div>
      ))} 
      </>
    )
  }

  export default Persons