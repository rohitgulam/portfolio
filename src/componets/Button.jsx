import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Button({ text }) {
  return (
    <Btn to='/'>{text}</Btn>
  )
}

const Btn = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  padding: 18px 36px;
  border-radius: 4px;
  background: #faa338;
  transition: background-color 200ms ease-in-out;

  :hover{
    background: #FAAB4B;
  }
   
`;

export default Button