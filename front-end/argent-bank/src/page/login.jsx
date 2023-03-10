import { Link } from "react-router-dom"
import React from "react"
import styled from 'styled-components'
import { useState, useEffect } from "react"
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
  .signUpbtn {
    text-decoration: underline;
    padding-left: 15px;
    color: black;
  }

`






function Login() {

  const header = { "Content-Type": "application/json" }
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false)

  const isConnected = useSelector(state => state.login.isConnected)
  const error = useSelector(state => state.login.error)
  const asProfil = useSelector(state => state.profil.newUser)

  const dispatch = useDispatch()

  
  useEffect(() => {
    if (asProfil) {
      setMail(asProfil);
    }
  }, [asProfil]);




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
      <h1>Sign In</h1>
      <form >
        <div className="input-wrapper">
          <label className="label" >Username</label><input className="input" type="mail" value={email} onChange={e => setMail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label className="label" >Password</label><input className="input" type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="input-remember">
          <input className="input" type="checkbox" onChange={e => setCheck(e.target.checked)} /><label className="label" >Remember me</label>
        </div>
        <Link className="signUpbtn" to={'/signup'}>SignUp</Link>
        {error ? <p className="input-error">Please enter a valid account.</p> : ''}


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
