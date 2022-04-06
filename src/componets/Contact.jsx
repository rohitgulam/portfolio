import React from 'react';
import styled from 'styled-components';
import Button from './Button';

function contact() {
  return (
    <Div>
      <div>
        <h2>Get in Touch</h2>
        <p>You can reach out to me via the contact form if you have any questions. <br />
        If you would like to talk about how I can help your business by building a website for you, set up a time to chat below! </p>
        <Button text='Setup a call now'/>
      </div>
    </Div>
  )
}

const Div = styled.div`
  margin: 60px 0;
  div{
    width: 50%;
    margin: 0 auto ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default contact