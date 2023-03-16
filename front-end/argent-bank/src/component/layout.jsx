import Nav from './nav'
import Footer from './footer'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

// global rules css (styled-component)
const GlobalStyle = createGlobalStyle`
html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .main {
    flex: 1;
    height: 100vh;
  }
  
  .bg-dark {
    background-color: #12002b;
  }
  
  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
  }
`

/**
 * Uses the layout so that the Nav and the footer are present on all pages
 * @param { ReactElement } children
 * @return { ReactElement }
 */


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Nav />
      <main>
        {children}
        <Outlet />{' '}
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
