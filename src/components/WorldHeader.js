import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  margin-top: 10px;
  font-size: 100px;
`

const H2 = styled.h2`
  font-size: 40px;
  margin-bottom: 90px;
`

const WorldHeader = () => (
  <>
    <H1 id='world'>World Weather</H1>
    <H2>Tell me more about weather conditions around the World.</H2>
  </>
)

export default WorldHeader