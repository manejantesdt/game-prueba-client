# Recicle Being - Proyecto Grupal

Recicle Being es una página web creada como prueba técnica para la empresa CrediTu. 
La idea general fue crear una aplicación para el salón de la fama de un juego imaginario. 
El desafío consistió en desarrollar una aplicación web usando un framework SPA, requerida por 
los creadores de un juego hipotético que desean ofrecer a sus usuarios la posibilidad de consultar 
quiénes son los jugadores del mismo. 

## ¿Puedo ver esta aplicación en vivo? 💻

Claro que sí! Tanto el Front-end como el Back-end fueron deployadas utilizando diferentes servicios en AWS (Lambda, Dynamo, S3, APi Gateway, entre otros).
[Puedes visitar la versión online haciendo click en el siguiente  enlace:](https://dfuf67ce7t2lm.cloudfront.net/)

## Comenzando 🚀

Las siguientes instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de pruebas.

1. Forkea el repositorio para tener una copia del mismo en tu cuenta
2. Clona el repositorio en tu computadora para hacer pruebas

_Si en cambio prefieres desplegar el proyecto utilizando los servicios de la nube de AWS, sigue las indicaciones en el [documento llamado **DEPLOY.md**](https://github.com/manejantesdt/game-prueba-client/blob/dev/DEPLOY.md) de este repositorio donde encontrarás instrucciones paso a paso._

### Pre-requisitos 📋

Para instalar esta aplicación es necesario contar con la última versión estable de Node y NPM. Asegúrate de contar con ellas para poder instalar correctamente las dependencias necesarias para correr el proyecto.

Actualmente las versiones necesarias son:

 * __Node__: 16.14.0 o mayor
 * __NPM__: 8.4.1 o mayor

Para verificar que versión tienes instalada:

> node -v
>
> npm –v

### Instalación 🔧

Para tener un entorno de desarrollo ejecutándose en tu computadora, en el directorio del proyecto, debes ejecutar los siguientes comandos:

### `npm install`

Este paso instalará los paquetes (dependencias) utilizados en el proyecto de forma rápida y cómoda.

### `npm start`

Este paso ejecuta un comando especificado en la propiedad "start" dentro de los "scripts" en el archivo package.json. En este caso, le indicamos que despliegue la aplicación en el navegador. 

Este comando abrirá [http://localhost:3000](http://localhost:3000) en tu navegador.

La página se volverá a descargar si haces cambios en el código.

## ¿Qué puedo hacer en la versión online? 💡

- Cuando visitas la página web verás que hemos creado un "Salón de la fama de jugadores", donde se despliega una interfaz con los 10
jugadores con mayor ranking, incluyendo id, nickname, ranking, status y avatar.

- Puedes ver efectivamente que en el panel superior, en la sección titulada "Top Ten", aparecen las tarjetas de 7 de los 10 jugadores con mayor ranking de toda la aplicación, que cuenta actualmente con una base de datos de más de tres mil jugadores.

<p align='left'>
    <img height="170" src='https://github.com/manejantesdt/game-prueba-client/blob/dev/Screenshot_top.png' </img>
</p> 

- En el panel central, puedes ver en el podio, en un lugar destacado, a los 3 mejores dentro de esos 10 primeros. 

<p align='left'>
    <img height="170" src='https://github.com/manejantesdt/game-prueba-client/blob/dev/Screenshot_medium.png' </img>
</p> 

- En el panel inferior, llamado "Jugadores Destacados", puedes ver 6 jugadores destacados - es decir, 10 forman parte del Top Ten y otros 6 forman parte de Jugadores Destacados porque quisimos que esos jugadores también tengan un lugar remarcable dentro del Salón de la Fama.

<p align='left'>
    <img height="170" src='https://github.com/manejantesdt/game-prueba-client/blob/dev/Screenshot_bottom.png' </img>
</p> 

- Al hacer click sobre la tarjeta de cualquier jugador, puedes ver los detalles específicos de ese jugador:  Id, avatar, nickname, status y ranking, score. 

<p align='left'>
    <img height="170" src='https://github.com/manejantesdt/game-prueba-client/blob/dev/Screenshot_detail.png' </img>
</p> 

- Puedes ir a la pestaña "Create Player" (crear un jugador), donde podrás elegir tu nickname (campo obligatorio) y de manera opcional elegir tu avatar favorito.

<p align='left'>
    <img height="240" src='https://github.com/manejantesdt/game-prueba-client/blob/dev/Screenshot_create_player.png' </img>
</p>

- Logueado como administrador, también puedes editar los jugadores que ya están creados, e incluso borrarlos.

- Puedes buscar un jugador por Id o por nickname, y también en la página de los resultados de búsqueda, filtrarlos por ranking o por status.

<p align='left'>
    <img height="40" src='https://github.com/manejantesdt/game-prueba-client/blob/dev/Screenshot_search_bar.png' </img>
</p>

<p align='left'>
    <img height="120" src='https://github.com/manejantesdt/game-prueba-client/blob/dev/Screenshot_filters.png' </img>
    <img height="120" src='https://github.com/manejantesdt/game-prueba-client/blob/dev/Screenshot_filter_ranking.png' </img>
</p>

- Al hacer click en el enlace "Sobre", encontrarás información sobre este juego y su salón de la fama.

<p align='left'>
    <img height="240" src='https://github.com/manejantesdt/game-prueba-client/blob/dev/Screenshot_about.png' </img>
</p>

# Desarrollo

## Objetivos del Proyecto

- Construímos una aplicación utilizando React, Javascript, Node, Redux, Express, Styled Components.
- Utilizamos otras tecnologìas : AWS, Serverless Framework, Cypress, Jest
- Utilizamos la metodología SCRUM trabajando en equipo, mediante el uso de Trello.
- Pusimos en práctica el workflow de GIT implementando CI (integración continua) y DC (desarrollo continuo).

## Boiler Plate

El boilerplate cuenta con dos carpetas: `back-aws-game` y `game-prueba-client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

El contenido de `game-prueba-client` fue creado usando: Create React App.

### Aplicación del Salón de la Fama

## Frontend

Se desarrolla una aplicación de React/Redux que contiene las siguientes pantallas/rutas.

__Ruta principal__: contiene
- [ ] Una barra de navegación con una imagen del logo representativa del proyecto
- [ ] Input de búsqueda para encontrar jugadores, que al ingresar una búsqueda despliega los resultados de la misma en la ruta /search 
- [ ] Un enlace que lleva al componente para "Crear un jugador"
- [ ] Un enlace que lleva al componente "Sobre"
- [ ] Área donde se muestran las tarjetas de 7 dentro los 10 jugadores con ranking más alto
- [ ] Área donde se muestran las tarjetas de los 3 jugadores con ranking más alto
- [ ] Área donde se muestran las tarjetas de 6 jugadores destacados pero que no están dentro del ranking de los 10 principales

 __Ruta de búsqueda de jugadores__: contiene
- [ ] Si el texto de la búsqueda es una coincidencia exacta con el id de un jugador, se despliega esta única coincidencia. De lo contrario, se muestran, usando paginación, todas aquellas coincidencias que en sus atributos nickname y/o status contengan la búsqueda ordenados por ranking.
- [ ] El paginado organiza los resultados de la búsqueda mostrando las tarjetas de 6 jugadores por cada página.
- [ ] La búsqueda de un jugador incluye filtros de acuerdo al atributo status y ordenados por ranking.
- [ ] Opciones para filtrar jugadores por:
    - Ascendente/ Descendente
    - Por status (Oro, Plata, Bronce)
    
 __Ruta para ver el detalle de los jugadores__: Al hacer click sobre la tarjeta de cualquier jugador, dirije a la ruta por Id que contiene:
- [ ] Detalle de cada jugador con los siguientes campos:
    - Avatar
    - Nickname
    - Status
    - Ranking
- [ ] Una letra X que al clickear sobre ella dispara la acción de eliminar al jugador
 
 __Ruta de creación de un nuevo jugador__: Podrás crear un jugador ingresando el campo nickname y, opcionalmente, seleccionar un avatar. Contiene
- [ ] Un formulario __controlado__ con los siguientes campos
  - Nickname *
  - Avatar
  
 __Ruta para editar a un jugador existente__:  Al editar un jugador, puedes manipular todos los campos asociados excepto el id del mismo. Contiene
- [ ] Una tarjeta con los datos del jugador donde pueden editarse los campos Avatar, Status, Nickname y Ranking.
- [ ] Botón para aceptar los cambios
- [ ] Botón para cancelar los cambios

 imágenes y textos que amplían la información sobre los jugadores
 
__Ruta Sobre__: contiene
- [ ] En la ruta /sobre encontrarás información acerca de Recicle Being.

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Construído con 🛠️

* [React](https://es.reactjs.org/) - La librería de JavaScript para construir interfaces de usuario
* [Redux](https://es.redux.js.org/) - Redux es un contenedor predecible del estado de aplicaciones JavaScript. Lo hacemos combinado con React.
* [Styled Components](https://styled-components.com/) - La librería que nos permite estilizar nuestros componentes escribiendo código CSS en JavaScrip
* [Amazon Web Services](https://aws.amazon.com/) - Es la plataforma en la nube más adoptada y completa en el mundo
* [AWS S3](https://aws.amazon.com/es/s3/) - Almacenamiento de objetos de Amazon creado para recuperar cualquier volumen de datos desde cualquier ubicación
* [Cypress](https://www.cypress.io/) - Un framework de testing moderno, es una de las herramientas más populares de testing
* [GitHub Actions](https://github.com/features/actions) - GitHub Actions es una plataforma de integración continua y entrega continua (CI/CD) que nos facilita la automatización de todos los flujos de trabajo de software. Podemos crear, testear y desplegar nuestro código directamente desde GitHub. El código creado y enviado desde los equipos locales para actualizar el repositorio de GitHub puede ser testeado y desplegado automáticamente. 


## Autores ✒️

* **Ramiro Villamizar ** - [pivotsk8](https://github.com/pivotsk8)
* **Marisa Lia Pascal ** - [Marisaliap](https://github.com/Marisaliap)
* **José Ángel Rey ** - [Jose-Angel-Rey](https://github.com/Jose-Angel-Rey)
* **Gustavo Montero ** - [gamontero](https://github.com/gamontero)
* **Daniel Alberto Mena ** - [BtoMJ](https://github.com/BtoMJ)


## Licencia 📄

Este proyecto está bajo la Licencia de Dream Team Manejantes 

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.



---
⌨️ con ❤️ por [Manejantes](https://github.com/manejantesdt) 😊
