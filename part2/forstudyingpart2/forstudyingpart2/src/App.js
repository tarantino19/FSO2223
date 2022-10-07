import './App.css';
import Note from './components/note'
import axios from 'axios'
import { useState, useEffect } from 'react'


//using the axios, we're not getting the data from another js file anymore
// it's in the localhost w/c would be substituted to a real website url soon

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  // const hook = () => {
  //   console.log('effect')
  //   axios
  //     .get('http://localhost:3001/notes')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       setNotes(response.data)
  //     })
  // }
  
  // useEffect(hook, [])  - this is same as the one above

  const toggleImportanceOf = (id) => {
    console.log('importance of ' + id + ' needs to be toggled')
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
}
  
    // setNotes(notes.concat(noteObject)) // The new note is added to the list of notes using the concat array method  - noteObject gets added to the "notes"
    // setNewNote('')  //The event handler also resets the value of the controlled input element by calling the setNewNote function of the newNote state
  // }

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote (event.target.value)
  }

  // If the value of showAll is false, the notesToShow variable will be assigned to a list that only contains notes that have the important property set to true. Filtering is done with the help of the array filter method:

  const notesToShow = showAll ? notes : notes.filter(note => note.important) // if show all is true, show all notes, if it's false, only show the important is true (in the notes const) - for completely separate button


  //Next, let's add functionality that enables users to toggle the showAll state of the application from the user interface.
//   this part - button onclick showAll
// !showAll means showAll is not true or false
// notestoshowmap allows us 

  return (
    <div>
    <h1>Notes</h1>
    <div>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all' }
      </button>
    </div>      
    <ul>
      {notesToShow.map(note => 
        <Note
          key={note.id}
          note={note} 
          toggleImportance={() => toggleImportanceOf(note.id)}
        />
      )}
    </ul>
      <form onSubmit={addNote}>
          <input 
          value={newNote}
          onChange={handleNoteChange}
          />
          <button type='submit'>save</button>
      </form>
    </div>
  )
}

//Because the code generating the li tags is JavaScript, it must be wrapped in curly braces in a JSX template just like all other JavaScript code.
//separate lins for map for readability

// addNote function  is on form onSubmit

//event.preventDefault - is for the addnote function

// input value for newNote...and onChange = function handNoteChange setNewNotes(that has event.target.value)

// Let's change the component so that it stores a list of all the notes to be displayed in the notesToShow variable. The items of the list depend on the state of the component: - notesToShow.map

export default App;



//console.log
// What's the difference between an experienced JavaScript programmer and a rookie? The experienced one uses console.log 10-100 times more.

// Paradoxically, this seems to be true even though a rookie programmer would need console.log (or any debugging method) more than an experienced one.

// When something does not work, don't just guess what's wrong. Instead, log or use some other way of debugging.

//the right way to console log ....  console.log('props value is', props)





// why putting 2 params in map is not recommended

//When called like this, i is assigned the value of the index of the position in the array where the note resides.

// As such, one way to define the row generation without getting errors is:

// <ul>
//   {notes.map((note, i) => 
//     <li key={i}>
//       {note.content}
//     </li>
//   )}
// </ul>
// This is; however, not recommended and can create undesired problems even if it seems to be working just fine.

// Read more about this in this article.


//https://fullstackopen.com/en/part2/forms

//check for way to add a list 



// *** EVENT LOOPS ***



// ** EFFECT HOOKS **

// const hook = () => {
//   console.log('effect')
//   axios
//     .get('http://localhost:3001/notes')
//     .then(response => {
//       console.log('promise fulfilled')
//       setNotes(response.data)
//     })
// }

// useEffect(hook, [])

// Now we can see more clearly that the function useEffect actually takes two parameters. The first is a function, the effect itself. According to the documentation:

// By default, effects run after every completed render, but you can choose to fire it only when certain values have changed.

// So by default the effect is always run after the component has been rendered. In our case, however, we only want to execute the effect along with the first render.

// The second parameter of useEffect is used to specify how often the effect is run. If the second parameter is an empty array [], then the effect is only run along with the first render of the component.