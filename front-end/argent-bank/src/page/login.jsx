import { Link } from "react-router-dom"
import React from "react"
import styled from 'styled-components'
import { useState } from "react"



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

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SignInContent>
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label className="label" for="username">Username</label><input className="input" type="text" id="username" onChange={e => setUserName(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label className="label" for="password">Password</label><input className="input" type="password" id="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="input-remember">
                    <input className="input" type="checkbox" id="remember-me" /><label className="label" for="remember-me">Remember me</label>
                </div>

                <Link to="/user" className="sign-in-button">Sign In</Link>
            </form>
        </SignInContent>
    )


}

export default Login