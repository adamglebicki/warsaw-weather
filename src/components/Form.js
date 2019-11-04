<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  padding: 0.7em 1.7em;
  margin: 0 0.3em 0.3em 0;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Montserrat';
  font-size: 1em;
  font-weight: 400;
  color: #FFFFFF;
  background-color: #3369ff;
  text-align: center;
  text-transform: uppercase;
  position: relative;
`

const Input = styled.input`
  box-sizing: border-box;
  border: 2px solid #aaa;
  border-radius: 4px;
  font-family: 'Montserrat';
  font-size: 1em;
  margin: 8px;
  padding: 8px;
  outline: none;
  transition: .3s;

  &:focus {
    border-color: #3369ff;
    box-shadow: 0 0 8px 0 #3369ff;
  }
`

const Form = ({ showWeather }) => {
    return (
      <>
        <form onSubmit={showWeather}>
          <Input type="text" name='city' placeholder='City'/>
          <Input type="text" name='country' placeholder='Country'/>
          <Button>Show me the weather</Button>
        </form>
      </>
    )
  }

export default Form


=======
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
 padding: 0.7em 1.7em;
 margin: 0 0.3em 0.3em 0;
  border: none;
 border-radius: 4px;
 box-sizing: border-box;
 text-decoration: none;
  font-family: 'Montserrat';
  font-size: 1em;
 font-weight: 400;
 color: #FFFFFF;
 background-color: #3369ff;
 text-align: center;
  text-transform: uppercase;
 position: relative;
`

const Input = styled.input`
  box-sizing: border-box;
  border: 2px solid #aaa;
  border-radius: 4px;
  font-family: 'Montserrat';
  font-size: 1em;
  margin: 8px;
  padding: 8px;
  outline: none;
  transition: .3s;

  &:focus {
    border-color: #3369ff;
    box-shadow: 0 0 8px 0 #3369ff;
  }
`

const Form = ({ showWeather }) => {
    return (
      <>
        <form onSubmit={showWeather}>
          <Input type="text" name='city' placeholder='City'/>
          <Input type="text" name='country' placeholder='Country'/>
          <Button>Show me the weather</Button>
        </form>
      </>
    )
  }

export default Form


>>>>>>> 8fcf9003a2d9ed692e7d56bd1176d4ac7bd471c3
