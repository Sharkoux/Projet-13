import { Link } from "react-router-dom"
import React from "react"
import styled from 'styled-components'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActionCreators } from "../actions/actionCreator"
import { connect } from 'react-redux';


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

`






function Login() {

  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const { isConnected } = useSelector(state => state.isConnected)

  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(ActionCreators.login({email, password}))
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <SignInContent>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form >
        <div className="input-wrapper">
          <label className="label" >Username</label><input className="input" type="text" id="username" onChange={e => setMail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label className="label" >Password</label><input className="input" type="password" id="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="input-remember">
          <input className="input" type="checkbox" id="remember-me" /><label className="label" >Remember me</label>
        </div>

        <Link onClick={handleLogin} className="sign-in-button">Sign In</Link>
      </form>
    </SignInContent>
  )


}



const mapDispatchToProps = dispatch => ({
  login: (credentials) => {
    dispatch(ActionCreators.login(credentials));
  }
});

export default connect(null, mapDispatchToProps)(Login);
