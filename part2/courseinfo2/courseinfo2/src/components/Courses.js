import React from 'react'
  
  const Courses = ({courses}) => (
    <div>
            {courses.map ( course => (
              <div>
              <Header courseName={course.name} />
              <Content parts={course.parts} />
              <Total parts={course.parts} />
              </div>
            )
            )}
    </div>
  )

  const Header = ({courseName}) => {
      return (
          <h1>{courseName}</h1>
      )
  }
  
  const Content = ({ parts }) => {
    return <div> 
                    {parts.map (part => <Part key={part.id} part={part} /> )}
                </div>
  }

  const Part = ({part}) => {
    return  <p>
                {part.name} {part.exercises}
                </p>
  }
  
  const Total =  ({parts})=> (
        <h3> Total of {parts.reduce ((acc, part) => {
               return acc + part.exercises
            }, 0)} exercises
        </h3>
  )
  

  export default Courses