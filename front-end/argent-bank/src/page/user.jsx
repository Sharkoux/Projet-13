// Import component and hook
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { ActionCreators } from "../actions/actionCreator"
import AccountItem from "../component/account-item"
import EditName from "../component/editName"





/**
 * Call profil from API and return User page
 * @return { ReactElement }
 */


function User() {
    //init fake data 
    const datatest = [{ title: 'Argent Bank Checking (x8349)', amount: '$2,082.79' }, { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79' }, { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79' }]
    // call data from store
    const token = useSelector(state => state.login.token);
    const check = useSelector(state => state.login.isRemember)

    const dispatch = useDispatch()

    // Use token access for load profil from backend
    if (token) {
        //init header
        const header = {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        //use action redux for load profil
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






