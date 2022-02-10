import { AboutSection } from "../styles/About";
import { Link } from "react-router-dom";

export const About = () => {
  console.log("hola, borrenlo después");
  return (
    <AboutSection>
      <article>
        <div></div>
        <div>
          <br />
          <br />
          <h2>Acerca de Recicle Being</h2>
          <p>
            Cada vez más personas en todo el mundo son conscientes de la
            necesidad de cuidar nuestro medio-ambiente. Sin embargo cuidar
            nuestro entorno requiere, para la mayoría de nosotros, del
            desarrollo de nuevos hábitos, como por ejemplo separar los residuos
            clasificándolos en recipientes adecuados y así facilitar la tarea
            para que esos elementos puedan ser reciclados..
          </p>
          <p>
            Este juego nació de una idea eco-responsable, la cual desea enseñar
            a las nuevas y no tan nuevas generaciones sobre la importancia de
            reciclar.
          </p>
          <p>
            El nombre del juego recuerda a la famosa "papelera de reciclaje" de
            Windows. Lo aprovechamos como un juego de palabras divertido donde
            el sentido de una simple papelera donde se descartan elementos que
            ya no sirven, se transforma en un Ser (being) que Recicla. Sin duda
            la actitud de reciclar requiere del desarrollo de nuestro ser!{" "}
          </p>
          <p>
            Así, Recicle Being fue creado como un modo entretenido e interesante
            de tener la experiencia de convertirnos en un "Ser Reciclador", un
            personaje que contribuye a crear un medio-ambiente más saludable.{" "}
          </p>
          <p>
            Creemos que una de las mejores maneras de aprender es jugando! la
            mayoría no puede aprender de un libro. Pero sabemos que si jugamos a
            reciclar, terminaremos aprendiendo y aplicándolo en la vida real.
          </p>
          <p>
            Diseñamos un juego donde puedes crear tu propio personaje, un
            jugador con tu propio nickname, donde puedes elegir tu avatar
            favorito. Además, entre otras funcionalidades, puedes editar los
            jugadores que quieras y también eliminarlos.{" "}
          </p>
          <p>
            En Recicle Being como en cualquier otro juego siempre hay jugadores
            que se destacan por sobre los demás, y merecen estar en un lugar
            especial.{" "}
          </p>
          <p>
            Por eso creamos el "Salón de la Fama", una solución especialmente
            desarrollada para reconocer a los 10 jugadores con mayor ranking
            entre todos los jugadores. También nos pareció justo reconocer a
            otros 6 jugadores que, sin estar entre los 10 mejores, aún son muy
            buenos así que reciben su reconocimiento en la sección "Bold
            Players"{" "}
          </p>
          <p>
            Desarrollar las habilidades de reciclar requiere constancia,
            dedicación, amor por la naturaleza, y tiempo. Por eso es importante
            reconocer a quienes con esfuerzo se destacan por sobre los demás.{" "}
          </p>
          <p>
            En la barra de búsqueda podrás buscar cualquier usuario, tanto por
            ID como por nickname y también por status. De esta forma, encontrar
            al usuario que buscas es muy fácil.{" "}
          </p>
          <p>
            Una funcionalidad que destaca en el Salón de la fama, es que puedes
            filtrar a los jugadores por status: Oro, Plata, Bronce, Hierro. Esta
            última categoría es la que obtienes cuando creas un nuevo jugador,
            por lo tanto aún no acumula puntos para ascender al status
            siguiente.{" "}
          </p>
          <p>
            Esperamos que disfrutes el juego mientras aprendes conceptos
            valiosos y desarrollas nuevos hábitos amigables con el medio
            ambiente.
          </p>
          <p>
            Tienes nuestro profundo agradecimiento por ser parte de esta
            propuesta...
          </p>
          <p>
            {" "}
            ¡Empieza a jugar y diviértete mientras reciclas! Esperamos verte
            en el podio muy pronto :){" "}
          </p>
          {/*  <p>
            El personaje principal contribuye a cambiar el mundo reciclando
            elementos que encuentra en los tableros (son varios escenarios
            distintos como un bosque, una ciudad, un volcán, una montaña, etc. )
            El jugador tiene desafíos breves, tiene que reciclar envases de
            plástico, botellas, cartón, aluminio, cables, envases, etc. El
            ranking puede ser por el nivel de experiencia del jugador y el
            status (oro, plata y bronce) podría ser competitivo. El estilo es de
            tipo cartoon donde los tableros pueden presentar bosques. Al
            personaje le van apareciendo basura o elementos que el personaje
            tiene que ir limpiando o reciclando. En la ciudad encuentra muchas
            cosas de plástico y envases. En el bosque se encuentra con un río
            donde con una red tiene que limpiar la basura que se ha acumulado.
            Entorno del juego:
          </p>
          <>
            <ul>
              <li>
                En bronce tiene un solo tablero con una dificultad pequeña; el
                escenario es un bosque con un río.{" "}
              </li>
              <li>
                En plata tiene otro tablero donde aumenta la dificultad; el
                escenario es una fábrica.{" "}
              </li>
              <li>
                En oro accede a otro tablero que es una ciudad donde se puede
                encontrar en un espacio abierto como una plaza, o bien en un
                callejón o un edificio en particular.{" "}
              </li>
            </ul>
          </>
          <br />
          <br />
          <h3>Los personajes: </h3>
          <>
            <ul>
              <li>
                Los personajes principales puede ser un humano hombre o mujer
                donde el jugador puede elegir el skin (avatar)
              </li>
              <li> Personajes secundarios:</li>
              <li>
                a Animales (un zorrino que te apesta, un pájaro y un perro
                molesta)
              </li>
              <li>
                b Elementos tóxicos en la naturaleza o en una fábrica que no se
                pueden tocar
              </li>
              <li>
                c Otros recicladores que le pueden robar lo que estás reciclando
                y/o competir con él
              </li>
              <li>
                d Un político que te quiere imponer sus reglas y que pagues
                impuestos para reciclar
              </li>
              <li>e Un personaje que tala un bosque es uno de sus enemigos</li>
              <li>
                f El dueño de la empresa que no apoya las iniciativas para
                renovar es otro de los personajes antagónicos
              </li>
            </ul>
          </>
          <br />
          <br />
          <h3>Experiencia General, Jugabilidad y Estilo Visual.</h3>
          <p>
            Las reglas y mecánicas de este juego son claras, fáciles de
            comprender y hacen que la experiencia del usuario sea agradable y
            que el jugador se sienta involucrado y entusiasmado a seguir jugando
            a medida que aprende a jugarlo. Al mismo tiempo son intuitivas y le
            van presentando retos de manera de mantener su interés. Su estilo
            visual es de tipo cartoon, con colores vivos y una dinámica activa,
            ágil, divertida (estilo Popeye, Tom y Jerry, Mickey Mousse, etc)
          </p>
          <br />
          <br />
          <h3>Mecánicas del Juego</h3>
          <p>
            Es un juego de movimiento y de progresión de niveles de personajes
            ya que el personaje progresa según su puntaje, pasando de un nivel a
            otro a medida que gana experiencia, con 3 niveles de complejidad. Es
            de competencia entre personajes por lo tanto también incluye algunos
            elementos de estrategia.{" "}
          </p>

          <p>
            Otras mecánicas secundarias son los tableros, consistiendo en
            partidas de 5 minutos en las cuales se enfrentan dos o más jugadores
            de niveles similares donde gana aquel que recicle más, generando un
            puntaje según su desempeño (el ganador gana el puntaje máximo y los
            demás jugadores un puntaje decreciente según su desempeño).
          </p>
          <br />
          <br />
          <h3>Controles</h3>
          <p>
            Se usa TAP en la pantalla táctil para mover el personaje de un lado
            al otro y para recoger cosas.
          </p>
          <br />
          <br />
          <h3>Puntos Clave</h3>
          <p>Puntos destacados del juego son:</p>
          <p>
            <strong>1.</strong> Es atractivo visualmente. Se hace mucho énfasis
            en la calidad de los gráficos y sonidos
          </p>
          <p>
            <strong>2.</strong> Se trata de un tema actual que puede despertar
            interés de los usuarios
          </p>
          <p>
            <strong>3.</strong> Es ágil y fácil de jugar, de una rápida curva de
            aprendizaje.{" "}
          </p>
          <p>
            <strong>4.</strong> Es competitivo y a la vez fomenta el juego con
            otros, lo que lo hace sociable.
          </p>
          <p>
            <strong>5.</strong> Es accesible porque no tiene restricciones de
            edad ni de género.
          </p>
          <p>
            <strong>6.</strong> Es multiplataforma, se usa en tablets, celulares
            Android, y PC.
          </p>
          <p>
            <strong>7.</strong> Se puede obtener desde cualquier plataforma de
            descarga de manera rápida.
          </p>
          <p>
            <strong>8.</strong> Alto contenido de actualización.
          </p>
          <p>
            <strong>9.</strong> Es divertido.
          </p>
          <p>
            <strong>10.</strong> Es interactivo.
          </p>
          <p>
            <strong>11. </strong>Excelente relación costo-beneficio.{" "}
          </p>
          <p>
            Este juego destacaría en el mercado porque aborda un tema de un alto
            valor - por el impacto que puede tener la educación en ecología
            sobre la sociedad en general. El reciclado no es un tema frecuente
            abordado en los video-juegos, es educativo y al mismo tiempo es
            divertido y fácil de jugar.
          </p>
          <br />
          <br />
          <h3>Audio</h3>
          <p>
            Describe el estilo del audio del juego: Estilo musical (puedes usar
            referencias de otros juegos, películas o artistas musicales).
            Efectos de sonido (ataques, sonido ambiente y otros efectos).
          </p>
          <br />
          <br />
          <h3>Flujo y Narrativa</h3>
          <p>
            La finalidad del juego es recolectar la mayor cantidad de desechos
            reciclables en un tablero evitando los obstáculos definidos
            aleatoriamente por el juego que añade una dificultad a cada tablero.
            Estos obstáculos pueden ser elementos del entorno o personajes
            secundarios. Gana aquel que haya recolectado la mayor cantidad de
            desechos posibles. El personaje protagonista es el avatar que elija
            el jugador. Los antagonistas (enemigos principales) varían según el
            nivel en el que se encuentre.{" "}
          </p>
          <br />
          <br />
          <h3>¿Cómo Jugar?</h3>
          <p>
            El usuario juega por primera vez puede acceder a un tutorial con las
            indicaciones, reglas del juego y con ayudas en pantalla de
            asistencia al juego. Opcionalmente puede practicar algunos comandos
            y atajos de teclado antes de iniciar el juego. Desde la interface
            principal el usuario podrá acceder rápidamente a un tablero (Jugar
            ahora!). Para empezar a jugar basta con crear su personaje y hacer
            TAP en Jugar ahora! El juego te dirige a tu primera partida, donde
            encontrará otros jugadores de un nivel similar al del usuario.{" "}
          </p>
          <br />
          <h3>Niveles disponibles</h3>
          <p>
            El juego consta de 3 niveles en total, y cada uno de ellos presenta
            un tablero diferente. Al aumentar su puntaje el usuario pasa a un
            nuevo escenario con una dificultad mayor y con personajes
            secundarios diferentes.{" "}
          </p>

          <p>
            Por ejemplo: el primer escenario se desarrolla en un bosque con un
            río y tiene un nivel de dificultad bajo, donde el usuario debe
            intentar limpiar y/o reciclar los elementos y desechos contaminantes
            que encuentra en ese ambiente.{" "}
          </p>

          <p>
            En esta instancia del juego van a aparecer obstáculos, en este caso
            animales que entorpecen la tarea del jugador y lo distraen. Hay un
            pájaro carpintero que se le para en la cabeza. El jugador debe
            evitar que lo pique porque si eso pasa, el jugador correrá por todo
            el tablero durante 5 segundos.{" "}
          </p>
          <p>
            Otro personaje secundario es un zorrillo que lo orina con un olor
            pestilente, y que hace que el jugador se ralentice; y otro es un
            perro que permanente le demanda atención y se interpone en el camino
            limitando el movimiento hacia algunas cosas.{" "}
          </p>
          <p>
            El enemigo principal de este tablero es un leñador, que desde la
            parte superior del tablero te tira/bota con motosierras. De manera
            similar, en los otros tableros (fábrica y ciudad), el jugador se
            encuentra con personajes secundarios que hacen su tarea tediosa o
            lenta, y tienen sus enemigos principales.
          </p>
          <br />
          <br />
          <h3>Ranking</h3>

          <p>
            Alcanzado un determinado puntaje el jugador pasa de bronce a plata,
            y de plata a oro. Cada partida otorga puntos. El ranking para ser el
            top 10 se toma por los puntos hechos en cada semana. El salón de la
            fama incluye a aquellos 10 jugadores con mayor rango, que por su
            experiencia en el juego acumulan la mayor cantidad de puntos de
            manera histórica, es decir, esos jugadores juegan de manera habitual
            y sostienen sus puntajes por más tiempo.
          </p>
          <hr />
          <p>
            <a href="/contact-us">Contact Us</a>
          </p>
         */}
        </div>
        <Link to="/">
          <button className="button_form">Back </button>
        </Link>
      </article>
    </AboutSection>
  );
};
