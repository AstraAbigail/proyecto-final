import { Layout } from "../components/Layout"
import fotoIndumentaria from "../assets/indumentaria.jpg"
import fotoOnline from "../assets/online.jpg"
import cadena from "../assets/cadena.png"
import truck from "../assets/truck.png"
import price from "../assets/price.png"
import "../styles/views/Nosotros.css"
import "../styles/Fonts.css"




const Nosotros = () => { 

  return (
    <Layout>
        <section className="us-proyect">
          <img src={fotoIndumentaria} alt="foto de chica pensando en diseño de ropa" width={500}/>
          <div>
            <h2>Nuestro Proyecto</h2>
            <p>Nuestro proyecto es mucho más que una tienda online: es una puerta al mundo de la moda global. Te traemos indumentaria y accesorios de distintas culturas y estilos, con la comodidad de recibirlo en casa, estés donde estés en el país.
              Con atención personalizada en tu idioma, precios en tu moneda local y todas las opciones de pago disponibles, hacemos que comprar del exterior sea fácil, accesible y 100% confiable.</p>
          </div>
        </section>
        <hr />
        <section className="us-alcance">          
          <div>
            <h2>Alcance</h2>
            <p>Estamos donde vos estás y donde vas a estar.
              Actualmente operamos en Estados Unidos, Europa y América del Sur, conectando a personas con estilos únicos y productos de todo el mundo. Nuestro compromiso es seguir expandiéndonos para que más personas puedan acceder a nuestra propuesta sin importar la distancia.
              Muy pronto estaremos también en Groenlandia, Rusia, India y África. Porque la moda no entiende de fronteras, y nosotros tampoco.
              Seguimos creciendo para acercarte lo mejor del mundo, estés donde estés.
            </p>
          </div>
          <img src={fotoOnline} alt="foto de carrito de compras" width={500} />
        </section>
        <hr />


        <section className="us-tecnologias">      
          <div>
            <h2>Tecnologias</h2>
            <p id="us-tecnologies-p">En nuestra tienda online, apostamos por lo último en tecnología para que tu experiencia sea fluida, segura y   sorprendente—desde el clic hasta la puerta de tu casa.</p>
          </div>
        
          <div className="us-tecnologies-div">
            <img src={price} alt="icono de precio" width={100}/>
            <h4>Pagos Globales, locales para vos</h4>
            <p>Utilizamos plataformas de e‑commerce robustas y escalables como BigCommerce, que ya permite múltiples monedas y pagos en diferentes idiomas, con funciones avanzadas para operar globalmente. 
            Para ofrecer una experiencia multi-pagos internacional, trabajamos con pasarelas como Stripe, PayPal, o similares, y podemos incluso combinar soluciones tipo Stripe Connect o PayPal Adaptive dentro de arquitecturas basadas en Node.js, Django o Laravel que manejan conversiones de moneda, impuestos y seguridad.</p>
          </div>
            
          <div className="us-tecnologies-div">
              <img src={truck} alt="icono de logistica" width={100} />            
              <h4>Logística</h4>

              <p>Drones inteligentes: Integrados mediante sistemas con IA, GPS, sensores y conectividad IoT, nuestros drones se orientan y entregan paquetes de forma autónoma, adaptándose al clima, obstáculos y tráfico aéreo.
              Camiones autónomos: Para envíos más pesados o rutas largas, colaboramos con tecnologías de vehículos autónomos de nivel 4, operando sin conductor en rutas repetitivas.
              Métodos tradicionales y sostenibles: También implementamos envíos por tren para zonas de alta demanda o eficiencia, y entregas urbanas finales mediante bicicletas, perfectas para reducir emisiones y agilizar entregas en zonas densamente pobladas.</p>
          </div>
            
          <div className="us-tecnologies-div">
              <img src={cadena} alt="icono de cadena de proceso" width={100} />
              <h4>Inteligencia en toda la cadena </h4>
              <p>Toda nuestra logística está centralizada mediante una plataforma que unifica datos de trazabilidad, monitoreo en tiempo real, optimización de rutas (usando IA/ML), y mantenimiento predictivo tanto para drones como para camiones.
                Así podemos anticipar demoras, resolver problemas antes que ocurran y ofrecer seguimiento preciso de tu pedido—sin importar el medio de entrega.</p>
          </div>          
        </section>
    </Layout>
  )


}

export { Nosotros}