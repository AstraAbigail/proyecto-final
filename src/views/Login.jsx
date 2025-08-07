import { Layout } from "../components/Layout.jsx"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "../context/UserContext.jsx"
import { useNavigate } from "react-router-dom"

const Login = () => {
  
  const { login } = useAuth()

  const [success, setSuccess] = useState("")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    //valores por defecto de los input
    defaultValues: {
      username: "",
      password: ""
    }
  })

  const navigate = useNavigate()
  
  const isSubmit = async (data) => {
    
    const isLogin = await login(data.username,data.password)       
   

    if (isLogin) {
      console.log(data, ("<- Usuario"))
      //Mesnaje de exito
      setSuccess("Ingresando...")
      //limpio los input, volviendolos a su valor por defecto.
      reset()
      //redirijo automaticamente al Home
      navigate("/")
    }
    
    
  
  }

  return (    
    <>      
      <Layout>
        <section>        
          <form onSubmit={handleSubmit(isSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Usuario"
                {...register("username",
                  { required: {
                      value: true,
                      message: "Este campo es requerido"
                  },
                    minLength: {
                      value: 4,
                      message:"Debe tener 4 carácteres como mínimo."
                    },
                    pattern:{
                      value:/^[a-z0-9]/,
                      message:"Debe contener  letras y números"
                    }                  
                  }
                )}
              />
            </div>
            <p>{errors.email?.message}</p>
            <div>
              <input
                type="password"
                placeholder="Password"             
                {...register("password",
                  {
                    required: {
                      value: true,
                      message: "Este campo es requerido"
                    }
                    // },
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
          {success && <p style={{ color: "green" }}>{success}</p>}      
        </section>
      </Layout>
      
    </>
  )


}


export {Login }