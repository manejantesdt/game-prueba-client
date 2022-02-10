
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



