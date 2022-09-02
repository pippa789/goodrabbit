import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom';

//add about page
//testimonials
//music, archives
//merchandise

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50px;
    width: auto;
    // background-color: green;
`;

const NavStyle = styled.div`
    display: flex;  
    flexDirection: row;
    justifyContent: flex-end;
    alignItems: center;
    fontSize: '17px',
    padding: '1 px',
    // backgroundColor: 'red',
    listStyle: none;
    @media(max-width: 768px) {
        flex-direction: column;
    }
    `;
   

function Navigation() {
    const LinkStyle = ({isActive}) => {
        return{
            color: isActive ? "#949396":"white",
            padding: "10px",
            textDecoration: 'none',
            // backgroundColor:'blue',
            LinkStyle: 'none',
        }
    }

return (
      <Nav>
          <NavStyle>
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
          </NavStyle>
      </Nav> 
      
  )
}
export default Navigation
