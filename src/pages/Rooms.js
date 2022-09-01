import React from 'react'
// import Booking from '../components/Booking';
import styled from 'styled-components'

const Container = styled.div`
height: 100%;
color: red;
font-size: 20px;
`;

const Line = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 1px;
background-color: white;
`;

const HeaderOne = styled.h1`
display:flex;
justify-content: center;
align-items: center;
margin-top: 50px;
font-size:40px;
color: white;
`;

const TextBox = styled.p`
display: flex;
justify-content: center;
align-items: center;
width:70%;
height: 80%;
margin: 50px 50px 50px 200px;

`;


function Rooms() {
  return (
    <Container>
     <Line />
     <HeaderOne>Welcome to our rehearsal rooms.</HeaderOne>
     <TextBox>
Here you can easily and instantly book your rehearsal direct, with the ability to choose your desired time slot to suit your band by using our automated online booking system.
 PA, Mics, Leads, Bass Amp, Guitar Amp (if needed) Drum Kit are all included in the price We only ask you to bring you personals. (eg: cymbals, snare, etc).  Anything you dont have is available to hire for a small fee.
                                                       £20.00 - Small rehearsal room for 4 hours. 
£24.00 - Large rehearsal room for 4 hours.
.Please note: failure of attendance without prior notice, or online cancellation within 24 hours will result in full payment remaining due.                 </TextBox> 

    </Container>
  )
}

export default Rooms