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
    .input {
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
    }
    .btn-submit {
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 5px;
        margin-right: -8px;
        background: #00bc77;
        color: white;
    }
    .btn-container {
        gap: 27px;
        display: flex;
        justify-content: center;
    }
    
`

function User() {
    const [editNames, setEditName] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const datatest = [{ title: 'Argent Bank Checking (x8349)', amount: '$2,082.79' }, { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79' }, { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79' }]
    const token = useSelector(state => state.login.token);
    const check = useSelector(state => state.login.isRemember)
    const firstNames = useSelector(state => state.profil.profil.firstName)
    const lastNames = useSelector(state => state.profil.profil.lastName)
    const dispatch = useDispatch()

    if (token) {
        const header = {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        dispatch(ActionCreators.profil(header, check))

    }


    const editName = () => {
        setEditName(prevState => !prevState)
    }


    const handleUpdateProfil = (e) => {
        e.preventDefault();
        if (!firstName || !lastName) {
            return
        }

        const header = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        dispatch(ActionCreators.update(header, { firstName, lastName }, check))

    }

    return (
        <main className="main bg-dark">
            {!editNames ?
                <Header>
                    <h1>Welcome back<br />{firstNames} {lastNames}!</h1>
                    <button className="edit-button" onClick={editName}>Edit Name</button>
                </Header>
                :
                <Header>
                    <h1>Welcome back<br /></h1>
                    <div>
                        <input type="text" className="input" required onChange={e => setFirstName(e.target.value)} placeholder="Tony" />
                        <input type="text" className="input" required onChange={e => setFirstName(e.target.value)} placeholder="Jarvis" />
                    </div>
                    <div className="btn-container">
                        <button className="btn-submit" onClick={handleUpdateProfil}>Save</button>
                        <button className="btn-submit" onClick={editName}>Cancel</button>
                    </div>
                </Header>
            }

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






