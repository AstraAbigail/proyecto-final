import { Layout } from "../components/Layout.jsx"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "../context/UserContext.jsx"

const Login = () => {
  const { login} = useAuth()

  const [success, setSuccess] = useState("")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    //valores por defecto de los input
    defaultValues: {
      email: (""),
      password: ("")
    }
  })

  
  const isSubmit = (data) => {
    
    login()
       
    console.log(data, ("<- Usuario"))
    //Mesnaje de exito
    setSuccess("Ingresando...")

    //limpio los input, volviendolos a su valor por defecto.
    reset()
  
  }

  return (    
    <>      
      <Layout>
        <section>        
          <form onSubmit={handleSubmit(isSubmit)}>
            <div>
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
              <input
                type="password"
                placeholder="Contraseña"             
                {...register("password",
                  {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                      message: "Debe contener: 1 Carácter especial - Minúsculas - Números - 1 Mayúscula - 8 Carácteres",
                    }
                  }
                )}
              />
            </div>
            <p>{errors.password?.message}</p>
            <button>Ingresar</button>
          </form>            
          {success && <p style={{ color: "green" }}>{success}</p>}      
        </section>
      </Layout>
      
    </>
  )


}


export {Login }