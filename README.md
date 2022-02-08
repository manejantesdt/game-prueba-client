<p align='left'>
    <img src='https://github.com/manejantesdt/game-prueba-client/blob/marisa/LogoNvo.png' </img>
</p> 

# Group Project - Recicle Being

🤔 De qué se trata?
Recicle Being es una página web creada como prueba técnica para la empresa CrediTu. 

## Scripts Disponibles

En el directorio de proyectos, puedes ejecutar:

### `npm start`

Runs the app in the development mode.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

La página se volverá a descargar si haces cambios en el código.\
También podrás ver si hay errores en la consola.

💻 Puedo ver esta aplicación en vivo?
Claro que sí! Tanto el Front-end como el Back-end fueron deployadas utilizando diferentes servicios en AWS (Lambda, Dynamo, S3). 
Puedes visitar la versión online haciendo click en el siguiente  enlace:
http://game-prueba-client.s3-website-us-east-1.amazonaws.com/

## Objetivos del Proyecto

- Construímos una aplicación utilizando React, Javascript, Redux, Express, Styled Components.
- Utilizamos otras tecnologìas : AWS y Jest 
- Utilizamos la metodología SCRUM trabajando en equipo, mediante el uso de Trello.
- Pusimos en práctica el workflow de GIT implementando CI (integración continua) y desarrollo continuo. 

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

Creamos una base de datos llamada `CredituPlayers` utilizando Dynamo.

El contenido de `client` fue creado usando: Create React App.

## Enunciado

La idea general es crear una aplicación para el salón de la fama de un juego imaginario. 

💡 Qué puedo hacer en la versión online (in live version)?
Cuando visitas la página web verás que hemos creado un "Salón de la fama de jugadores", donde se despliega una interfaz con los 10
jugadores con mayor ranking, incluyendo id, nickname, ranking, status y avatar.
Puedes ver efectivamente que en el panel superior aparecen las tarjetas de los 10 jugadores con mayor ranking de toda la aplicación, que cuenta actualmente 
con una base de datos de más de tres mil jugadores.
En el panel central, puedes ver en el podio, en un lugar destacado, a los 3 mejores de esos 10 primeros. 
Al hacer click sobre la tarjeta de cualquier jugador, puedes mirar los detalles específicos de ese jugador:  Id, avatar, nickname, status y ranking. 
Puedes navegar por todo el sitio web, puedes ir a la pestaña "crear un jugador", donde podrás elegir tu nickname, tu avatar favorito, tu status y tus puntaje dentro del ranking. 

REVISAR ESTO: Si tienes permisos de Administrador, también puedes editar los jugadores que están creados, e incluso borrarlos.

<p align="left">
  <img height="200" src="./routes_2.jpg" />
</p>

### Aplicación de jugadores

- Registro encriptado. Los usuarios deben tener la oportunidad de crear una cuenta de forma rápida y segura con sus cuentas de redes sociales o Gmail.
- Búsqueda de jugadores. La búsqueda de un jugador incluye filtros como 
- Creando un jugador. Después de encontrar una opción perfecta, los usuarios crean una solicitud de viaje. Pueden identificar los lugares donde va a comenzar y terminar su viaje y también el número de pasajeros que viajan con ellos.
- Revisión de otros jugadores. Al reservar un viaje, los usuarios deben poder consultar los perfiles de otros pasajeros con sus calificaciones para asegurarse de que el viaje sea seguro.

### Panel de administrador

- Dashboard. Es una descripción general de las numerosas métricas comerciales: la cantidad de usuarios e ingresos para un período determinado, mensajes, administración de varios departamentos de aplicaciones (pagos, conductores, pasajeros, calificaciones, etc.).
- Análisis. Aquí los administradores encuentran información sobre flujos de ingresos, tendencias de crecimiento o disminución, ingresos por categoría, etc.
- Conductores. Los admin pueden aprobar nuevos conductores en esta sección y luego almacenar los detalles del perfil, las calificaciones y las reseñas de cada conductor.
- Pasajeros. Cuando un pasajero crea una nueva cuenta, aparecerá inmediatamente en esta sección con todos los detalles de contacto, calificaciones y reseñas accesibles.
- Vehículos. Es un lugar separado para almacenar información sobre los automóviles y su estado.
- Pagos. Cada pago y su estado (exitoso o no) se registran aquí.
- Servicio de ayuda. Cualquier solicitud de los usuarios se enviará a esta sección y luego se transformará en tareas para el equipo de soporte o los expertos técnicos.

## Funciones avanzadas de la aplicación que se podrían evaluar y añadir a futuro

Implementar una o dos de las siguientes características pueden ser una ventaja para atraer nuevos clientes.

