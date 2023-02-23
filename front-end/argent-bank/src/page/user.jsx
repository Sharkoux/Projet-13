import React from "react"
import styled from 'styled-components'
import AccountItem from "../component/account-item"


const Header = styled.div`
    color: #fff;
    margin-bottom: 2rem; 
    padding-top: 30px;  
    .edit-button {
        border-color: #00bc77;
        background-color: #00bc77;
        color: #fff;
        font-weight: bold;
        padding: 10px;
    }
`

function User() {

    const datatest = [{ title: 'Argent Bank Checking (x8349)', amount: '2,082.79' }, { title: 'Argent Bank Checking (x8349)', amount: '2,082.79' }, { title: 'Argent Bank Checking (x8349)', amount: '2,082.79' }]

    return (
        <main className="main bg-dark">
            <Header>
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </Header>

            <h2 className="sr-only">Accounts</h2>
            {datatest.map((item, index) => {
                return (
                    <AccountItem data={item} key={index} />
                )
            })}

        </main>
    )


}

export default User