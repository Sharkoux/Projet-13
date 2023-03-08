import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from 'styled-components'
import { ActionCreators } from "../actions/actionCreator"
import AccountItem from "../component/account-item"
import { useState } from "react"
import EditName from "../component/editName"




function User() {
    const datatest = [{ title: 'Argent Bank Checking (x8349)', amount: '$2,082.79' }, { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79' }, { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79' }]
    const token = useSelector(state => state.login.token);
    const check = useSelector(state => state.login.isRemember)
    
    const dispatch = useDispatch()

    if (token) {
        const header = {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        dispatch(ActionCreators.profil(header, check))

    }


    return (
        <main className="main bg-dark">
            <EditName />
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






