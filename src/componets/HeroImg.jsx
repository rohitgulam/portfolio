import React from 'react';
import rohit from '../img/rohit.jpg';
import styled from 'styled-components';


function HeroImg() {
  return (
    <Div>
        <img src={rohit} alt="Freelance WordPress Developer, Rohit Gulam" />
    </Div>
  )
}

const Div = styled.div`
    // width: 40%;
    
    img{
        width: 400px;
        height: 515px;
    }
`;

// const Img = styled.img`
//     width: 600px;
//     height: 600px;
// `;

export default HeroImg