- Modo offline. A veces los conductores pueden pasar por lugares con una mala conexión a Internet, o los pasajeros pueden querer usar una aplicación en el sótano. El modo sin conexión es un respaldo para estas situaciones.
- Lugares favoritos. La dirección de la casa, la oficina, los lugares de amigos o familiares: todos estos son los lugares favoritos de los pasajeros. Guardarlos en la aplicación eventualmente ahorrará algunos minutos preciosos para el usuario.
- Programación de un viaje. ¿De inmediato o en varias horas? Si los usuarios tienen un viaje al aeropuerto, es mejor contratar un viaje de antemano. La programación de viajes es una herramienta extremadamente útil para tales situaciones.
- Descuentos para usuarios. Existen muchas formas de aprovechar los descuentos y los códigos de promoción para beneficio de los propietarios de la app, así que, ¿por qué no convertirlo en parte del esfuerzo de marketing? Informe a sus clientes nuevos y leales sobre los beneficios de precio con su servicio de viaje compartido.
- Propinas. Cualquier pago adicional es una motivación para hacer mejor el trabajo. Dejar propinas es una opción para que los pasajeros agradezcan a los conductores por un gran servicio y un incentivo para que los propietarios de automóviles mejoren sus habilidades (tanto de conducción como de comunicación).
- Interfaz multilingüe. Cuantos más idiomas incorporados tenga la aplicación, más usuarios obtendrá. Incluso dentro de una ciudad, se pueden encontrar personas de diversos grupos étnicos, por lo que agregar varios idiomas a la aplicación es algo sumamente valioso. 

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
- [ ] Una imagen de fondo representativa al proyecto
- [ ] Imágenes de banderas de países para seleccionar el idioma
- [ ] Texto breve indicando la principal funcionalidad de la app y sus ventajas
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: contiene
- [ ] Input de búsqueda para encontrar viajes
- [ ] Botón para crear un viaje que lleva al registro del usuario y registro de su coche
- [ ] Un botón para acceder a todas las rutas disponibles actualmente
- [ ] Área donde se ven imágenes y textos que amplían la información para el usuario
  - Imagen
  - Descripción
  
 __Ruta de listas de las rutas existentes__: contiene
  
- [ ] Botones/Opciones para filtrar rutas por:
    - Se admiten mascotas
    - Se permite fumar 
    - Alimentos permitidos
    - Màximo dos personas en la parte de atrás
    - Se permiten niños
    - Sólo mujeres

- [ ] Botón para ordenar por    
    - Salida más temprana
    - Precio más bajo

- [ ] Detalle de cada ruta con los siguientes campos:
    - Foto de perfil del conductor
    - Calificación del conductor
    - Ciudad de origen
    - Ciudad de destino
    - Fecha y hora de salida
    - Asientos disponibles
    - Precio del viaje
    
- [ ] Paginado.

__Ruta de detalle de la ruta__: contiene
- [ ] Los campos mostrados en la ruta principal para cada ruta
- [ ] Mapa mostrando la ruta seleccionada
- [ ] Distancia en kilómetros entre origen y destino
- [ ] Duración del viaje
- [ ] Preferencias
- [ ] Botón para poder unirse a un viaje
- [ ] Borón para regresar a la pàgina anterior

__Ruta de creación de un viaje__: contiene
- [ ] Un formulario __controlado__ con los siguientes campos
  - Ciudad de Origen
  - Ciudad de Destino
  - Día del viaje
  - Hora del viaje
  - Lugares disponibles
- [ ] Posibilidad de seleccionar preferencias del conductor
- [ ] Botón/Opción para la vista previa de un nuevo viaje

__Ruta de confirmación para crear un viaje__: contiene
- [ ] Mapa ampliado de la ruta definida previamente
- [ ] Información detallada con los campos enumerados en el formulario anterior
- [ ] Botón/Opción para crear un nuevo viaje
- [ ] Botón/Opción para realizar alguna modificación

## Base de datos

### Los endpoints utilizados son:

  - GET https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?country=ar&types=place&access_token=${TOKEN}
  - GET https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${long1}%2C${lat1}%3B${long2}%2C${lat2}?alternatives=false&geometries=geojson&overview=full&steps=false&access_token=${TOKEN}`


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
- [ ] __GET /user__:
  - Obtiene un listado de usuarios registrados
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /user/?name="..."__:
  - Obtener un listado de los usuarios que contengan la palabra ingresada como query parameter
- [ ] __GET /user/{id}__:
  - Obtener el detalle de un usuario en particular
  - Debe traer solo los datos pedidos en la ruta de detalle del usuario
- [ ] __PUT /user__:
  - Permite modificar campos de un usuario creado 
- [ ] __PUT /userCal__:
  - Permite modificar la calificación de un usuario  
- [ ] __POST /user__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de un nuevo usuario por body
  - Crea una nuevo usuario en la base de datos
- [ ] __DELETE /user__:
  - Permite eliminar un usuario creado 

  




### Deployment



