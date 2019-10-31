import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import Form from './components/Form'
import Weather from './components/Weather'
import WorldHeader from './components/WorldHeader'
import WarsawButton from './components/WarsawButton'
import ActionButton from './components/ActionButton'
import Index from './components/ScrollUpButton'

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    color: black;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const Warsaw = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  position: relative;
`

const World = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F8F8F8;
  position: relative;
`

const API_key = '186dd8517f76b40531cc4c7e9a5a4d33'

export default class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  showWarsaw = async (e) => {
    e.preventDefault()

    const warsaw_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=warsaw,pl&appid=${API_key}&units=metric`)
    const warsaw_response = await warsaw_call.json()

    this.setState({ 
      temp: warsaw_response.main.temp,
      city: warsaw_response.name,
      country: warsaw_response.sys.country,
      humidity: warsaw_response.main.humidity,
      description: warsaw_response.weather[0].description,
      error: undefined,
     })
  }

  showWeather = async (e) => {
    e.preventDefault()

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}&units=metric`)
    const response = await api_call.json()

    if (city && country) {

      this.setState({ 
        temp: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: undefined,
       })
    } else {
      this.setState({ 
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please fill up the form',
       })
    }
  }
  
  render() {
    return (
      <>
        <GlobalStyle/>
        <Warsaw>
          <Header />
          <WarsawButton showWarsaw={this.showWarsaw}/>
          <ActionButton />
          <Weather 
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </Warsaw>
        <World>
          <WorldHeader/>
          <Form showWeather={this.showWeather}/>
          <Index />
          <Weather 
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </World>
      </>
    )
  }
}
