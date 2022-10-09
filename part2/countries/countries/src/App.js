import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryDetails from './components/CountryDetails';



function Weather ({filteredCountries}) {
  return (
    <div>
    <h3>Weather in {filteredCountries[0].capital}</h3>
    <p>temperature Celcius</p>
    <p>weather icon here</p>
    <p>wind:  m/s</p>
    </div>
  )
}



function App () {
  const [countries, setCountries] = useState ([])
  const [search, setSearch] = useState ("")
  const [showCountry, setShowCountry] = useState (false)
  // const [weather, setWeather] = useState ({})

  // GET COUNTRIES
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

  console.log(countries);

const handleChange = event => setSearch (event.target.value)

const filteredCountries = countries.filter (country => country.name.toLowerCase().includes (search.toLowerCase ()))


function showDetails () {
  setShowCountry (!showCountry)
}

// function getWeather () {
//   axios
//     .get('https://api.openweathermap.org/data/2.5/weather?id=524901&lang=fr&appid=816f2a0a56d15cfb00a149f2b57c95c7')
//     .then(response => {
//       setWeather(response.data)
//     })
// }


  return (
    <div>
        <p>find countries <input value={search} onChange={handleChange} /></p>
        {filteredCountries.length > 10 && (
          <div>Go specify another filter</div>)}
        {filteredCountries.length <= 10 && filteredCountries.length > 1 && filteredCountries.map (country => <div key={country.name.common}>{country.name} <button onClick={showDetails}>show</button></div>)
      }
      {showCountry  && <CountryDetails filteredCountries={filteredCountries} />}
        {filteredCountries.length === 1 &&  (

          <>
            <CountryDetails filteredCountries={filteredCountries} />
            <Weather filteredCountries={filteredCountries}/>

          </>
        ) 
      }
      
    </div>
  )
}

export default App;

              // <div>temperature {weather.city.temp} °C</div>

              //cant figure out 2.13 and 2.14 at the moment, getting API and transferring it into UI is quite confusing to me at the moment, will come back to these at a later date.


              // api

        