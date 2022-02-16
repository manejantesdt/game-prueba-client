import { AboutSection } from "../styles/About";
import { Link } from "react-router-dom";

export const About = () => {
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
            para que esos elementos puedan ser reciclados.
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
           </div>
        <Link to="/">
          <button className="button_form">Volver </button>
        </Link>
      </article>
    </AboutSection>
  );
};
