import './App.css';
import Note from './components/note'


const App = ( { notes } ) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
            {notes.map (note => 
              <Note key={note.id} note={note} />
              )}
      </ul>
    </div>
  )
}

//Because the code generating the li tags is JavaScript, it must be wrapped in curly braces in a JSX template just like all other JavaScript code.
//separate lins for map for readability

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