import { Link } from "react-router-dom"
import React from "react"
import styled from 'styled-components'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActionCreators } from "../actions/actionCreator"
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom"


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

  const header = {"Content-Type": "application/json"}
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false)

  const isConnected = useSelector(state => state.login.isConnected)
  const error = useSelector(state => state.login.error)


  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
        return
    }

    dispatch(ActionCreators.login(header, { email, password }, check))
    
  }


  if (isConnected) {
    return <Navigate to="/profile" />
  }



  return (
    <SignInContent>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign Up</h1>
      <form >
        <div className="input-wrapper">
          <label className="label" >Email</label><input className="input" type="mail" id="username" onChange={e => setMail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label className="label" >Password</label><input className="input" type="password" id="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label className="label" >FirstName</label><input className="input" type="mail" id="username" onChange={e => setMail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label className="label" >LastName</label><input className="input" type="mail" id="username" onChange={e => setMail(e.target.value)} />
        </div>


        <Link onClick={handleLogin} className="sign-in-button">Sign Up</Link>
      </form>
    </SignInContent>
  )


}



const mapDispatchToProps = dispatch => ({
  login: (credentials) => {
    dispatch(ActionCreators.login(credentials));
  }
});

export default connect(null, mapDispatchToProps)(SignUp);
