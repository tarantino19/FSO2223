import './App.css';
import { useState } from 'react';

// import {User} from './index'

//PEDROTECH SERIES
// props 

// function App () {
//   return (
//     <div className="App">
//     <Job salary={90000} position="Senior SDE" company="Amazon" />
//     <Job salary={12000} position="Junior SDE" company="Google" />
//     <Job salary={10000} position="Project Manager" company="Netflix" />
//   </div>
//   )
// }

// const Job = (props) => {
//   return (
//     <div>
//         <h1>{props.salary}</h1>
//         <h1>{props.position}</h1>
//         <h1>{props.company}</h1>
//     </div>
//   )
// }

//CONDITIONAL UI CHANGING

// function App () {
//     const age = 18;
//       const isGreen = true

//      return  <>{age >= 18? <h1 style={{color: isGreen ? "green" : "red"}}>OVER AGE</h1> : <h1>UNDER AGE</h1>}</>
//       //substitute for if else  
//       // if (age >= 18) {
//       //   return <h1>OVER AGE</h1>
//       // }
//       //   return <h1>UNDER AGE</h1>
// }


// ARRAYS
// function App () {
//   const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Luca Brasi"]

//   return <div className="App">
//         {names.map ((name, arrindex) => {
//           return <h1>{name}</h1>
//         }) 
//         }
//   </div>;
// }

//OBJECTS

// function App () {
//   const users = [
//     { name: "Pedro", age: 21},
//     { name: "Jake", age: 25},
//     { name: "Jessica", age: 45}
//   ]

//   return (
//     <div>
//         {users.map ((user, index) => {
//           return <User name={user.name} age={user.age}/>
//         })}
//     </div>
//   )
// }

//   function App() {
//     const planets = [
//       { name: "Mars", isGasPlanet: false },
//       { name: "Earth", isGasPlanet: false },
//       { name: "Jupiter", isGasPlanet: true },
//       { name: "Venus", isGasPlanet: false },
//       { name: "Neptune", isGasPlanet: true },
//       { name: "Uranus", isGasPlanet: true },
//     ];

//     return <div className='App'>
//                   {planets.map ((planet, key) => {
//                         if (planet.isGasPlanet) {
//                           return <h1>{planet.name}</h1>
//                         }
//                   })}
//               </div>
// }

//paramerer of map - the value, then the array index
//CREATE DIFFERENT FILES FOR DIFFERENT COMPONENT


// States - pedro4
// UseState Hook - state think of it as a variable that holds data
//import { useState } from 'react'; - 1
// useState as the function - 2
// age as the variable we wan to change, setAge as the function

// function App () {
//   const [age, setAge] = useState (0)

//   const increaseAge = () => {
//           setAge (age+1)
//   };

//     return <div className='App'>
//     {age}
//     <button onClick={increaseAge}>Increase Age</button>
//     </div>
// }


//for input

// function App () {
//     const [inputValue, setInputValue] = useState ("")

//     const handleInputChange = (event) => {
//       setInputValue (event.target.value)
//     }

//     return <div className='App'>
//                     <input type="text" onChange={handleInputChange}/>
//                     <br />
//                     {inputValue}
//                </div>
// }

//example 3 - show hide text

// function App () {
//   const [showText, setShowText] = useState (true)
//   return <div className='App'>
//                  <button onClick={() => { setShowText (!showText)    }}>Show or Hide Text</button>
//                {showText === true && <h1>HI, MY NAME IS RED</h1>}
//              </div>
// }
//working

//change color example - alternating colors

// function App () {
//   const [textColor,  setTextColor] = useState ("blue")
//   return <div className='App'>
//                  <button onClick={() => {  setTextColor (textColor === "blue" ? "red" : "blue") }}>Change Text Color</button>
//                <h1 style={ {color: textColor }}>HI, MY NAME IS RED</h1>
//              </div>
// }


//COUNTER

// function App() {
//   const [count, setCount] = useState(0);

//   const increase = () => {
//     setCount (count +1)
//   }

//   const decrease = () => {
//     setCount (count - 1)
//   }

//   const setToZero = () => {
//     setCount (0)

//   }
//   return (
//     <div className="App">
//     <button className="Btn-text"onClick={increase}>Increase</button>
//     <button className="Btn-text" onClick={decrease}>Decrease</button>
//     <button  className="Btn-text" onClick={setToZero}>Set to Zero</button>
//     <br />
//       <div className="Counter">{count}</div>
//     </div> 
//   );
// }

// FSO PART 1 notes - Component state, event handlers

//Component Helper Functions - BORNYEAR is a helper function

// const Hello = ({name , age}) => { // destructuring next level
// //  const { name, age } = props
//   const bornYear = () =>  new Date ().getFullYear () - age 

// //   const bornYear = () => new Date().getFullYear() - age

// // const bornYear = () => {
// //   return new Date().getFullYear() - age
// // }  this and above are the same

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

