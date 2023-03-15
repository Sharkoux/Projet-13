// Import component, hook
import React from "react"
import styled from 'styled-components'
import FeatureItem from "../component/feature-item"

// Rules css (styled-component) 
const Hero = styled.div`
    background-image: url('/bank-tree.jpeg');
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;
    .hero-content {
        position: relative;
        top: 2rem;
        width: 200px;
        background: white;
        padding: 2rem;
        text-align: left;
        margin: 0 auto;
      }
      
    .subtitle {
        font-weight: bold;
        font-size: 1rem;
        margin: 0;
      }
    .text {
        margin-bottom: 0;
        font-size: 0.9rem;
    }
    @media (min-width: 920px) {
          height: 400px;
          background-position: 0% 33%;
      
        .hero-content {
          position: absolute;
          top: 50px;
          right: 50px;
          width: 300px;
          margin: 2rem;
        }
      
        .subtitle {
          font-size: 1.5rem;
        }
      
        .text {
          font-size: 1.2rem;
        }
      }
      

`

const Features = styled.section`

    display: flex;
    flex-direction: column;
      margin-bottom: 100px;
  
  @media (min-width: 920px) {
  
      flex-direction: row;
    
  }
`

/**
 * First Page Home 
 * @return { ReactElement }
 */

function Home() {

    // Array data for features map
    const featureData = [{
        src: '/icon-chat.png', title: 'You are our #1 priority',
        content: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
    },
    { src: '/icon-money.png', title: 'More savings means higher rates', content: ' The more you save with us, the higher your interest rate will be!' },
    {
        src: '/icon-security.png', title: 'Security you can trust',
        content: ' We use top of the line encryption to make sure your data and moneyis always safe.'
    }
    ]

    // Return Page Home component with first Section and generate Features presentation
    return (
        <div>
            <Hero>
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </Hero>
            <Features>
                {featureData.map((item, index) => {
                    return (
                        <FeatureItem data={item} key={index} />
                    )

                })}
            </Features>
        </div>
    )


}

export default Home