import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Nav = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 60px;
width: auto;
background-color: black;
`

function Navigation() {
    const LinkStyle = {
    color: "white",
    padding: "50px",
    textDecoration: 'none'
};

    const navStyle = { 
    display: "flex",  
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: '20px',
    margin: '10px 0px'

};   

  return (
      <Nav>
          <ul style={navStyle}>
              <li>
                  <Link style={LinkStyle} to="/">Home</Link>
              </li>  
              <li>
                  <Link style={LinkStyle} to="/studio">Studio</Link>
              </li>
              <li>
                  <Link style={LinkStyle} to="/contact">Contact us</Link>
              </li>      
              <li>
                  <Link style={LinkStyle} to="/rooms">Practice rooms</Link>
              </li>      
          </ul>
      </Nav> 
      
  )
}
export default Navigation
