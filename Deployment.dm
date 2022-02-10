## Despliegue 📦

_Aquí te dejamos instrucciones paso a paso sobre como hacer el deploy de este proyecto utilizando el servicio S3 de AWS_

Lo primero que tenemos que hacer para es [crear una cuenta en la página web de amazon web services]  (https://docs.aws.amazon.com) o inicar sesión si ya tenemos una cuenta.
En los servicios de AWS buscamos IAM para [crear un nuevo usuario IAM] (https://docs.aws.amazon.com/es_es/es_es/IAM/latest/UserGuide/id_roles_create.html). 
Introducimos un nombre de usuario, (por ejemplo serverless-admin), le damos acceso mediante programación.
En la siguiente ventana, le vamos a asignar los permisos vamos a ir a la opción "asociar directamente las políticas existentes" y vamos a buscar y seleccionar únicamente
"AministratorAccess". Vamos al siguiente, dejamos vacío (añadir etiquetas es opcional), vamos a revisar y clickeamos en crear usuario.  

Nuestro usuario se crea y tenemos el Id de acceso y la clave secreta. No reveles tus claves a nadie. Es muy importante que descarges el archivo csv que las contiene y lo guardes o bien las copias en un bloc de notas. 

Después de obtener estas claves vas a instalar AWS CLI. 

Para [ instalar AWS CLI sigue los pasos en esta documentación:] (https://docs.aws.amazon.com/es_es/cli/latest/userguide/cli-chap-install.html)
Vas a elegir instalar la versión más reciente de la AWS CLI, es decir, la versión 2.

Aquí tienes más información para que puedas tener un conjunto de [credenciales de AWS válidas configuradas en tu sistema] (https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html).

Una vez que tengas AWS instalado y configurado, vas a ir a la terminal y ejecutar el siguiente comando: 

### `aws configure` 

Al presionar enter nos pedirá la clave de acceso que hemos obtenido de nuestro usuario IAM:

```sh
AWS_ACCESS_KEY_ID  (ingresa tu clave de acceso)  -> Enter

AWS_SECRET_ACCESS_KEY  (ingresa tu clave secreta)  -> Enter

AWS_DEFAULT_REGION  (ingresa la región de tu cuenta de Amazon, por ejemplo us-west-1)  -> Enter

Default output format [None]: (lo dejamos vacío)  -> Enter
```

Y así tienes tu AWS configurado en tu equipo.

Ahora estás listo para ejecutar la aplicación en tu equipo. En la consola de Visual Studio, asegúrate de estar en la carpeta donde descargaste el proyecto:

### `npm start` 

La aplicación se desplegará en http://localhost:3000/

Has verificado que la aplicación funciona! Vas a detener la aplicación con CTRL + C

Ahora vas a ir a tu cuenta de Amazon a crear tu S3. 

En tu cuenta de Amazon, busca S3 y cuando ingreses al panel, vas a "crear un nuevo backet". Ingresa el nombre de tu baquet, el que prefieras, por ejemplo S3-(tunombre). 
La región la dejas como está y clickeas en siguiente. En el paso 2 (Configuar opciones) no cambias nada y le das a siguiente. 

En el paso 3, "Establecer Permisos", actualmente te aparece bloqueado a todo el público pero tú quieres que el público sea capaz de entrar a tu backet para visualizar la página web. Entonces desmarcas la casilla "Bloquear todo acceso público". Te dará un mensaje de advertencia de que ahora todo el público tendrá acceso a este backet - es lo que queremos y le marcas la casilla donde reconoces que "esta configuración actual..." es la que necesitas. Vamos a la siguiente pestaña donde vas al botón "crear backet". y tu backet ya se ha creado: S3-(tunombre) 

Ahora entras en el backet y vas a ir a la pestaña propiedades y vas a entrar en la sección llamada "Alojamiento de sitio web estático".  Vas a marcar la casilla "usar este backt para alojar un sitio web". El el campo "documento de índice" escribimos index.html así y en "documento de error" también escribimos index.html
Vas a guardar. Ya tienes las propiedades configuradas. 

Ahora vas a ir a la pestaña "Permisos" y vas a tener que añadir un código. En "permisos" vas a "política de backet", y en "editor de políticas de bucket", pegas el siguiente código:

```sh
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicReadAccess",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::example-bucket/*"
      ]
    }
  ]
}
```
Lo único que tienes que hacer es copiar ese mismo código, y reemplazar donde dice "example-bucket" por el nombre exacto de tu backet. Ahora vas a guardar, te dirá que este
backet tiene acceso público (esto es lo que queremos porque es una web pública para que la gente entre a verla).

Nuestro backet ya está configurado.

Ahora ve a tu aplicación en Visual Staduio o en tu editor favorito y abre el archivo package.json
En la sección de scripts vamos a crear un nuevo script llamado "deploy", así:

```sh
"deploy": "aws s3 sync build/ s3://example-bucket --acl public-read"
```

Reemplaza donde dice "example-backet" por el nombre de tu backet. Guardas los cambios y ya tienes tu aplicación lista para ser deployada en tu backet de S3 en AWS.

En la consola de Visual Studio, ejectua el siguiente comando:

### `npm run build #`

Lo que hace este comando es crear el fichero "build", es decir, todos los ficheros que se tienen que subir a un servidor para que funcione. Este comando
si abrimos nuestro archivo package.json está dentro de los "scripts", así:

```sh
"build": "react-scripts build",
```

El script deploy toma la carpeta "build" y la sube al S3, y la publica con "public-read" (para que la gente la pueda leer).

Así que ahora puedes introducir el siguiente comando:

### `npm run deploy`

Esto se va a ocupar de subir tu aplicación al S3 de Amazon. Cuando termine, puedes ir a tu cuenta de Amazon, buscar tu backet y ver que todo lo que contiene la carpeta build se ha subido automáticamente con el comando deploy desde tu consola. 

Si dentro de los archivos pinchas en el archivo index.html, verás que tienes la ruta (url del objeto). Si haces click te llevará a tu página web. Verás la página que hemos construido con todos los archivos que has descargado. 

De esta manera has subido nuestra aplicación de React a un backet de AWS 😊
