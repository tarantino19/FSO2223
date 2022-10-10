import "./App.css"
import { useState, useEffect } from 'react'
import Headings from './components/headings';
import Filter from './components/filter';
import PersonForm from './components/personform';
import Persons from './components/persons';
import personService from './services/person'
import Notification from "./components/notification";



const App = () => {
  const [persons, setPersons] = useState ([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState ("")
  const [filterValue, setFilterValue] = useState ("")
  const [successMessage, setSuccessMessage] = useState (null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPerson => {
        setPersons (initialPerson)
      })
  }, [])

const addName = (event) => {
    event.preventDefault ()
    if (persons.find (person => person.name === newName)) {
      alert (`${newName} is already added to phonebook`) 
    } else {
      const newestName = { name: newName, number: newNumber}

    personService
      .create(newestName)
      .then(returnedName => {
        setPersons (persons.concat(returnedName))

          setSuccessMessage(
            `Added ${newestName.name} to the list`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)

        setNewName (' ')
        setNewNumber (' ')
      })
  } 
}


//function change

  function handleNewNameChange (event) {
    setNewName (event.target.value)
  }

  function handleNewNumberChange (event) {
    setNewNumber (event.target.value)
  }

  function filterSearch (event) {
    setFilterValue ((event.target.value).toLowerCase ())
  }


const deletePerson = (id) => {  
  
  if (window.confirm (`Are you sure you want to delete this person?`)) {
  }

  personService
  .remove (id)
  .then (deletedPerson => 
    persons.filter (person=> person.id !== deletedPerson.id)
    );
}


  return (
    <div>
    <Headings heading="Phonebook" />
    <Notification successMessage={successMessage} />
    <Filter filterValue={filterValue} filterSearch={filterSearch} />
    <Headings heading="Add a New" />
    <PersonForm addName={addName} newName={newName} handleNewNameChange={handleNewNameChange} newNumber={newNumber} handleNewNumberChange={handleNewNumberChange}/>
      <Headings heading="Name & Numbers" />
      <Persons 
      persons={persons} filterValue={filterValue} deletePerson={deletePerson} />
    </div>
  )
}

//use filter and find for search features

export default App;
