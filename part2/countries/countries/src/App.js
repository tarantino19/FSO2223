import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'


function App () {
  const [countries, setCountries] = useState ([])
  const [search, setSearch] = useState ("")
  // const [showCountry, setShowCountry] = useState ({})
  // const [weather, getWeather] = useState ({})

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => 
        setCountries(
            response.data.map(({name, capital, area, languages, flags}) => ({
        name: name.common,
        capital, area, languages, flags,
      }))
      )
      )
  }, [])

const handleChange = event => setSearch (event.target.value)

const filteredCountries = countries.filter (country => country.name.toLowerCase().includes (search.toLowerCase ()))

//implicitly returns another function
// const handleSetShow = name  => () => {
//   setShowCountry (
//     filteredCountries.filter (country => country.name.map (country.name)))
// }



  return (
    <div>
        <p>find countries <input value={search} onChange={handleChange} /></p>
        {filteredCountries.length > 10 && (
          <div>Go specify another filter</div>)}
        {filteredCountries.length <= 10 && filteredCountries.length > 1 && filteredCountries.map (country => <div key={country.name.common}>{country.name} <button>show</button></div>)
      }
        {filteredCountries.length === 1 &&  (
          <>
              <h1>{filteredCountries[0].name}</h1>
              <p>capital: {filteredCountries[0].capital}</p>
              <p>area: {filteredCountries[0].area}</p>
              <h3>languages</h3>
              <ul>
                {Object.values (filteredCountries[0].languages).map (country=> 
                  <li key={country}>{country}</li>
                )}
              </ul>
          <div><img src={filteredCountries[0].flags.png} alt={`${filteredCountries[0].name} flag`}/></div>
              <h3>Weather in {filteredCountries[0].capital}</h3>
              <div>temperature</div>
          </>
        ) 
      }



    </div>
  )

}


export default App;

