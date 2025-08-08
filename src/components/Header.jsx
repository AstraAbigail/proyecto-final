import { Link } from "react-router-dom"
import { useState } from "react"
import { userAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import "../styles/components/Header.css" 
import logo from "../assets/logo-sadartsa.png"



const Header = () => { 
  //pongo en uso el context
  const { user, logout} = userAuth()   
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
      <img src={logo} alt="logo de Sadartsa" />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {
                  user &&
                  <>           
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home<span class="sr-only"></span></Link>                 
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/dashboard">Dashboard</Link>                  
                    </li>
                    <button className="nav-link" onClick={handleLogout}>Cerrar sesión</button>              
                  </>
                }
                {
                  !user &&
                    <>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/login">Ingresar</Link>              
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/register">Registrarse</Link>
                      </li>                    
                    </>
                }              
              </ul>
            </div>
      </nav>
          {/* <nav>
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
          </nav> */}
    </header>
   

  )

}
export {Header}