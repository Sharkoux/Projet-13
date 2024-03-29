// Import component and hook
import { Link } from "react-router-dom"
import React from "react"
import styled from 'styled-components'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActionCreators } from "../actions/actionCreator"
import { Navigate } from "react-router-dom"

// Rules css (styled-component) 
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





/**
 * Page signup with Form, and action redux for call service API 
 * @return { ReactElement }
 */



function SignUp() {
  //init header data
  const header = {
    'accept': 'application/json',
    "Content-Type": "application/json"
  }
  // init state for email, password, firstname, lastname
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // call data from store
  const error = useSelector(state => state.profil.error)
  const preprofil = useSelector(state => state.profil.newUser)

  let messages;

  // Regex for valid email format
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );

  const dispatch = useDispatch()

  // Fonction for signup
  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password || !firstName || !lastName || !validEmail.test(email)) {
      return
    }
     // Use action Redux for signup
    dispatch(ActionCreators.signup(header, { email, password, firstName, lastName }))
   
  }
  // if error return msg 
  if(error) {
    messages = "Error: Wrong Email (Or already used). "
  }
  //if success and preprofil state exist, go to login page
  if(!error && preprofil) {
      return <Navigate to="/login" />
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
