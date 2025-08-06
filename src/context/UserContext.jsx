//se usa para tema - usuario - productos- carrito -


import { createContext, useContext, useState } from "react"


const UserContext = createContext()
//Generamos un Proveedor, que contiene todo funciones, estados, herramintas.Contiene todo lo que le vamos a dar acceso a nivel APP
//¿que van hacer? lo dice el values 

const UserProvider = (props) => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser(true)
  }

  const logout = () => {
    setUser(null)
  }
  //props.children es para englobar toda la app con este proveedor.
  return (
  <UserContext.Provider value = {{ login, logout, user }
}>
    {props.children}
    
    </UserContext.Provider>


  )
}

//Custom Hook
const useAuth = () => useContext(UserContext)

export {UserProvider,useAuth }