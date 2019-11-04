import React from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll"

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

const ActionButton = () => (
    <Button>
      <Link
      activeClass="active"
      to="world"
      spy={true}
      smooth={true}
      offset={-70}
      duration= {500}
    >Check the weather worldwide</Link>
    </Button>
)

export default ActionButton