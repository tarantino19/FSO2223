import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'


function App () {
  const [countries, setCountries] = useState ([])
  const [search, setSearch] = useState ("")

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

console.log(countries);

  return (
    <div>
        <p>find countries <input value={search} onChange={handleChange} /></p>
        {filteredCountries.length > 10 && (
          <div>Go specify another filter</div>)}
        {filteredCountries.length <= 10 && filteredCountries.length > 1 && filteredCountries.map (country => <div key={country.name.common}>{country.name} {country.name.common}</div>)}
        {filteredCountries.length === 1 &&  (
          <div>
              <h1>{filteredCountries[0].name}</h1>
              <p>capital: {filteredCountries[0].capital}</p>
              <p>area: {filteredCountries[0].area}</p>
              <h3>languages</h3>
              <ul>
                {Object.values (filteredCountries[0].languages).map (country=> 
                  <li key={country}>{country}</li>
                )}
              </ul>
          <div><img src={filteredCountries[0].flags.png} alt=""/></div>
          </div>
        )
      }




        
    </div>
  )

}


// function App () {
//   const [countries, setCountries] = useState ([])
//   const [newCountry, setCountrySearch] = useState ("")
  
//   useEffect(() => {
//     axios
//       .get('https://restcountries.com/v3.1/all')
//       .then(response => {
//         setCountries(response.data)
//       })
//   }, [])

//   function searchCountry (event) {
//         event.preventDefault ()
//   }

//   function handleCountrySearch (event) {
//     setCountrySearch(event.target.value)
//   }

  
// return (
//     <div>

//     <form onChange={searchCountry}>

//     <div>
//     find countries: <input  
//     type="search"
//     value={newCountry} 
//     onChange={handleCountrySearch}
//     > </input>
//   </div>

//       <>{countries.filter (country => country.name.toLowerCase ().includes (newCountry)).map (country=> (
//         <div key={country.name}>{country.name}</div>
//       ))
//   }</>

// </form>

//     </div>
//   )
// }

export default App;

