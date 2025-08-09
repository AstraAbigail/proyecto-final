import { useState } from "react"
import { Layout } from "../components/Layout"
import { useForm } from "react-hook-form"


const Dashboard = () => {
  const [name, setName] = useState("")
  const [success, setSuccess] = useState("")
  // const [price, setPrice] = useState()
  // const [description, setDescription] = useState()
  //const [selectedImage, setSelectedImage] = useState("https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg")
  const [product, setProduct] = useState(null)
  const [fileUrl,setFileUrl] = useState("https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  
  const saveFileImage = event => { 
    const imageFile = event.target.files[0]
    if (imageFile) {
      const imageURL = URL.createObjectURL(imageFile)
      setFileUrl(imageURL)
    } else { 
      setFileUrl("https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg")
    }
  }

  const isSubmit =  async (e) => {
    //e.preventDefault()

    const newProduct = {
      id: crypto.randomUUID(),
      title: e.title,
      price: e.price,
      description: e.description,
      category: e.category,
      image:e.image
    }  
    console.log(newProduct)

    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      //informacion contestual de la peticion, informacion meta
      headers: {
        "Content-Type":"application/json"
      },
      //informacion dura 
      body: JSON.stringify(newProduct)      
    })

    const data = await response.json()

    setProduct(data)
    setSuccess("Guardando producto...");
    //limpio los imput 
    reset()
    setFileUrl("https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg")


  }

  return (
    <Layout>
      <h1>Panel de Administración</h1>
      <section>        
        <form onSubmit={handleSubmit(isSubmit)}>   
          <h3>Cargar nuevo producto</h3>
          <div>
            <input
              type="text"
              placeholder="Nombre del producto"
              {...register("title",
                {
                  required:
                  {
                    value: true,
                    message: "Este campo es obligatorio",
                  },
                  minLength:
                  {
                    value: 3,
                    message: "Mínimo de 3 carácteres",
                  }
                }
              )}
            />
          </div>
          <p className="message-user">{errors.title?.message}</p>
          <div>
            <input
              type="number"
              placeholder="Precio"
              {...register("price",
                {
                  required:
                  {
                    value: true,
                    message: "Este campo es obligatorio",
                  }                 
                }
              )}
            />
          </div>
          <p className="message-user">{errors.price?.message}</p>       
          <div>
            <textarea
              type="text"
              placeholder="Descripcion"
              rows="4"
              {...register("description",
                {
                  required:
                  {
                    value: true,
                    message: "Este campo es obligatorio",
                  },
                  maxLength: {
                    value: 25,
                    message:"Maximo 25 carácteres"
                  }
                }
              )}
            />
          </div>
          <p className="message-user">{errors.description?.message}</p>           
          <div>
            <input
              type="text"
              placeholder="Categoria"
              {...register("category",
                {
                  required:
                  {
                    value: true,
                    message: "Este campo es obligatorio",
                  },
                  maxLength: {
                    value: 25,
                    message:"Maximo 25 carácteres"
                  }
                }
              )}
            />
          </div>
          <p className="message-user">{errors.category?.message}</p>     
          <div>
            <img src={fileUrl} width="150" alt="avatar" id="img" />
            <input
              {...register("image")}
              type="file"
              name="foto"
              id="foto"
              accept="image/*"
              onChange={saveFileImage}              
              required
            />          
          </div>
          <button className="div-button" >Guardar producto</button>
        </form>       
        {
          product && <div>           
            <h3>Producto Agregado</h3>
            <h3>Titulo:{product.title}</h3>            
            <p>$: {product.price}</p>            
            <p>Descripción:{product.description}</p>            
            <p>Categoia:{product.category}</p>
            <img src={product.image} />
            {success && <p className="message-user">{success}</p>} 
        </div>
        }
      </section>
    </Layout>
  )
}

export { Dashboard }