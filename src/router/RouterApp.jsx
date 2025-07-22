import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "../views/Login"
import { Register } from "../views/Register.jsx"
import { Home } from "../views/Home.jsx"
import { Dashboard } from "../views/Dashboard.jsx"
import { NotFound } from "../views/NotFound.jsx"

const RouterApp = () => { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notfound" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export {RouterApp}