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

