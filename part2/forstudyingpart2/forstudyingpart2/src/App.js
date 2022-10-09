import './App.css';
import Note from './components/note'
import { useState, useEffect } from 'react'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

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
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App



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