import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

const Header = () => { 
  //pongo en uso el context
  const { user, logout} = useAuth()   
  const navigate = useNavigate()

  const handleLogout = () => { 
    const isLogout = logout()
    if (!isLogout) {
      console.log("entro al logout")
      navigate("/login")
    }
  }

  return (

      <header>
        {/* <img src="" alt="" /> */}
        <nav>
          <ul>
            { 
              user &&
              <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <button onClick={handleLogout}>Cerrar sesión</button>
              </>
          }
          {
            !user &&
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Registrarse</Link></li>
            </>
          }
          </ul>
        </nav>
      </header>
   

  )

}
export {Header}