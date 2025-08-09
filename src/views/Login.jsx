import { Layout } from "../components/Layout.jsx"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { userAuth } from "../context/UserContext.jsx"
import { useNavigate } from "react-router-dom"
// import "../styles/views/Login.css" 
import "../styles/Fonts.css"
import "../styles/Forms.css"


const Login = () => {
  
  const { login } = userAuth()

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
      setSuccess("...ingresando");
      //limpio los input, volviendolos a su valor por defecto.
      reset()

      setTimeout(() => {
        //redirijo automaticamente al Home
        navigate("/") 
      }, 3000); 
      
    }
    
    
  
  }

  return (    
    <>      
      <Layout>
        <section className="section-form-layout">        
          <form className="section-form" onSubmit={handleSubmit(isSubmit)}>
              <h3>Iniciar Sesion</h3>
              <div className="div-inputs">
                <input
                  type="text"
                  placeholder="Usuario"
                  {...register("username",
                    { required: {
                        value: true,
                        message: "*Este campo es requerido"
                    },
                      minLength: {
                        value: 4,
                        message:"Debe tener 4 carácteres como mínimo."
                      },
                      pattern: {
                        //al menos minuscula, numero,caracter especial, esten todos los anteriores
                        // value:/^(?=.*[a-z])(?=.*\d)(?=.*[_\-@%$])[a-z\d_\-@%$]+$/,
                        value:/^[a-z]+$/,
                        message:"Debe contener al 4 letras minusculas"
                      }                  
                    }
                  )}
                />
              </div>
            {/* <p style={{color:"white"}}>{errors.username?.message}</p> */}
            <p className="message-user">{errors.username?.message}</p> 
            <div className="div-inputs">
              <input
                type="password"
                placeholder="Password"             
                {...register("password",
                  {
                    required: {
                      value: true,
                      message: "*Este campo es requerido"
                    },
                    minLength: {
                      value: 6,
                      message:"Debe contener 6 caracteres minimo"
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
            <p className="message-user">{errors.password?.message}</p>
            <button className="div-button">Ingresar</button>
            {success && <p className="message-user">{success}</p>} 
          </form>     
        </section>
      </Layout>
    </>
  )
}


export {Login }