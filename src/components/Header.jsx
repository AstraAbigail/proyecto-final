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
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                {
                  user &&
                  <>           
                    <li className="nav-item">
                      <Link className="nav-link active"  aria-current="page" to="/">Home</Link>                 
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/dashboard">Dashboard</Link>                  
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/nosotros">Nosotros</Link>
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
                      <li className="nav-item">
                        <Link className="nav-link" to="/nosotros">Nosotros</Link>
                      </li>                  
                    </>
                }  
               
            </ul>
          </div>
        </div>
      </nav>

        
        
        
      
    </header>
   

  )

}
export {Header}