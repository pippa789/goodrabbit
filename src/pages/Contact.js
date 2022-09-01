import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
display: flex-column;
justify-content: center;
align-items: center;
margin: 150px 300px 50px 200px;
`;

const Email = styled.h1`

font-size: 25px;
color: white;
`;

const Phone = styled(Email)``;

const Address = styled(Email)``;

function Contact() {
  return (
    <Container>
        <Email> Email alan@badrabbitrecords.com </Email>
        <Phone> Phone 07541782818 </Phone>
        <Address> Location 451 Pitch Pine Pub Stanley Rd. </Address>
    </Container>
  )
}

export default Contact