import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/UserContext"

const Header = () => { 
  //pongo en uso el context
  const { user} = useAuth()   
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
                <button>Cerrar sesión</button>
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