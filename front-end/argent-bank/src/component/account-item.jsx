
import React from "react"
import styled from 'styled-components'

// rules css (styled-component)
const AccountSection = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid black;
background-color: #fff;
width: 80%;
margin: 0 auto;
flex-direction: column;
padding: 1.5rem;
box-sizing: border-box;
text-align: left;
margin-bottom: 2rem;
    
.account-amount {
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
  }
  
  .account-amount-description {
    margin: 0;
  }
  
  .account-title {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
  }
  
  .account-content-wrapper {
    width: 100%;
    flex: 1;
  }
  .transaction-button {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
  }
  @media (min-width: 720px) {
    flex-direction: row;

    .account-content-wrapper.cta {
      flex: 0;
    }
  
    .transaction-button {
      width: 200px;
    }
  }
`



// Simple component to format user information

function AccountItem({ data }) {


  return (
    <AccountSection>
      <div className="account-content-wrapper">
        <h3 className="account-title">{data.title}</h3>
        <p className="account-amount">{data.amount}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </AccountSection>
  )
}

export default AccountItem