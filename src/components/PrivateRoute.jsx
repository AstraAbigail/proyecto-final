import { Navigate } from "react-router-dom"
import { userAuth } from "../context/UserContext"
const PrivateRoute = ({ children}) => {

  const { user } = userAuth()
  if (!user) { 
    return <Navigate to="/login" replace></Navigate>
  }

  return children

}

export { PrivateRoute}