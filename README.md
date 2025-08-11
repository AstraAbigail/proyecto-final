# Proyecto Final Cursada

## Objetivo

- El objetivo de este trabajo es realizar una pagina de Frontend, con simulaciones de backend por medio de una simulacion de API (fakestoreapi.com). Se pondra en práctica armado basico de HTML con estilos por medio de CSS y uso de REACT (componentes,mapeos, estados, uso de librerias de react (useForm), manejador de rutas (Router-dom),rutas privadas y layouts)

## Funcionalidades

- Logiarnos
- Registrarnos
- Actualizar Productos
- Borrar Productos
- Agregar Productos
- Consultar productos filtrando por medio de una barra de busqueda.

Internamente se haran las validaciones de los formularios correspondiente a Login, Registro e Incorporacion de Productos.

-Aclaracion: Algunas validaciones las veremos comentadas debido a que la api que usamos en este proyecto, no todos los ejemplos las contemplan.
Formulario Login:
Ej: usuario: contraseña:  
 La validacion:
`pattern: {
                     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                     message: "Debe contener: 1 Carácter especial - Minúsculas - Números - 1 Mayúscula - 8 Carácteres",
                     }`  
 no es posible ya que no todos los usuarios y contraseñas de la API coninciden. Se han dejado opciones que funcionen en la mayoria y no interumpan la experiencia de usuario.

## Instrucciones para ejecutar localmente

- 1. Clonar repositorio

  Ingresamos a un rerpositorio especifico, en el boton azul <> CODE, veremos un apartado que indica HTTPS y una url, la copiamos.
  Abrimos una terminal, y escribimos el comando: git clone y pegamos la url, listo!ya tenemos el proyecto en la carpeta donde nos hayamos posicionado y ejecutado el comando.

- 2. ¿Cómo se instalan las dependencias?
     Una vez instalado Node (ver punto 4)-
     Para comenzar un proyecto de cero, en una terminal escribimos:
     npm (maneja paquetes de node)
     npm create vite@latest nombre-proyecto
     Select a Framework -> React
     Select a Variant ->Javascript
     cd nombre-proyecto
     Dependencias:  
      Con el comando: nmp install, internamente se dirige al archivo, package.json y se dirige a npm y comienza a buscar cada nombre que aparece en el apartado "dependencies" y "devDependencies" y lo que aparece en la pagina de nmp como match se instala, haciendo que aparezca en nuestro proyecto la carpeta "node_mnodules".
- 3. ¿Cómo ejecutar?
     Desde la terminal ejecutamos: npm run dev -> va al archivo package.json y en al apartado scripts, ejecuta con el comando run, el comando dev -> dejandonos ver el proyecto en nuestro localhost de manera local.

- 4. Tener en cuenta
     - Debemos tener NODE instalado, ya que nos permitira ejecutar JavaScript en otros sitios que no sean el navegadores.
       Una vez terminada la instalacion, verificamos en una terminal si se instalo correctamente con los siguientes comandos:
       node -v (para saber la version que instalo - Preferentemente que sea LTS)
       1+1 y la terminal deberia darnos 2.
- 5. Dato para verificar los formularios
     donero -> ewedon
