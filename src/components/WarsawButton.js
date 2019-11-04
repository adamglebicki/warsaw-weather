<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'

const WButton = styled.button`
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
  background-color: #E5A73C;
  text-align: center;
  text-transform: uppercase;
  position: relative;
`

const WarsawButton = ({ showWarsaw }) => {
    return (
      <>
        <WButton onClick={showWarsaw}>
          Show me the weather in Warsaw
        </WButton>
      </>
    )
  }

=======
import React from 'react'
import styled from 'styled-components'

const WButton = styled.button`
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
 background-color: #E5A73C;
 text-align: center;
  text-transform: uppercase;
 position: relative;
`

const WarsawButton = ({ showWarsaw }) => {
    return (
      <>
        <WButton onClick={showWarsaw}>
          Show me the weather in Warsaw
        </WButton>
      </>
    )
  }

>>>>>>> 8fcf9003a2d9ed692e7d56bd1176d4ac7bd471c3
export default WarsawButton