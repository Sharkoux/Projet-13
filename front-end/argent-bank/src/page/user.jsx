import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from 'styled-components'
import { ActionCreators } from "../actions/actionCreator"
import AccountItem from "../component/account-item"
import { useState } from "react"

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
    const [modal, setModal] = useState(false)
    const datatest = [{ title: 'Argent Bank Checking (x8349)', amount: '2,082.79' }, { title: 'Argent Bank Checking (x8349)', amount: '2,082.79' }, { title: 'Argent Bank Checking (x8349)', amount: '2,082.79' }]
    const token = useSelector(state => state.login.token);
    const firstName = useSelector(state => state.profil.profil.firstName)
    const lastName = useSelector(state => state.profil.profil.lastName)
    const dispatch = useDispatch()


    if (token) {
        const header = {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        dispatch(ActionCreators.profil(header))

    }


    const EditModal = async () => {
        setModal(true)
    }


    return (
        <main className="main bg-dark">
            <Header>
                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                <button className="edit-button" onClick={EditModal}>Edit Name</button>
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



export default User;






