import React from 'react';
import styled from 'styled-components';
import {CgQuoteO} from 'react-icons/cg'

function Testimonial() {
  return (
    <Div>
        <div className="container">
            <h2>Kind Words From My Clients</h2>
            <div className="card">
                <div className="card-item">
                    <CgQuoteO/>
                    <p className='quote' > "Rohit listened and took everything I discussed into consideration, then made it exactly as I had pictured it and beyond. It looks amazing! <span className="highlight">The most important thing for me was for the person I hired to be highly accessible and responsive within a short period of time, which he was.</span> He was very reasonably available, with a quick response, and willingness to answer all my questions regardless of how inexperienced I was. He was on top of the deadlines, very fast, and was just such a gem to work with."</p>
                    <h4> - Hannah B</h4>
                </div>
            </div>
        </div>
    </Div>
  )
}

const Div = styled.div`
    margin: 60px 0;

    .container{
        width: 50%;
        margin: 20px auto;
    }

    .card-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    svg{
        color: #faa338;  
        font-size: 2rem;
    }

    .quote{
        word-spacing: 3px;
        line-height: 1.5;
    }

    .highlight{
        background-color: #faa33860;
    }

    h4{
        margin-top: 10px;
        color: #24305e;
    }
`;

export default Testimonial