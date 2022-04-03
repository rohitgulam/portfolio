import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Button({ text }) {
  return (
    <Btn to='/'>{text}</Btn>
  )
}

const Btn = styled(Link)`
  display: inline-block;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  padding: 18px 36px;
  border-radius: 4px;
  background: #faa338;
  position: relative;
  z-index: 1;


  :after{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    left: 0;
    top: 0;
    z-index: -1;
    transition: transform 200ms ease-in-out;
    transform: scaleX(0);
    transform-origin: right;
  }

  :hover:after{
    transform: scaleX(1);
    transform-origin: left;
  }
   
`;

export default Button