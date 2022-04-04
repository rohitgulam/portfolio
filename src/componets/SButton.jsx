import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function SButton({ text }) {
  return (
    <Btn to='/'>{text}</Btn>
  )
}

const Btn = styled(Link)`
  display: inline-block;
  color: #023047;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  padding: 18px 36px;
  border-radius: 4px;
  border: 1px solid #023047;
  background: transparent;
  position: relative;
  z-index: 1;


  :after{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: #023047;
    left: 0;
    top: 0;
    z-index: -1;
    transition: transform 250ms ease-in-out;
    transform: scale(0);
    transform-origin: center center;
  }

  :hover{
      color: white;
  }

  :hover:after{
    transform: scale(1);
    
  }
   
`;

export default SButton