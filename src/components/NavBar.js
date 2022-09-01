import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


const Nav = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 60px;
width: auto;
background-color: black;
`

function Navigation() {
    const LinkStyle = ({isActive}) => {
        return{
            color: isActive ? "red":"white",
            padding: "50px",
            textDecoration: 'none'
        }
    }

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
                  <NavLink style={LinkStyle} to="/">Home</NavLink>
              </li>  
              <li>
                  <NavLink style={LinkStyle} to="/studio">Studio</NavLink>
              </li>
              <li>
                  <NavLink style={LinkStyle} to="/contact">Contact us</NavLink>
              </li>      
              <li>
                  <NavLink style={LinkStyle} to="/rooms">Practice rooms</NavLink>
              </li>      
          </ul>
      </Nav> 
      
  )
}
export default Navigation
