import React from 'react'
  
  const Courses = ({courses}) => (
    <div>
            {courses.map ( course => (
              <div key={course.id} >
              <Header heading={course.name} />
              <Content parts={course.parts} key={course.id}/>
              <Total parts={course.parts} />
              </div>
            )
            )}
    </div>
  )

  const Header = ({heading}) => {
      return (
          <h1>{heading}</h1>
      )
  }

  const Part = ({part}) => {
    return  <ul>
                    {part.name} {part.exercises}
                </ul>
  }

  
  const Content = ({ parts }) => {
    return <div> 
                    {parts.map (part => <Part key={part.id} part={part}/> )}
                </div>
  }

  
  const Total =  ({parts})=> (
        <h3> Total of {parts.reduce ((acc, part) => {
               return acc + part.exercises
            }, 0)} exercises
        </h3>
  )
  

  export default Courses