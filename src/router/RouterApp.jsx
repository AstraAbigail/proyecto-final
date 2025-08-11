import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "../views/Login"
import { Register } from "../views/Register.jsx"
import { Home } from "../views/Home.jsx"
import { Dashboard } from "../views/Dashboard.jsx"
import { NotFound } from "../views/NotFound.jsx"
import { PrivateRoute } from "../components/PrivateRoute.jsx"
import { Nosotros} from "../views/Nosotros.jsx"

const RouterApp = () => { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        {/* "* toda pagina que no conozca, redirije a NF */}
        <Route path="*" element={<NotFound />} />
         <Route path="/nosotros" element={<Nosotros/>} />
      </Routes>
    </BrowserRouter>
  )
  
}

export {RouterApp}