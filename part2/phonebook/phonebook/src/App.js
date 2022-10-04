import './App.css';

import { useState } from 'react'
import Headings from './components/headings';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState ("")
  const [filterValue, setFilterValue] = useState ("")

  function addName (event) {
    event.preventDefault ()
    if (persons.find (person => person.name === newName)) {
      alert (`${newName} is already added to phonebook`) 
    } else {
      const newestName = { name: newName, number: newNumber}
      setPersons (persons.concat (newestName))
      setNewName ("")
      setNewNumber ("")
    }
  }

  function handleNewNameChange (event) {
    setNewName (event.target.value)
  }

  function handleNewNumberChange (event) {
    setNewNumber (event.target.value)
  }

  function filterSearch (event) {
    setFilterValue ((event.target.value).toLowerCase ())
  }
    // input loses focus onchange - cant fix yet
    


  return (
    <div>
      <Headings heading="Phonebook" />
      <p>filter shown with <input 
      type="text"
      value={filterValue}
      onChange={filterSearch}
      >
      </input>
      </p>

      <Headings heading="Add a New" />

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

      <Headings heading="Numbers" />
      <>{persons.filter (person => person.name.toLowerCase ().includes (filterValue)).map (person => (
          <div key={person.name}>{person.name} {person.number} </div>
        ))
    }</>
    </div>
  )
}


export default App;
