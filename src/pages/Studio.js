import React from 'react'
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

function Studio() {
  return (
    <Container>
      <Line />
      <HeaderOne>Welcome to the hub of Bad Rabbit Records.</HeaderOne>
      <TextBox>
       This is where your creativity and talent can come alive.
      We can cater to all your needs right across the audio spectrum, from recording your album, backing tracks, demos, and that quick song you’ve always wanted to do.
      You can choose from a live band recording or a studio layered project Our fees start from £100.00 per day depending on your needs You are welcome to book an appointment to visit the studio with the engineer who will also offer you a taste of the quality we can produce, and can discuss a booking and price. We also have professional studio and session musicians available if you require support for your project. Email us at alan@badrabbitrecords.com or call us on 07541 782818                                              </TextBox>
    </Container>
  )
}

export default Studio