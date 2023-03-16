
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

// Component Private route
export const PrivateRoute = ({ children}) => {
    // Retrieve state isConnected from store
    const isConnected = useSelector(state => state.login.isConnected)
    
    //if isConnected, route for children path
    if (isConnected ) {
      return children
    }
    //if not  connected, return '/'
    return <Navigate to="/" />
  }