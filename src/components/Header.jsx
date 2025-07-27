import { Link } from "react-router-dom"

const Header = () => { 
  return (

      <header>
        {/* <img src="" alt="" /> */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <button>Cerrar sesión</button>
          </ul>
        </nav>
      </header>
   

  )

}
export {Header}