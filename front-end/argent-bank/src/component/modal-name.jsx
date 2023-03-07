import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { ActionCreators } from '../actions/actionCreator'
import { useSelector } from 'react-redux'

const Modal = styled.div`
    position: fixed;
    width: 420px;
    height: 420px;
    background-color: #2c3e50;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 15%;
    left: 40%;
    .btn-submit {
        border-color: #00bc77;
        background-color: #00bc77;
        color: #fff;
        font-weight: bold;
        padding: 10px;
        cursor: pointer;
    }
    .close {
        background: #00bc77;
        border-radius: 50%;
        padding: 0px 4px 0px 4px;
        position: relative;
        border: 1px solid;
        bottom: 75px;
        left: 205px;
        cursor: pointer;
    }
    .input {
        padding: 5px;
        font-size: 1.2rem;
    }
`



function ModalEdit({ closeModal }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const token = useSelector(state => state.login.token);
    const check = useSelector(state => state.login.isRemember)
    const dispatch = useDispatch()


    const handleCloseModal = () => {
        closeModal()
    };

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
        closeModal()
    }

    return (

        <Modal>
            <span className="close" onClick={handleCloseModal} >&times;</span>
            <form className="form2">
                <h2>Firstname</h2>
                <input type="text" className="input" required onChange={e => setFirstName(e.target.value)} />
                <p className="error"></p>
                <h2>Lastname</h2>
                <input type="text" className="input" required onChange={e => setLastName(e.target.value)} />
                <p className="error"></p>
            </form>
            <button className="btn-submit" onClick={handleUpdateProfil}>Edit</button>
        </Modal>


    )
}

export default ModalEdit