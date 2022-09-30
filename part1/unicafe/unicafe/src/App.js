
import "./App.css";
import { useState } from 'react'

const Button = (props) => {
  return (
    <button  className="Btn" onClick={props.setter}>{props.buttonText}</button>
  )
}

const StatisticsLine = ({ text, value}) => {
      return (
        <tr>
               <td>{text}</td> 
                <td>{value}</td> 
        </tr>
      )
}   

const Statistics = (props) => {  

  const average = (props.good - props.bad )/ props.all
  const positive = `${((props.good/props.all) * 100).toFixed(2)}%`

  if (props.all > 0) {
    return (
      <table>
            <tbody>
                       <h3>statistics</h3>
                        <StatisticsLine text="good" value={props.good} />
                        <StatisticsLine text="neutral" value={props.neutral} />
                        <StatisticsLine text="bad" value={props.bad} />
                        <StatisticsLine text="all" value={props.all} />
                        <StatisticsLine text="average" value={average}/>
                        <StatisticsLine text="positive" value={positive} />
            </tbody>
      </table>
  ) 
  } return (<p>no feedback given</p>)
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => {
    setGood(good + 1)
  }

  const neutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const badFeedback = () => {
    setBad(bad+ 1)
  }

  const all= good + neutral + bad //all

  return (
    <div>
      <h3>give feedback</h3>
      <Button setter={goodFeedback} buttonText="GOOD"/>
      <Button setter={neutralFeedback} buttonText="NEUTRAL"/>
      <Button setter={badFeedback} buttonText="BAD"/>
      <Statistics good={good}  neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}
      // <Show statistics={Statistics}/>


export default App
