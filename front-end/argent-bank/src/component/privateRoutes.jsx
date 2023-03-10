import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children}) => {
    const isConnected = useSelector(state => state.login.isConnected)
        
    if (isConnected ) {
      return children
    }
      
    return <Navigate to="/" />
  }