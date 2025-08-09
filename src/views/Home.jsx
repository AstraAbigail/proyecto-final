import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { userAuth } from "../context/UserContext"
import "../styles/views/Home.css"
import { FaTruck } from "react-icons/fa";
import logoCamion from "../assets/truck.png"
import logoUser from "../assets/user.png"
import logoPrice from "../assets/price.png"
import "../styles/Fonts.css"




const Home = () => {
  //[]->vacio por el map para que no tire error de que no puede leer undefined y no se va a leer en el map.
  const [products, setProducts] = useState([])
  // estado global -destructurando al user, podria usar login y logout que me lo da el objeto 
  const { user} = userAuth()  
  const [productToEdit, setProductToEdit] = useState(null)
  const [showPopUp, setShowPopUp] = useState(null)
  //estados del formulario de actualizacion
  const [titleEdit, setTitleEdit] = useState("")
  const [priceEdit, setPriceEdit] = useState("")
  const [descriptionEdit, setDescriptionEdit] = useState("")
  const [categoryEdit, setCategoryEdit] = useState("")
  const [imageEdit, setImageEdit] = useState("")


  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()

    setProducts(data)
  }
  //problema: parece que la pagina tarda
  //solucion: Necesito que muestres la UI (return), y despues busca los datos (fetch).-->efectos secundario -->useEffect
  // El array vacío (dependencias) espera a que ejecute el return del jsx, una sola vez. Si tiene algo[actualizaciondeProductos], useEffect se va a ejecutar cada vez que se modifique lo que este dentro de la dependencia.
  //Caso de Uso: Filtrados -> A -> productos con A  
  useEffect(() => {
    fetchingProducts() //primer parametro
  }, [] ) //segundo un []

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })

    if (response.ok) {
      setProducts(prevProduct => prevProduct.filter((product) => product.id != id))
      // fetchingProducts()
    }
  }


  const handleOpenEdit = (product) => {
    setShowPopUp(true)
    setProductToEdit(product)
    setTitleEdit(product.title)
    setPriceEdit(product.price)
    setDescriptionEdit(product.description)
    setCategoryEdit(product.category)
    setImageEdit(product.image)  
    
  }
  // petición al backend mediante fetch para modificar-> método PATCH / PUT https://fakeproductapi.com/products

  const handleUpdate = async () => { 
    e.preventDefault()
    
    //producto actualializado
    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit), //debe ser numero parseint lo pasa a entero no a float (tambien podes hacer parseFloat)
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit
    }
    

    //captura errores
    //try ->intenta y el cat
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
      })

      if (response.ok) {
        const data = await response.json()
        setProducts(prevProduct =>
          prevProduct.map((product) =>
            product.id === productToEdit.id  //si el producto que itero es igual al que tengo 
              ? data //entoces coloco la data
              : product //si no coloco el producto 
          ))
        // fetchingProducts()  
      }
      setShowPopUp(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <section className="home-section-intro">
        <h1>Tienda Sadartsa</h1>
        <p>Descubrí una selección exclusiva de productos para vos. Calidad, confianza y atención personalizada.</p>
      </section>

      <section className="home-section-caracteristicas">
        <h2 className="font">¿Por qué elegirnos?</h2>
        <ul>
          <li>
            <img src={ logoCamion} alt="camion de envios" width={100}/>
            <h3>Envíos a todo el país</h3>
            <p className="font">Recibí tu compra en la puerta de tu casa estés donde estés.</p>
          </li>
          <li>    
            <img src={logoPrice } alt="circulo con signo de pesos" width={100}/>
            <h3>Pagos seguros</h3>
            <p className="font">Trabajamos con plataformas que garantizan tu seguridad.</p>
          </li>
          
          <li>  
            <img src={ logoUser} alt="circulo con una palma mirando arriba y un usuario" width={100} />
            <h3>Atención personalizada</h3>
            <p>Estamos disponibles para ayudarte en todo momento.</p>
          </li>
        </ul>
      </section>

      <section className="home-section-product">
        <h2>Nuestros productos</h2>
        <p>Elegí entre nuestras categorías más populares.</p>

        {
          showPopUp && <section className="popup-edit">
            <h2>Editando producto.</h2>
            <button onClick={() => setShowPopUp(null)}>Cerrar</button>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                placeholder="Ingrese el titulo"
                value={titleEdit}
                onChange={(e) => setTitleEdit(e.target.value)}
              />
              <input
                type="number"
                placeholder="Ingrese el precio"
                value={priceEdit}
                onChange={(e) => setPriceEdit(e.target.value)}
              />
              <textarea
                placeholder="Ingrese la descripción"
                value={descriptionEdit}
                onChange={(e) => setDescriptionEdit(e.target.value)}
              ></textarea>
              <input
                type="text"
                placeholder="Ingrese la categoria"
                value={categoryEdit}
                onChange={(e) => setCategoryEdit(e.target.value)}
              />
              <input
                type="text"
                placeholder="Ingrese la URL de la imagen"
                value={imageEdit}
                onChange={(e) => setImageEdit(e.target.value)}
              />
              <button>Actualizar</button>
            </form>
          </section>
        }
        <div>
          {
            products.map((product) =>
              <div key={product.id}>
                <h2 key={product.id}>{product.title}</h2>
                <img width="80px" src={product.image} alt={`Imagen de ${product.title}`} />
                <p>${product.price}</p>
                <p>{product.description}</p>
                <p><strong>{product.category}</strong></p>
                {
                  user &&
                  <div>
                    <button onClick={()=>handleOpenEdit(product)}>Actualizar</button>
                    <button onClick={() => handleDelete(product.id)}>Borrar</button>
                  </div>
                }
              </div>
            )
          }
        </div>
      </section>
    </Layout>
  )
}

export { Home }