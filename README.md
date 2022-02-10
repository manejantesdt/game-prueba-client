<p align='left'>
     <img height="100" src="./LogoNvo.png" />
</p> 

# Group Project - Recicle Being

## 🤔 De qué se trata?
Recicle Being es una página web creada como prueba técnica para la empresa CrediTu. 

El desafío consistió en desarrollar una aplicación web usando un framework SPA, requerida por 
los creadores de un juego hipotético que desean ofrecer a sus usuarios la posibilidad de consultar 
quiénes son los jugadores del mismo. 

## Scripts Disponibles

En el directorio de proyectos, puedes ejecutar:

### `npm start`

Runs the app in the development mode.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

La página se volverá a descargar si haces cambios en el código.\
También podrás ver si hay errores en la consola.

## 💻 Puedo ver esta aplicación en vivo?

Claro que sí! Tanto el Front-end como el Back-end fueron deployadas utilizando diferentes servicios en AWS (Lambda, Dynamo, S3). 
Puedes visitar la versión online haciendo click en el siguiente  enlace:
https://dfuf67ce7t2lm.cloudfront.net/

## Objetivos del Proyecto

- Construímos una aplicación utilizando React, Javascript, Redux, Express, Styled Components.
- Utilizamos otras tecnologìas : AWS y Jest 
- Utilizamos la metodología SCRUM trabajando en equipo, mediante el uso de Trello.
- Pusimos en práctica el workflow de GIT implementando CI (integración continua) y desarrollo continuo. 

## Boiler Plate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

Creamos una base de datos llamada `CredituPlayers` utilizando Dynamo.

El contenido de `client` fue creado usando: Create React App.

## Enunciado

La idea general es crear una aplicación para el salón de la fama de un juego imaginario. 

## 💡 Qué puedo hacer en la versión online (in live version)?
Cuando visitas la página web verás que hemos creado un "Salón de la fama de jugadores", donde se despliega una interfaz con los 10
jugadores con mayor ranking, incluyendo id, nickname, ranking, status y avatar.

<p align='left'>
    <img height="120" src='https://drive.google.com/thumbnail?id=1ZhFz6JMOtT3107w-z2KuO0PZMOKEzIYx' </img>
</p> 

Puedes ver efectivamente que en el panel superior, en la sección titulada "Players", aparecen las tarjetas de los 10 jugadores con mayor ranking de toda la aplicación, que cuenta actualmente con una base de datos de más de tres mil jugadores.

En el panel central, puedes ver en el podio, en un lugar destacado, a los 3 mejores de esos 10 primeros. 

<p align='left'>
    <img height="150" src='http://game-prueba-client.s3-website-us-east-1.amazonaws.com/static/media/podio.56d7824ee98f76bacb0e.png' </img>
</p> 

En el panel inferior, llamado "Bold Players", puedes ver 6 jugadores destacados - es decir, 10 forman parte del Top Ten y otros 6 forman parte de Bold Players porque quisimos que esos jugadores también tengan un lugar dentro del Salón de la Fama.

Al hacer click sobre la tarjeta de cualquier jugador, puedes mirar los detalles específicos de ese jugador:  Id, avatar, nickname, status y ranking. 
Puedes navegar por todo el sitio web, ir a la pestaña "Create Player" (crear un jugador), donde podrás elegir tu nickname, tu avatar favorito, tu status y tu puntaje dentro del campo "ranking". 

También puedes editar los jugadores que están creados, e incluso borrarlos.


### Aplicación de jugadores

- Registro encriptado. Los usuarios deben tener la oportunidad de crear una cuenta de forma rápida y segura con sus cuentas de redes sociales o Gmail.
- Búsqueda de jugadores. Si el texto de la búsqueda es una coincidencia exacta con el id de un jugador, se despliega esta única coincidencia. De lo contrario, se
muestran, usando paginación, todas aquellas coincidencias que en sus atributos nickname y/o status contengan la búsqueda ordenados por ranking.
- La búsqueda de un jugador incluye filtros de acuerdo al atributo status y ordenados por ranking.
- Editar un jugador.  Al editar un jugador, puedes manipular todos los campos asociados excepto el id del mismo.
- Creación de un nuevo jugador. Podrás crear un jugador ingresando el campo nickname y, opcionalmente, seleccionar un avatar.
- About. En la ruta /about encontrarás información acerca de Recicle Being.

## Desarrollo        

#### Las tecnologías utilizadas fueron:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Styled Components
- [ ] Servicios de AWS (Dynamo, Lambda, S3, Serverless)
- [ ] Jest
- [ ] Mocha and Chai


## Frontend

Se desarrolla una aplicación de React/Redux que contiene las siguientes pantallas/rutas.

__Pagina inicial__: un home page con
- [ ] Una imagen del logo representativa del proyecto
- [ ] Texto breve indicando la principal funcionalidad de la app y sus ventajas
- [ ] Botón para 

- [ ] Paginado


__Ruta principal__: contiene
- [ ] Input de búsqueda para encontrar jugadores
- [ ] Botón para crear un jugador
- [ ] Área donde se ven imágenes y textos que amplían la información sobre los jugadores
  - Imagen
  - Nickname
  
 __Ruta de listas de los jugadores existentes__: contiene
  
- [ ] Botones/Opciones para filtrar jugadores por:
    - Ascendente/ Descendente
    - Por status

- [ ] Detalle de cada jugador con los siguientes campos:
    - Avatar
    - Nickname
    - Status
    - Ranking
 

__Ruta de creación de un personaje__: contiene
- [ ] Un formulario __controlado__ con los siguientes campos
  - Nickname
  - 

__Ruta de edición de un personaje__: contiene
- [ ] 

## Base de datos

### Los endpoints utilizados son:

  - POST - https://mrsemsqfk6.execute-api.us-east-1.amazonaws.com/player
  - GET - https://mrsemsqfk6.execute-api.us-east-1.amazonaws.com/player
  - GET - https://mrsemsqfk6.execute-api.us-east-1.amazonaws.com/player/{Id}
  - PUT - https://mrsemsqfk6.execute-api.us-east-1.amazonaws.com/player/{Id}
  - DELETE - https://mrsemsqfk6.execute-api.us-east-1.amazonaws.com/player/{Id}
  
#### El modelo de la base de datos contiene las siguientes entidades:

- [ ] Jugadores con las siguientes propiedades:
  - Id * - número que funciona como identificador único del jugador
  - nickname * - string que contiene el alias del jugador
  - status  - string que contiene el estado del jugador [oro, plata o bronce]
  - ranking - número que representa su posición en los resultados del juego
  - avatar - string que representa el avatar asociado al jugador

## Backend

Se desarrolla sin servidor con las siguientes rutas:
  
##### Usuarios:  
- [ ] __GET /players__:
  - Obtiene un listado de jugadores registrados
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /player/?name="..."__:
  - Obtener un listado de los jugadores que contengan la palabra ingresada como query parameter
- [ ] __GET /player/{id}__:
  - Obtener el detalle de un jugador en particular
- [ ] __PUT /player__:
  - Permite modificar campos de un jugador creado  
- [ ] __POST /player__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de un nuevo jugador por body
  - Crea una nuevo jugador en la base de datos
- [ ] __DELETE /player__:
  - Permite eliminar un jugador creado 



### Deployment



