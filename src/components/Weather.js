<<<<<<< HEAD
import React from 'react'

const Weather = ({ icon, city, country, temp, humidity, description, error }) => {
    return (
      <>
        { icon && <img src ={`http://openweathermap.org/img/wn/${icon}.png`} alt="wthr img" /> }
        { city && country && <p>City: {city}, {country}</p> }
        { temp && <p>Temperature: {temp} C</p> }
        { humidity && <p>Humidity: {humidity}%</p> }
        { description && <p>{description.toUpperCase()}</p> }
        { error && <p> {error}</p> }
      </>
    )
  }

  export default Weather

=======
import React from 'react'

const Weather = ({ city, country, temp, humidity, description, error }) => {
    return (
      <>
        { city && country && <p>City: {city}, {country}</p> }
        { temp && <p>Temperature: {temp} C</p> }
        { humidity && <p>Humidity: {humidity}%</p> }
        { description && <p>{description.toUpperCase()}</p> }
        { error && <p> {error}</p> }
      </>
    )
  }

  export default Weather

>>>>>>> 8fcf9003a2d9ed692e7d56bd1176d4ac7bd471c3
