import React from 'react';
import styled from 'styled-components';
import HeroDescription from './HeroDescription';
import HeroImg from './HeroImg';

function Hero() {
  return (
    <Div>
        <HeroDescription/>
        <HeroImg/>
    </Div>
  )
}

const Div = styled.div`
    margin: 50px 80px;
    display: flex;
    // align-items: center;
    justify-content: space-between;
    /* height: 88vh; */
`;

export default Hero