
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Layout } from "../components/Layout"
import { userAuth } from "../context/UserContext.jsx"
import { useNavigate } from "react-router-dom"

const Register = () => {


  /*Estados*/
  /*const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  */
  
  const { registerUser, user } = userAuth()

  const [success, setSuccess] = useState("")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  
  const navigate = useNavigate()

  console.log("Register Principio", {user})

  const isSubmit = (data) => {
    
    console.log(registerUser())
    const isRegisterUser = registerUser()
    console.log(isRegisterUser)

    //deberia en una situacion real consultar que el registro no exista ya en la base de datos 
  
    //Guardo los datos
    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password
    }
    console.log(newUser, ("<- Nuevo Usuario"))
    
    if (isRegisterUser){
      setSuccess("Usuario registrado con éxito")
       //limpio los input, volviendolos a su valor por defecto.
      reset()
      navigate("/")       
    }   
  }

  return (
    <Layout>      
      <section className="section-form-layout">        
        <form  className="section-form"  onSubmit={handleSubmit(isSubmit)}>
          <h3>Registrarse</h3>
          <div  className="div-inputs">          
            <input
              type="text"
              placeholder="Usuario"
              {...register("username",
                {
                  required:
                  {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  minLength:
                  {
                    value: 8,
                    message: "Mínimo de 8 carácteres",
                  }
                }
              )}
            />
          </div>
          <p className="message-user">{errors.username?.message}</p>
          <div  className="div-inputs">           
            <input
              type="email"
              placeholder= "Correo"
              {...register("email",
                { required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  pattern:{
                    value:/^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com(\.ar)?|yahoo\.com(\.ar)?)$/,
                    message:"Dominios admitidos:@hotmail.com / @hotmail.com.ar / @gmail.com / @yahoo.com / @yahoo.com.ar",
                  }                  
                }
              )}
            />
          </div>
          <p className="message-user">{errors.email?.message}</p>
          <div  className="div-inputs">            
            <input
              type="password"
              placeholder="Contraseña"             
              {...register("password",
                {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                   minLength: {
                      value: 6,
                      message:"Debe contener 6 caracteres minimo"
                  }                   
                }
              )}
            />
          </div>
          <p className="message-user">{errors.password?.message}</p>
          <button className="div-button">Ingresar</button>
        </form>
      
        {success && <p className="message-user">{success}</p>}      
      </section>
    </Layout>   
  )

}

export {Register}