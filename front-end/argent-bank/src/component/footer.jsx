
import React from "react"
import styled from 'styled-components'


// rules css (styled-component)
const Footers = styled.footer`
  .footer {
    display: flex;
    justify-content: center;
    border-top: 2px solid #ccc;
    
  }

  .footer-text {
    margin: 0;
    padding: 35px;
    font-weight: bold
  }
`


// Component Footer
function Footer() {


  return (
    <Footers className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </Footers>
  )
}

export default Footer