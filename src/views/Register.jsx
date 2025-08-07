
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Layout } from "../components/Layout"


const Register = () => {
  /*Estados*/
  /*const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  */
  const [success, setSuccess] = useState("")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  

  /*evento del form*/
  /*
  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    //Validacion de datos

    if (!user || !email || !password) {
      setError("Debes completar todos los campos")
      return
    }
    //Guardo los datos
    const newUser = {
      username,
      email,
      password
    }

    console.log(newUser)
    //Mensaje de exito
    setSuccess("Usuario registrado con éxito")

    //Limpio estados
    setUser("")
    setEmail("")
    setPassword("")
  }
  */
  //const isSubmit = (data) => console.log(data) video 
  
  const isSubmit = (data) => {
    //Limpio el mensaje de Exito
    //setSuccess("")

    //Guardo los datos
    const newUser = {
      username:data.username,
      email:data.email,
      password:data.password
    }
    console.log(newUser, ("<- Nuevo Usuario"))
    //Mesnaje de exito
    setSuccess("Usuario registrado con éxito")

    //limpio los input, volviendolos a su valor por defecto.
    reset()
    //delay
    /*setTimeout(() => {
      setSuccess("")
    }, 5000); // 5000 ms = 5 segundos
    */    
  }
  return (
    <Layout>
      <h1>Formulario de registro</h1>
      <section>
        
        <form onSubmit={handleSubmit(isSubmit)}>
          <div>
            {/*
            <input
              type="text"
              placeholder="Usuario"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            */}
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
          <p>{errors.username?.message}</p>
          <div>
            {/*<input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />*/}
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
          <p>{errors.email?.message}</p>
          <div>
            {/*<input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />*/}
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
                  // pattern: {
                  //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                  //   message: "Debe contener: 1 Carácter especial - Minúsculas - Números - 1 Mayúscula - 8 Carácteres",
                  // }
                }
              )}
            />
          </div>
          <p>{errors.password?.message}</p>
          <button>Ingresar</button>
        </form>
        
        {/*{error && <p style={{ color: "red" }}>{error}</p>}*/}
        {success && <p style={{ color: "green" }}>{success}</p>}      
      </section>
    </Layout>
   
  )

}

export {Register }