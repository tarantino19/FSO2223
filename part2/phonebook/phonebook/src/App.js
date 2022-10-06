import './App.css';
import { useState, useEffect } from 'react'
import Headings from './components/headings';
import Filter from './components/filter';
import PersonForm from './components/personform';
import Persons from './components/persons';
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState ([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState ("")
  const [filterValue, setFilterValue] = useState ("")

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])


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
    <Filter filterValue={filterValue} filterSearch={filterSearch} />
    <Headings heading="Add a New" />
    <PersonForm addName={addName} newName={newName} handleNewNameChange={handleNewNameChange} newNumber={newNumber} handleNewNumberChange={handleNewNumberChange}/>
      <Headings heading="Numbers" />
      <Persons persons={persons} filterValue={filterValue}  />
    </div>
  )
}

//use filter and find for search features

export default App;
