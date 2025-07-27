import { Layout } from "../components/Layout"
import { Link } from "react-router-dom"

const NotFound = () => { 
  return (
    <Layout>
      <h1>Página no encontrada - 404</h1>
      <p>Volver a la pagina de inicio: <Link to="/">Inicio</Link></p>
    </Layout>
   
)

}

export {NotFound}