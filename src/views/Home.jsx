import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { userAuth } from "../context/UserContext"
import "../styles/views/Home.css"
import { TfiSearch } from "react-icons/tfi";
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
  const [showPopUp, setShowPopup] = useState(null)
  //estados del formulario de actualizacion
  const [titleEdit, setTitleEdit] = useState("")
  const [priceEdit, setPriceEdit] = useState("")
  const [descriptionEdit, setDescriptionEdit] = useState("")
  const [categoryEdit, setCategoryEdit] = useState("")
  const [imageEdit, setImageEdit] = useState("")


  /*FILTRADO*/
  const [search, setSearch] = useState("")
  
  //metodo de filtrado

  //metdo de busqueda
  const searcher = (e) => { 
    setSearch(e.target.value)
    
    console.log(search,"search")
  }

  //metodo de filtrado
    let resultadoFiltrado = []
  if (!search) {
    console.log(products, "productos del search")
    resultadoFiltrado = products
  } else { 
    resultadoFiltrado= products.filter((dato) =>
    dato.title.toLowerCase().includes(search.toLocaleLowerCase()))
  }
       


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
    setShowPopup(true)
    setProductToEdit(product)
    setTitleEdit(product.title)
    setPriceEdit(product.price)
    setDescriptionEdit(product.description)
    setCategoryEdit(product.category)
    setImageEdit(product.image)  
    
  }
  // petición al backend mediante fetch para modificar-> método PATCH / PUT https://fakeproductapi.com/products

  const handleUpdate = async (e) => {
    e.preventDefault()

    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit
    }

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
            product.id === productToEdit.id
              ? data
              : product
          ))
        // fetchingProducts()
      }
      setShowPopup(false)
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <Layout>
      <section className="home-section-intro">
        <h1>Tienda Sadartsa</h1>
        <p className="font">Descubrí una selección exclusiva de productos para vos. Calidad, confianza y atención personalizada.</p>
      </section>
      <hr />
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
      <hr />
      <section>
        <div className="home-section-product">
          <div className="hspdiv">
            <h2>Nuestros productos</h2>
            <p className="font">Elegí entre nuestras categorías más populares.</p>
            <div className="ui-search">         
              <input value={search} onChange={searcher}id="ui-search-input" type="text" placeholder="Buscar productos" /> 
                   
            </div>     
          </div>
      
          {
            showPopUp &&                       
            <section className="popup-edit">
                <hr />
                <dialog className="dialog-popup" open>
                  <h3>Editando producto</h3>
                  <form onSubmit={handleUpdate}>
                    <div>
                      <label htmlFor="">Titulo</label>
                      <input
                        type="text"
                        placeholder="Ingrese el titulo"
                        value={titleEdit}
                        onChange={(e) => setTitleEdit(e.target.value)}
                      />
                      <label htmlFor="">Precio</label>
                      <input
                        type="number"
                        placeholder="Ingrese el precio"
                        value={priceEdit}
                        onChange={(e) => setPriceEdit(e.target.value)}
                      />
                    </div>
                    <label htmlFor="">Descrioción</label>
                    <textarea
                      placeholder="Ingrese la descripción"
                      value={descriptionEdit}
                      onChange={(e) => setDescriptionEdit(e.target.value)}
                    ></textarea>
                    <div>
                      <label htmlFor="">Categoría</label>
                      <input
                        type="text"
                        placeholder="Ingrese la categoria"
                        value={categoryEdit}
                        onChange={(e) => setCategoryEdit(e.target.value)}
                      />
                      <label htmlFor="">Imagen</label>
                      <input
                        type="text"
                        placeholder="Ingrese la URL de la imagen"
                        value={imageEdit}
                        onChange={(e) => setImageEdit(e.target.value)}
                      />   
                    </div>  
                      
                  </form>
                  <div className="dialog-buttons">
                    <button onClick={handleUpdate}>Actualizar</button>
                    <button id="close" onClick={()=>setShowPopup(null)}>Cerrar</button>
                  </div>
                </dialog>
                
{/*                 
              <div className="popup-edit-div">
                <h2 className="popup-edit-h2">Editando producto.</h2>
                  <button className="popup-edit-button" onClick={() => setShowPopUp(null)}>Cerrar</button>
              </div>
              <form className="popup-edit-form" onSubmit={handleUpdate}>
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
              <br /> */}
            </section>
          }
        </div>

        
        <div className="conteiner-product" >
          { 
            // products.map((product) =>
            resultadoFiltrado.map((product) =>
              <div className="single-product" key= {product.id}>
                <h4 id="single-product-h4" key={product.id}>{product.title}</h4>
                <div className="single-product-img">
                  <img  src={product.image} alt={`Imagen de ${product.title}`} width={100} height={100}/>
                </div>
                <div className="single-product-data">
                  <p>$ <strong>{ product.price}</strong></p>
                  <hr />
                  <p id="single-product-description">{product.description} </p>
                </div>
                  <hr />
                  <p>Categoría: <strong>{product.category}</strong></p>
                
                {
                  user &&
                  <div className="single-product-buttones">
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