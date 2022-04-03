import {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

function Navbar() {

  return (
    <Nav>
        <span className="site-title">
            <STitle to="/" >Rohit Gulam</STitle>
        </span>
        <ListItems>
            <li>
                <NavLink to="/about" >About</NavLink>
            </li>
            <li>
                <NavLink to="/blog" >Blog</NavLink>
            </li>
        </ListItems>
        <Button text="Start My Project"/>
    </Nav>
  )
}

const Nav = styled.div`
    display: flex;
    align-items: center;
    height: 12vh;
    width: 96%;
    margin: 0 auto;
`;

const STitle = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 1.8rem;
`;

const ListItems = styled.ul`
    display: flex;
    justify-content: space-evenly;
    min-width: 300px;
    font-weight: 600;
    margin: 0 auto;

    li{
        list-style: none;
        font-size: 1.2rem;
        text-transform: uppercase;
        
        a{
            color: #737d89;
            text-decoration: none;
            padding: 16px 28px;
            border-radius: 4px;
            transition: all 180ms ease-in-out; 

            :hover{
                background: #eef0f1;
                color: black;
            }

            :active{
                background: #eef0f1;
                color: black;
            }

        }
    }
`;


export default Navbar