import { Link } from "react-router-dom"
import React from "react"
import styled from 'styled-components'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActionCreators } from "../actions/actionCreator"



const SignInContent = styled.section`
box-sizing: border-box;
background-color: white;
width: 300px;
margin: 0 auto;
margin-top: 3rem;
padding: 2rem;
margin-bottom: 500px;
.sign-in-button {
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
  
.sign-in-icon {
    font-size: 5rem;
  }
  
  .input-remember {
    display: flex;
  }
  .label {
    font-weight: bold;
  }

  .input {
    padding: 5px;
    font-size: 1.2rem;
  }
  .input-error {
    color: red
  }

`






function SignUp() {

  const header = {
    'accept': 'application/json',
    "Content-Type": "application/json"
  }
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const messages = useSelector(state => state.profil.message)

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );

  const dispatch = useDispatch()

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password || !firstName || !lastName || !validEmail.test(email)) {
      return
    }

    dispatch(ActionCreators.signup(header, { email, password, firstName, lastName }))

  }



  return (
    <SignInContent>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign Up</h1>
      <form >
        <div className="input-wrapper">
          <label className="label" >Email</label><input className="input" type="mail" onChange={e => setMail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label className="label" >Password</label><input className="input" type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label className="label" >FirstName</label><input className="input" type="text" onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label className="label" >LastName</label><input className="input" type="text" onChange={e => setLastName(e.target.value)} />
        </div>
        <p>{messages}</p>

        <Link onClick={handleSignup} className="sign-in-button">Sign Up</Link>
      </form>
    </SignInContent>
  )


}




export default SignUp;
