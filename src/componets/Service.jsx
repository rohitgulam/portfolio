import React from 'react';
import styled from 'styled-components';

function Service() {
  return (
    <Div>
        <div className='container'> 
            <h2>What Can An Expert Freelance WordPress Developer Do For You?</h2>
            <div className="text-group">
                <p>Here’s what I can do for your business:</p>
                <ul>
                    <li>Design a modern website that will establish your online presence in your industry and get you more customers.</li>
                    <li>Redesign your current website to a modern, responsive design that will catch the eye of your customers.</li>
                    <li>SEO optimize your website to rank better in google search results.</li>
                    <li>Improve your WordPress site speed to rank better in search results.</li>
                    <li>Generate more leads for your business to get more customers</li>
                    <li>Get more customers through marketing and sales.</li>
                </ul>
                <p>If any of these appeal to you, you're in the right place. Schedule a free consultation call to discuss more!</p>
            </div>
        </div>
    </Div>
  )
}

const Div = styled.div`

    .container{
        width: 50%;
        margin: 0 auto;
    }

    .text-group{
        padding-top: 30px;
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

    h2{
        font-size: 2.4rem;
    }
`;

export default Service