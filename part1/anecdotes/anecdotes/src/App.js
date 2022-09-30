
import './App.css';

import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]


  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array (anecdotes.length).fill (0))
  // why new Array - creates a new array that we don't have to change in value - then .fill put it as a integer - a new array we can select later
  //new array ANECDOTED.LENGTH same length ...then
  //The fill() method changes all elements in an array to a static value, from a start index (default 0 ) to an end index (default array. length )

  const generateRandomNumber = () => {
      return setSelected (Math.floor(Math.random() * anecdotes.length));
  }
  // why this works - we're using setSelected as function and math floor to return a random number in length of the anecdotes - this then gets pass to "selected" which then choose random array with their respective value

  const generateVote = () => {
      const copy = [...vote]
      copy[selected]++
      setVote (copy)
  }
  //  const copy = [...vote]  this creates a new copy of the useState "vote"
  // we created a copy since vote in useState is constant - it MUST NOT CHANGE, NOT GOOD PRACTICE  
  //copy[selected]++  - then we add +1 to every click in the generateVote button
  // setVote (copy) = this applies the function to the copied state

const largestNumber = vote.indexOf (Math.max(...vote))
// WHY DID THIS WORK? - this finds the max value index from the  array usetate vote

  return (
    <div>
    <h1>Anecdote of the Day</h1>
     <p>{anecdotes[selected]}</p> 
     <p>has {vote[selected]} votes</p>
      <br />
      <button onClick={generateVote}>Generate Vote</button>
      <button onClick={generateRandomNumber}>Gimme the Next Anecdote</button>
      <br />
      <h2>Anecdote with Most Votes</h2>
      <p>{anecdotes[largestNumber]}</p>
      <p>has {vote[largestNumber]}</p>
    </div>
  )
}

//     <p>has {vote[selected]} votes</p>   - vote is the value, selected is the array selected
//      <p>{anecdotes[largestNumber]}</p> - displays the anecdote with biggest vote [largest number is an array index]
// <p>has {vote[largestNumber]}</p> - display the vote with biggest number


// I gotta ask the right questions when it comes to these exercises
// questions like, how to find biggest array index or max value


export default App;
