import React from 'react';
import styled from 'styled-components';
import {FiTwitter} from 'react-icons/fi'

function Footer() {
  return (
    <Div>
        <div className='container'>
            <div className="about">
                <h3>Rohit Gulam</h3>
                <p>Freelance WordPress developer creating WordPress solutions for businesses serious about growth</p>
                <a href="https://twitter.com/RohitGulam"> <FiTwitter/> </a>
            </div>
            <div className="links">
                <h3>Links</h3>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
    </Div>
  )
}

const Div = styled.div`
     /* background: rgb(2,1,23);
    background: linear-gradient(115deg, rgba(2,1,23,1) 0%, rgba(7,7,103,1) 44%, rgba(0,170,255,1) 100%);  */
    background-color: #24305e;
    color: #fff;
    padding: 20px;

    .container{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3{
        font-size: 1.4rem;
    }

    .about{
        width: 400px;
    }

    .about * {
        margin: 6px 0;
    }

    

    svg{
        color: #fff;
        font-size: 2rem;
        border: 1px solid #fff;
        padding: 4px;
        transition: transform 200ms ease;
    }

    svg:hover{
        transform: translateY(-4px);
    }

    .links{
        text-align: right;

        ul li{
            list-style: none;
            padding: 4px 0;
        }

    }
`;

export default Footer