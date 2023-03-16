
import React from "react"
import styled from 'styled-components'

//rules css (styled-component)
const FeatureItems = styled.div`
    flex: 1;
    padding: 2.5rem;
    .feature-icon {
        width: 100px;
        border: 10px solid #00bc77;
        border-radius: 50%;
        padding: 1rem;
      }
      .feature-item-title {
        color: #222;
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      
`



function FeatureItem({ data }) {


    return (
        <FeatureItems>
            <img
                src={data.src}
                alt="Chat Icon"
                className="feature-icon"
            />
            <h3 className="feature-item-title">{data.title}</h3>
            <p>
                {data.content}
            </p>
        </FeatureItems>
    )
}

export default FeatureItem