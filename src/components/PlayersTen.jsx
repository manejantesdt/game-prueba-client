import React, { useEffect, createRef } from "react";
import { CardPlayer } from "./CardPlayer";
import { useSelector, useDispatch } from "react-redux";
import { BoldPlayersSections } from "../styles/BoldPlayers";
import Spinner from "./Spinner";

export const PlayersTen = () => {
  // const dispatch = useDispatch();
  const { players } = useSelector((state) => state);
  // const gridJugadores = createRef();

  // useEffect(() => {
    // setScrollContainer();
    // document.addEventListener("click", setScrollContainer);
  // }, [players?.length,dispatch]);

  // const setScrollContainer = (desktop = true) => {
  //   let container = gridJugadores.current;
  //   if (container) {
  //     const generatedGrid = () => {
  //       let items = container.getElementsByClassName("jugador");
  //       let itemsLength = items.length;
  //       let bp = window.matchMedia("(min-width: 640px)").matches
  //         ? window.matchMedia("(min-width: 1024px)").matches
  //           ? 4
  //           : 2
  //         : 1;

  //       const getWidth = () => {
  //         let n = bp + (itemsLength > bp ? 0.3 : 0);
  //         return (itemsLength / n) * 100;
  //       };
  //       return `
  //                   display: grid;
  //                   grid-template-columns: repeat(${itemsLength}, 225px);
  //                   grid-gap: 1rem;
  //                   width : ${getWidth()}%;
  //                 `;
  //     };
  //     let styles =
  //       !desktop && window.matchMedia("(min-width: 1024px)").matches
  //         ? `display: grid; grid-row-gap: 1rem;`
  //         : generatedGrid();
  //     container.setAttribute("style", styles);
  //   }
  // };
  const tenPlayers = players.slice(3, 10);
  return (
    <>
      {players.length > 0 ? (
    <BoldPlayersSections>
      <h2>Top 10</h2>
      <div className="suplentes one-row-grid">
        {/* <div ref={gridJugadores}  */}
        {/* onClick={() => setScrollContainer.bind(this)} */}
        {/* > */}
          {
            tenPlayers.map((j) => {
            return (
              <CardPlayer
                nickname={j.nickname}
                image={j.avatar}
                key={j.Id}
                id={j.Id}
                ranking={j.ranking}
                status={j.status}
              />
            );
          })
        }
        {/* </div> */}
      </div>
    </BoldPlayersSections> 
      ) : <Spinner />}
    </>
  );
};