// setTimeout(
//   () => {  setCounter (counter + 1)
// }, 1000); // when setCounter modified the state , the component gets rerendered in the page.

// console.log(`rendering...`, counter); // for debugging

//   return (
//     <div>{counter}</div>
//   )
// }


//EVENT HANDLING

// const App = () => {
//     const [ counter, setCounter ] = useState(0)
  
//     const handleClick = () => {
//         setCounter(counter + 1)
//     }

//     const resetToZero = () => {
//         setCounter (0)
//     }
    
// //   // this is better than the one below - separated eventhandler and named functions
//     return (
//       <div>
//         <div>{counter}</div>
//         <button onClick={handleClick}>
//           plus
//         </button>
//         <button onClick={resetToZero}>
//           Reset to Zero
//         </button>
//       </div>
//     )
//   }

  //examples

//   <button onClick={() => setCounter(counter + 1)}> 
//   plus
// </button>  //this would work too
  
// <button onClick={setCounter(counter + 1)}> 
//   plus
// </button> // this would not work - it needs to have named function or an anonymous function to work

//the eventhandler is actually a FUNCTION CALL An event handler is supposed to be either a function or a function reference, and when we write:

//better to separate the function in the eventhandler outside





// Passing state to child components

// It's recommended to write React components that are small and reusable across the application and even across projects.

//component for displaying the counter
// const Display = (props) => {
//     return (
//       <div>{props.counter}</div>
//     )
//   } //we do this so we can use this component on other parts of the app

//   //button component

//   const Button = (props) => {
//     return (
//         <button onClick={props.onClick}>{props.text}</button>
//     )
//   }
    //The event handler is passed to the Button component through the onClick prop. The name of the prop itself is not that significant, but our naming choice wasn't completely random. React's own official tutorial suggests this convention.


//we can destrcuture and refactor the components
//https://fullstackopen.com/en/part1/component_state_event_handlers#refactoring-the-components

// const Display = ({ counter }) => {
//     return (
//       <div>{counter}</div>
//     )
//   }

// *** basically, add {  } as it serves as the props { counter } ***
//HOW TO REFACTOR COMPONENTS PROPS

// const Button = ({ onClick, text }) => (
//     <button onClick={onClick}>
//       {text}
//     </button>
//   )

// or   const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

//However, be careful to not oversimplify your components, as this makes adding complexity a more tedious task down the road.

// const App = () => {
//     const [ counter, setCounter ] = useState(0)
  
//     const increaseByOne = () => setCounter(counter + 1)
//     const decreaseByOne = () => setCounter (counter - 1)
//     const setToZero = () => setCounter(0)
  
//     return (
//       <div>
//         <Display counter={counter}/>
//         <Button onClick={increaseByOne}  text="Increase"/>
//         <Button onClick={decreaseByOne}  text="Decrease"/>
//         <Button onClick={setToZero}  text="Reset to Zero"/>
//       </div>
//     )
//   }


// ULET - final code

// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

// const Button = (props) => {
//   return (
//     <button onClick={props.onClick}>
//       {props.text}
//     </button>
//   )
// }


// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button
//         onClick={increaseByOne}
//         text='+1'
//       />
//       <Button
//         onClick={setToZero}
//         text='reset to 0'
//       />     
//       <Button
//         onClick={decreaseByOne}
//         text='-1'
//       />           
//     </div>
//   )
// }


// counter is the useState initial value
// setCounter is the function body with ()  - declare this function body with a new function name and that's what you'll pass in the return  - instead of an anonymous function - better practice

//Complex state  

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>
//         left
//       </button>
//       <button onClick={() => setRight(right + 1)}>
//         right
//       </button>
//       {right}
//     </div>
//   )
// }

// NOTE: the above 2 state example is better and less complex than the one below

//turn above into a single piece of state

//REMEMBERS - clicks is the component usestate value, setClicks is the function that will change the useState value

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   }) // put it into an object

//   // const handleLeftClick = () => {
//   //   const newClicks = { 
//   //     left: clicks.left + 1, 
//   //     right: clicks.right 
//   //   }
//   //   setClicks(newClicks) // We can define the new state object a bit more neatly by using the object spread syntax
//   // }

//     //refactored handleLeftClick  - object spread syntax basically said ... = get the others

//     const handleLeftClick = () => {
//       const newClicks = { 
//         ...clicks, 
//         left: clicks.left + 1 
//       }
//       setClicks(newClicks)
//     }


//   // const handleRightClick = () => {
//   //   const newClicks = { 
//   //     left: clicks.left, 
//   //     right: clicks.right + 1 
//   //   }   
//   //   setClicks(newClicks) // We can define the new state object a bit more neatly by using the object spread syntax
//   // }

//   //refactored handleRightClick - object spread syntax basically said ... = get the others

//   const handleRightClick = () => {
//     const newClicks = {
//       ...clicks,
//       right: clicks.right +1
//     }  //creates a copy of the clicks object where the value of the right property is increased by one.
//     setClicks (newClicks)
//   }


