const Header = (props) => {
  return  <> <h1>{props.course}</h1></>
}

// when creating the return, ask myself, what UI do I want to return here? start with that - then think about the props name involve

const Part = (props) => {
  return  <p>
                {props.part.name} {props.part.exercises}
              </p>
}

const Content = (props) => {
  return <> 
                  <Part part={props.parts[0]}/>
                  <Part part={props.parts[1]}/>
                  <Part part={props.parts[2]}/>
              </>
}

const Total =  props=> (
        <p>Number of exercises {props.parts.reduce ((acc, part) => part.exercises + acc,  0)} </p>
)
//accumulator needs to go first 

// CONST APP

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts}/>
   <Total parts = {course.parts}/>
        
    </div>
  )
}






export default App;



// MY NOTES in my own understanding
//  the return div in the const App act as the argument in the parameter that we set in the components Header, Content, and Total

//for component - name the props.name to whatever I want to show in my App.js return
//always use a div or <></>  in the component  - same with every return
// close the tag of the components when you use it in the  const App
