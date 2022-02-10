# Recicle Being - Proyecto Grupal

Recicle Being es una página web creada como prueba técnica para la empresa CrediTu. 
La idea general fue crear una aplicación para el salón de la fama de un juego imaginario. 
El desafío consistió en desarrollar una aplicación web usando un framework SPA, requerida por 
los creadores de un juego hipotético que desean ofrecer a sus usuarios la posibilidad de consultar 
quiénes son los jugadores del mismo. 

## 💻 Puedo ver esta aplicación en vivo?

Claro que sí! Tanto el Front-end como el Back-end fueron deployadas utilizando diferentes servicios en AWS (Lambda, Dynamo, S3). 
Puedes visitar la versión online haciendo click en el siguiente  enlace:
https://dfuf67ce7t2lm.cloudfront.net/

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

Lo primero que tenemos que hacer para es [crear una cuenta en la página web de amazon web services]  (https://docs.aws.amazon.com) o inicar sesión si ya tenemos una cuenta.
En los servicios de AWS buscamos IAM para [crear un nuevo usuario IAM] (https://docs.aws.amazon.com/es_es/es_es/IAM/latest/UserGuide/id_roles_create.html). 
Introducimos un nombre de usuario, (por ejemplo serverless-admin), le damos acceso mediante programación.
En la siguiente ventana, le vamos a asignar los permisos vamos a ir a la opción "asociar directamente las políticas existentes" y vamos a buscar y seleccionar únicamente
"AministratorAccess" y vamos al siguiente, dejamos vacío (añadir etiquetas es opcional), vamos a revisar y clickeamos en crear usuario.  Nuestro usuario se crea y tenemos el Id de acceso y la clave secreta. No reveles tus claves a nadie. Es muy importante que descarges el archivo csv que las contiene y lo guardes o bien las copias en un bloc de notas.

Después de obtener estas claves vas a ir al terminal y vas a instalar AWS CLI. 
Para [ instalar AWS CLI sigue los pasos en esta documentación:] (https://docs.aws.amazon.com/es_es/cli/latest/userguide/cli-chap-install.html)
Vas a elegir instalar la versión más reciente de la AWS CLI, es decir, la versión 2.
Aquí tienes más información para que puedas tener un conjunto de [credenciales de AWS válidas configuradas en tu sistema] (https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html).
vez que tengamos el a ws clic instalado
el siguiente comando que tenemos que
ejecutar es a w
ws lo configure y vamos a intro y me
dice que a bordo no saldrá de esto yo ya
tengo una clave creada pero nos impedirá
meter el acceso a la clave de acceso
el aib y esta clave es exactamente la
que nos ha dado el usuario está de aquí
la copiamos vamos al terminal y la
pegamos perfecto ahora me dice que que
pegue para en la clave secreta pues es
la que tenemos aquí al lado está aquí la
copiamos
y aquí la pegamos
perfecto aquí nos dice que en qué región
vamos a tener nuestro nuestro servidor
no esto va que no estuviese 3 vale donde
podemos ver esto pues si vamos aquí a la
cuenta de amazona ws vinieron aquí botón
derecho a abrir una nueva pestaña vale
ahora aquí arriba donde pone tu nombre
de usuario soporte en medioambiente en
el norte de virginia si desplegamos vale
yo tengo yo estoy recibida del norte de
virginia y aquí a la derecha nos sale el
aquí de este servidor que es ese guión y
yo uno pues esto es lo que tenemos que
poner así que escribimos ue se vale que
era
1 si no me equivoco perfecto de aussa
intro aquí lejos está el cual vacío
vamos a tener nuestro abulense en
nuestro equipo configurado perfecto
ahora lo que tenemos que hacer es crear
una nueva aplicación del río así que me
voy a mover al escritorio si cabo cede
burrito play de esto hay y ahora qué
hago yo y voy a hacer clic clic
y voy a llamar a la aplicación por
ejemplo riac a w s 1 s 3 vale voy a
llamar a la aplicación vía s 3 y hoy
entro me dice que
que no ha equivocado he puesto ya aquí
escribe es n p x en el px perfecto le
damos nos queda la aplicación dejamos
que termine de crear la esto depende el
equipo y depende la conexión a internet
tardará menos o más suele tardar pues
cerca de entre 30 segundos y un minutito
así que nada vamos a dejar que termine
de que la aplicación y ahora volvemos
perfecto ya tengo en la aplicación
nuestra aplicación creada aquí tengo la
carpeta vale y la vamos a abrir y lo que
tenemos es simplemente una aplicación de
riad sencilla y básica perfecto ahora lo
que van a hacer es abrir esta aplicación
con nuestro editor de código en este
caso yo tengo el mismo estudio
así que hago cd me muevo a la carpeta
vale hago con punto y aquí me abre el
editor vale si yo no digo algo que vaya
país dado para que yo voy a estar me
ejecutará la aplicación para que la
tengo aquí
aquí está en cuanto cargue el servicio y
está despegando la aplicación perfecto
aquí tenemos funcionando vamos a cambiar
esto para que veáis que todo funciona
por ejemplo no vamos aquí al xérez al pp
y van a poner el nombre que queramos por
ejemplo
riad agustín wss 3 así a sí mismo y aquí
yo tengo a todos de acá austin a w a s 3
vale perfecto esta aplicación funciona
vamos a parar qué es lo que tenemos que
hacer hacemos que ir a amazon y quedar
nuestro s 3 para ello vamos a la vez a
amazon aquí vale abrimos este panel y
aquí vamos a buscar ese 3 aquí los
bikers s 3 entramos encontraremos algo
parecido a esto vale yo tengo varios
bancos ya creados pero vosotros lo
debéis tener vacío vamos a decirle que
creemos que queremos crear un nuevo
baquet vale aquí ponemos el nombre que
de nuestro baquet que nosotros creamos
por ejemplo voy a poner guiar a ps3
guión agustín vale la región la voy a
dejar así y esto lo voy a dejar así
efecto le damos la siguiente aquí nos
pedirá el tema de permisos bajamos y
aquí en configuración avanzada lo así
que queremos pero bueno pero estaba
régimen ta ta ta ta ta ta bloqueo de
objetos no esto lo vamos a ganar si le
vamos a dar siguiente y aquí aquí
tenemos la sección de permisos
actualmente no lo da bloqueado a todo el
público pero nosotros queremos que el
público sea capaz de entrar nuestro
baquet para visualizar la página web lo
cual hacemos quitamos esto nos dice no
tirar que des gritando el bloqueo todo
todo todo el público tendrá acceso este
va que es lo que queremos y le decimos
aquí reconozco que esta configuración
actual es la que yo necesito vale le
damos a siguiente y esto tenía que dar
algo parecido a esto vale
amazon suele ir cambiando sus pantallas
vale pero no cambiará mucho así que hago
precio esto debéis temer
le vamos a quedar barquet y no estaba
que ya se ha creado aquí lo tenemos bear
s 3 guión agustín ahora lo que vamos a
hacer es entrar dentro del bar qué
perfecto y qué es lo que vamos a hacer
vamos a ir exactamente aquí a
propiedades que aquí en propiedades
vamos a buscar la excepción que pone
alojamiento de sitio web
estático le vamos a pinchar y aquí
hacemos usar este market para alojar un
sitio web vale donde pone el documento
índice ponemos index
punto html así y doble de error también
document error punto index html y vamos
a guardar vale ya tenemos las
propiedades
configuradas ahora vamos a ir aquí a
permisos y aquí vamos a tener que añadir
un código vamos a permisos y aquí en
permisos vamos a darle a la política de
baquet entramos y aquí uso copiar un
código que os voy a dejar en los
recursos bueno en la descripción de este
vídeo así que vais a la descripción de
este vídeo y yo tendréis un código como
éste es exactamente el mismo tal cual
vale no voy a modificar nada y aquí lo
único que tenemos que hacer es copiar el
nombre de nuestro baquet este que
tenemos aquí lo copiamos ya que no la
ponen baquet
porque se empleaba que lo borramos y
pegamos el nombre de nuestro baquet y
deberá quedar algo como esto perfecto le
damos aquí a guardar nos dirá que este
va que tiene acceso público esto es lo
que queremos porque es una web pública
para que la gente entre a verla vale y
no estaba que ya estaría configurado
ahora
sólo nos queda irnos a nuestra
aplicación vale que tenemos aquí voy a
hacer esto un poquito más grande irnos
al fichero package puntos jason y aquí
los tips vamos a crear un nuevo script
ponemos una como barí este clip se va a
llamar por ejemplo de play valen dos
puntos y aquí vamos a añadir el
siguiente código y lo tengo aquí copiado
este grande que se ve así
este este código esta línea de código o
la voy a dejar también en los recursos
vale la descripción de este vídeo así
que ir y la coge jce
y no os olvidéis ya que vais a la
descripción suscribiros al canal
comentar y dar a like así que nada
continuamos ahora aquí lo que tenemos
que hacer es modificar esta línea vale
este nombre este nombre es exactamente
el mismo de aquí copiamos el nombre de
'los tubasket lo copiamos vamos a
nuestro paquete puntos jason y los
sustituimos cuales sean penn baquet de
esta manera así guardamos y ya tenemos
nuestra aplicación terminada para hacer
deploy en nuestro parque ds3 en amazon
web services para comprobarlo podemos ir
aquí vamos aquí a información general y
vemos que nuestro bakker está vacío
perfecto
ahora vamos a cerrar el editor de código
ya no lo necesitamos aquí estamos dentro
de nuestra aplicación si yo hago
uy lo que hacer es crear me vale del
fichero el muy vale el vil todos los
ficheros que se lleguen subir a un
servidor para que funcione este comando
si hacemos como punto ya abrimos nuestro
editor está aquí el para katz aquí mil
lo que hace es hacerle a que scripting y
el deploy lo que hace es la
carpeta 1000 y subirla al s 3 para
publicarla con público iris para que la
gente la pueda leer así que ahora
simplemente tengo que hacer hard deploy
de había intro y esto se va a ocupar de
subir nuestra aplicación al s 3 de
amazon en cuanto termine ya tendríamos
subida que ha tardado 5,6 segundos en
subirla si vamos a nuestro back que dice
que está vacío pero si yo refresco la
página vale ahora puedo ver datos ya
tengo todos lo que tengo aquí mira lo
que tengo aquí dentro débil todo esto
static favicon index server worker todo
lo tengo en mi ese 3 se ha subido
automáticamente con el comando y si yo
le entro por ejemplo aquí en index
puedo ver que aquí tengo la ruta si
pincho me llevaba mi página web vale
esta es la página que hemos construido y
equipo
update agustín a w s3 de esta manera
hemos subido nuestra aplicación gloria a
los bikers s 3 de amazon web services
así que nada espero que lo hayas
entendido todo que no hay gestión ningún
problema si tienes cualquier problema ya
sabes en la descripción en los
comentarios de este vídeo me podéis
preguntar lo que necesitéis así que nada
nos vemos en el siguiente vídeo



```
Da un ejemplo
```

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_


---
```
npm add vue-cli-plugin-s3-deploy@next
```

_Dí cómo será ese paso_

```
Da un ejemplo
```

_Y repite_

```
hasta finalizar
```

Después de la instalación, invoque el complemento con `vue invoque s3-deploy`.

Responda a las indicaciones de configuración. Esto inyectará un comando de secuencia de comandos `deploy` en su archivo `package.json`.

Implementa tu aplicación con `yarn deployment`.

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

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

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [React](https://es.reactjs.org/) - La librería de JavaScript para construir interfaces de usuario
* [Redux](https://es.redux.js.org/) - Redux es un contenedor predecible del estado de aplicaciones JavaScript. Lo hacemos combinado con React.
* [Styled Components](https://styled-components.com/) - La librería que nos permite estilizar nuestros componentes escribiendo código CSS en JavaScrip
* [Servicios de AWS]:(https://aws.amazon.com/) - Es la plataforma en la nube más adoptada y completa en el mundo
* [Amazon S3](https://aws.amazon.com/es/s3/) - Almacenamiento de objetos de Amazon creado para recuperar cualquier volumen de datos desde cualquier ubicación
* [Cypress](https://www.cypress.io/) - Un framework de testing moderno, es una de las herramientas más populares de testing


## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

* **Ramiro Villamizar ** - [pivotsk8](https://github.com/pivotsk8)
* **Marisa Lia Pascal ** - [Marisaliap](https://github.com/Marisaliap)
* **Nelson Albera ** - [nalbera](https://github.com/nalbera)
* **Gustavo Montero ** - [gamontero](https://github.com/gamontero)
* **Daneil Alberto Mena ** - [BtoMJ](https://github.com/BtoMJ)
* **Fabrizio Santandrea ** - [fabsantandrea](https://github.com/fabsantandrea)


## Licencia 📄

Este proyecto está bajo la Licencia de Dream Team Manejantes 

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.



---
⌨️ con ❤️ por [Manejantes](https://github.com/manejantesdt) 😊