//       //****MUTATION****  = why did we declare newClicks as new variable when we can do it directly ;like this:
//       // const handleLeftClick = () => {
//       //   clicks.left++
//       //   setClicks(clicks)
//       // }
//       //it is forbidden in React to mutate state directly, since it can result in unexpected side effects. Changing state has to always be done by setting the state to a new object.


//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }

//useState when we want to rerender something on the page 





//HANDLING ARRAYS


// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))  //concat joins the 2 or more arrays- return a new copy//we dont use .push because that changes the state and is mutable/does not return new array
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll (allClicks.concat ('R'))
//     setRight(right + 1)
//   }

//   const resetLeftToZero = () => {
//     setLeft (0)
//     setAll (allClicks.concat(" "))
//   }

//   const resetRightToZero = () => {
//     setRight (0)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//       <button onClick={resetLeftToZero}>Reset Left to Zero</button>
//       <button onClick={resetRightToZero}>Reset Left to Zero</button>
//     </div>
//            //allClicks then gets joined to a string - this case an empty one // "" goes in the middle of each array - but it's empty in this case
//            //We call the join method on the allClicks array that joins all the items into a single string, separated by the string passed as the function parameter, which in our case is an empty space.
//   )
// }



//CONDITIONAL RENDERING

// const History = (props) => {
//   console.log(props);
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//           the app is used by clicking buttons
//       </div>
//     ) 
//   }
//     return (
//       <div>
//       button pressing history: {props.allClicks.join (" ")}
//      </div>
//     )
// }

// // const Button = ({ handleClick, text }) => (
// //   <button onClick={handleClick}>
// //     {text}
// //   </button>
// // )

// const Button = (props) => {
//   return ( <button onClick={props.handleClick}>
//     {props.text}
//   </button>
//   )
// }

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text={"left"}/>
//       <Button handleClick={handleRightClick} text={"right"}/>
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

//What is a Hook? A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.


//debugging  
//The first rule of web development
// Keep the browser's developer console open at all times.
// The Console tab in particular should always be open, unless there is a specific reason to view another tab.
// don't write more code but rather find and fix the problem immediately.


//Rules of Hooks

//The useState function (as well as the useEffect function introduced later on in the course) must not be called from inside of a loop, a conditional expression, or any place that is not a function defining a component. This must be done to ensure that the hooks are always called in the same order, and if this isn't the case the application will behave erratically.

// const App = () => {
//   // these are ok
//   const [age, setAge] = useState(0)
//   const [name, setName] = useState('Juha Tauriainen')

//   if ( age > 10 ) {
//     // this does not work!
//     const [foobar, setFoobar] = useState(null)
//   }

//   for ( let i = 0; i < age; i++ ) {
//     // also this is not good
//     const [rightWay, setRightWay] = useState(false)
//   }

//   const notGood = () => {
//     // and this is also illegal
//     const [x, setX] = useState(-1000)
//   }

//   return (
//     //...
//   )
// }



//Event Handling Revisited

// const App = () => {
//   const [value, setValue] = useState(10)

//   return (
//     <div>
//       {value}
//       <button onClick={() => setValue (0)}>reset to zero</button> 
//     </div>
//   )
//   // set value has to be a function
// }

// separate variable for the function - below

// const App = () => {
//   const [value, setValue] = useState(10)

//   const handleClick = () => {
//     console.log('clicked the button')
//     setValue(0)
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={handleClick}>button</button>
//     </div>
//   )
// }


//Function that returns a function
// Another way to define an event handler is to use function that returns a function.

// const hello = () => {
//   const handler = () => console.log('hello world')

//   return handler
// }
//<button onClick={hello()}>button</button>
// this works


// const App = () => {
//   const [value, setValue] = useState(10)

//   const hello = (who) => {
//     const handler = () => {
//       console.log('hello', who)
//     }
//     return handler
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={hello('world')}>world</button>
//       <button onClick={hello('react')}>react</button>
//       <button onClick={hello('function')}>function</button>
//     </div>
//   )
// }

// Functions returning functions can be utilized in defining generic functionality that can be customized with parameters. The hello function that creates the event handlers can be thought of as a factory that produces customized event handlers meant for greeting users.


// Passing Event Handlers to Child Components

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.buttonText}
//   </button>
// )

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//   return (
//     <div>
//       {value}
//     <Button handleClick={() => setToValue (1000)} buttonText="one thousand"/>
//     <Button handleClick={() => setToValue (0)} buttonText="reset to zero"/>
//     <Button handleClick={() => setToValue (value + 1)} buttonText="increment by 1"/>
//     </div>
//   )
// }



//Do Not Define Components Within Components


// This is the right place to define a component
// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = newValue => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//   // Do not define components inside another component
//   const Display = props => <div>{props.value}</div>

//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="reset" />
//       <Button handleClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }


//Let's instead move the Display component function to its correct place, which is outside of the App component function:
//first line below

const Display = props => <>{props.value}</>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}









export default App;

