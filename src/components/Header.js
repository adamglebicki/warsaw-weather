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

const Header = () => (
      <>
        <H1>Warsaw Weather</H1>
        <H2>Find out weather conditions in the capital of Poland.</H2>
      </>
    )

export default Header

