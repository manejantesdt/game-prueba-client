import React, { useEffect, createRef } from "react";
import { CreatePlayer } from "./CardPlayer";
import{useSelector} from 'react-redux';

// const Players = ({ jugadores, agregarTitular, agregarSuplente }) => {
//   const gridJugadores = createRef();

//   useEffect(() => {
//     setScrollContainer();
//     document.addEventListener("click", setScrollContainer);
//   });
 

//   // Función que fija el tamaño del grid de los jugadores
//   const setScrollContainer = (desktop = true) => {
//     let container = gridJugadores.current;
//     if (container) {
//       const generatedGrid = () => {
//         let items = container.getElementsByClassName("jugador");
//         let itemsLength = items.length;
//         let bp = window.matchMedia("(min-width: 640px)").matches
//           ? window.matchMedia("(min-width: 1024px)").matches
//             ? 4
//             : 2
//           : 1;

//         const getWidth = () => {
//           let n = bp + (itemsLength > bp ? 0.3 : 0);
//           return (itemsLength / n) * 100;
//         };
//         return `
//                 display: grid;
//                 grid-template-columns: repeat(${itemsLength}, 225px);
//                 grid-gap: 1rem;
//                 width : ${getWidth()}%;
//               `;
//       };
//       let styles =
//         !desktop && window.matchMedia("(min-width: 1024px)").matches
//           ? `display: grid; grid-row-gap: 1rem;`
//           : generatedGrid();
//       container.setAttribute("style", styles);
//     }
//   };

//   return (
//     <section>
//       <h2>Players</h2>
//       <div className="contenedor-jugadores">
//         <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
//           {jugadores.map((j) => {
//             return (
//               <CreatePlayer
//                 nickname={j.nickname}
//                 image={j.avatar}
//                 key={j.id}
//                 id={j.id}
//                 status={j.status}
//               />
//             );
//           })}
//           {/* {jugadores.map((j) => (
//             <article className="jugador" key={j.Id}>
//               <img src={j.avatar} alt={j.nickname} />
//               <h3>{j.nickname}</h3>
//               <div>
//                 <button onClick={() => agregarTitular(j)}>Top Ten</button>
//                 <button onClick={() => agregarSuplente(j)}>Bold Player</button>
//               </div>
//             </article>
//           ))} */}
//         </div>
//       </div>
//     </section>
//   );
// };

// const mapStateToProps = (state) => ({
//   jugadores: state.jugadores,
// });

// const mapDispatchToProps = (dispatch) => ({
//   agregarTitular(jugador) {
//     dispatch({
//       type: "AGREGAR_TITULAR",
//       jugador,
//     });
//   },
//   agregarSuplente(jugador) {
//     dispatch({
//       type: "AGREGAR_SUPLENTE",
//       jugador,
//     });
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Players);

 const Players =()=>{
  const {players}=useSelector(state=>state);
    const gridJugadores = createRef();

      useEffect(() => {
        setScrollContainer();
        document.addEventListener("click", setScrollContainer);
      });
     
    
      // Función que fija el tamaño del grid de los jugadores
      const setScrollContainer = (desktop = true) => {
        let container = gridJugadores.current;
        if (container) {
          const generatedGrid = () => {
            let items = container.getElementsByClassName("jugador");
            let itemsLength = items.length;
            let bp = window.matchMedia("(min-width: 640px)").matches
              ? window.matchMedia("(min-width: 1024px)").matches
                ? 4
                : 2
              : 1;
    
            const getWidth = () => {
              let n = bp + (itemsLength > bp ? 0.3 : 0);
              return (itemsLength / n) * 100;
            };
            return `
                    display: grid;
                    grid-template-columns: repeat(${itemsLength}, 225px);
                    grid-gap: 1rem;
                    width : ${getWidth()}%;
                  `;
          };
          let styles =
            !desktop && window.matchMedia("(min-width: 1024px)").matches
              ? `display: grid; grid-row-gap: 1rem;`
              : generatedGrid();
          container.setAttribute("style", styles);
        }
      };
    
      return (
        <section>
          <h2>Players</h2>
          <div className="contenedor-jugadores">
            <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
              {players.map((j) => {
                return (
                  <CreatePlayer
                    nickname={j.nickname}
                    image={j.avatar}
                    key={j.id}
                    id={j.id}
                    status={j.status}
                  />
                );
              })}
              {/* {jugadores.map((j) => (
                <article className="jugador" key={j.Id}>
                  <img src={j.avatar} alt={j.nickname} />
                  <h3>{j.nickname}</h3>
                  <div>
                    <button onClick={() => agregarTitular(j)}>Top Ten</button>
                    <button onClick={() => agregarSuplente(j)}>Bold Player</button>
                  </div>
                </article>
              ))} */}
            </div>
          </div>
        </section>
      );
    };
 
export default Players;
