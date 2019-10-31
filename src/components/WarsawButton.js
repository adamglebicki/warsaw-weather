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

export default WarsawButton