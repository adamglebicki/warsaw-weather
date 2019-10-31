import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  margin-top: 10px;
  font-size: 100px;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 414px) {
    font-size: 30px;
  }
    
  @media (max-width: 320px) {
    font-size: 25px;
  }
`

const H2 = styled.h2`
  font-size: 40px;
  margin-bottom: 90px;

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 414px) {
    font-size: 20px;
  }

  @media (max-width: 320px) {
    font-size: 15px;
  }
`

const WorldHeader = () => (
  <>
    <H1 id='world'>World Weather</H1>
    <H2>Tell me more about weather conditions around the World.</H2>
  </>
)

export default WorldHeader