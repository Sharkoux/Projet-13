// import component and hook
import { NavLink } from "react-router-dom"
import React from "react"
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { ActionCreators } from "../actions/actionCreator"

// Rules css (styled-component)
const MainNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    .a {
        font-weight: bold;
        color: #2c3e50; 
    }
    .router-link-exact-active {
        color: #42b983;
    }
    .main-nav-item {
        text-decoration: none;
        margin-right: 0.5rem;
      }
      
      .main-nav-item:hover {
        text-decoration: underline;
      }
      
      .main-nav-logo {
        display: flex;
        align-items: center;
      }
      
      .main-nav-logo-image {
        max-width: 100%;
        width: 200px;
      }
      .fa {
        padding-right: 7px;
      }
`

/**
 * Composent Navigation
 * @return { ReactElement }
 */

function Nav() {
    const dispatch = useDispatch()
    // Retrieve state isConnected from store
    const isConnected = useSelector(state => state.login.isConnected)
    // Retrieve profil from localstorage
    const data = localStorage.getItem("profil");
    // Retrieve firstName from store
    let firstName = useSelector(state => state.profil.profil.firstName)

    // if data from localsorage exist
    if(data) {
        firstName = JSON.parse(data).firstName
    }


    //Fonction for logout 
    const handleLogout = () => {
        // Use action Redux for logout
        dispatch(ActionCreators.logout())
    }

    return (
        <MainNav className="main-nav">
            <NavLink className="a main-nav-logo" to='/'>
                <img
                    className="main-nav-logo-image"
                    src="/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {isConnected ? <div>
                <NavLink className="a main-nav-item" to='/profile'>
                    <i className="fa fa-user-circle"></i>
                    {firstName}
                </NavLink>
                <NavLink className="a main-nav-item" onClick={handleLogout}>
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </NavLink>
            </div>
                : <div>
                    <NavLink className="a main-nav-item" to='/login'>
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            }

        </MainNav>
    )
}

export default Nav