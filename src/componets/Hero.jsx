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
    margin: 0px auto;
    padding: 0;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70vh;
`;

export default Hero