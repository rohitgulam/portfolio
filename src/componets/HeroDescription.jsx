import React from 'react';
import styled from 'styled-components';
import Button from './Button';

function HeroDescription() {
  return (
    <Div>
        <h1>Are you looking for a freelance WordPress developer to help grow your business?</h1>
        <div>
        <p>Does this sound familiar?</p>
        <ul>
            <li>You need a website built but you haven't found an expert and reliable freelance WordPress developer to work with.</li>
            <li>The previous freelance WordPress developer you hired left some unfinished work.</li>
            <li>Your website is outdated, takes a lot of time to load and you need someone to upgrade it.</li>
        </ul>
        </div>
        <Button text="Hire Me Now"/>
    </Div>
  )
}

const Div =  styled.div`
    width: 60%;

    h1{
        text-transform: capitalize;
        font-size: 2.5rem;
    }

    div{
        padding: 50px 0;
        font-size: 1.3rem;
        color: #66717e;

        ul{
            li{
                padding: 5px 0;
            }
        }

        p{
            padding: 10px 0;
        }
    }
`;

export default HeroDescription