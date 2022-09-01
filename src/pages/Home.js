import React from 'react';
import styled from 'styled-components';
import head from '../images/head.jpg';

const Container = styled.div`
height: 100%;
`;

const Line = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 1px;
background-color: white;
`;

const HeadImg = styled.div`
width: 70% no-repeat;
height: 350px;
background-image: url(${head});
padding: 50px;
margin:  -80px 150px 100px 150px;
`;
const HeaderOne = styled.h1`
display:flex;
justify-content: center;
align-items: center;
margin-top: 150px;
font-size:40px;
color: white;
`;
const HeaderTwo = styled(HeaderOne)`
font-size: 20px;
color: #949396;
margin-top: 20px;
`;




function Home() {
  return (
    <Container>
       <Line />
     <HeaderOne>Bad Rabbit Records</HeaderOne>
        <HeaderTwo>Welcome to Bad Rabbit Online</HeaderTwo>
        <HeadImg/>   
    </Container>
  )
}

export default Home