import React from "react";


function CountryDetails ({filteredCountries}) {
    return (
      <>
      <h1>{filteredCountries[0].name}</h1>
      <p>capital: {filteredCountries[0].capital}</p>
      <p>area: {filteredCountries[0].area}</p>
      <Languages text="Languages" filteredCountries={filteredCountries} />
      <CountryMap filteredCountries={filteredCountries} />
      </>
    )
  }

function CountryMap ({filteredCountries}) {
    return (
      <div><img src={filteredCountries[0].flags.png} alt={`${filteredCountries[0].name} flag`}/></div>
    )
  }
  
  function Languages ({text, filteredCountries}) {
    return (
      <>
      <h3>{text}</h3>
      <ul>
        {Object.values (filteredCountries[0].languages).map (country=> 
          <li key={country}>{country}</li>
        )}
      </ul>
      </>
    )
  }

  export default CountryDetails;