//se usa para tema - usuario - productos- carrito -


import { createContext, useContext, useState } from "react"


const UserContext = createContext()
//Generamos un Proveedor, que contiene todo funciones, estados, herramintas.Contiene todo lo que le vamos a dar acceso a nivel APP
//¿que van hacer? lo dice el values 

const UserProvider = (props) => {

  const [user, setUser] = useState(null)

  
  
  const login = async (username, password) => {
    
    const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      })

      if (response.ok) {
        const token = await response.json()
        setUser(true)
        return token
      } else { 
        return false
      }  
  }

  const logout = () => {
    return setUser(null)    
  }

  const registerUser = () => {
    console.log("antes del set User", {user})
    setUser(true)
    console.log("desde el RegisterUser", { user })
    return
    
  }  

  //props.children es para englobar toda la app con este proveedor.
  
  return (
    <UserContext.Provider value = {{ login, logout, registerUser, user,}}>
        {props.children}      
    </UserContext.Provider>
  )

}

//Custom Hook
const userAuth = () => useContext(UserContext)



export {UserProvider,userAuth }