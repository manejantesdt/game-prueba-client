import { useSelector, useDispatch } from "react-redux";
import { CardPlayer } from "./CardPlayer";
import { BoldPlayersSections } from "../styles/BoldPlayers";
import { searchPlayers } from "../actions";
import { useEffect, useState } from "react";
import Paged from "./Paged";

export const SearchPlayer = () => {
  const dispatch = useDispatch();
  const { searchPlayer, nickname, Players } = useSelector((state) => state);

  useEffect(() => {
    dispatch(
      searchPlayers(nickname ? { nick_name: nickname } : { nick_name: "" })
    );
  }, [Players,nickname,dispatch]);

  //paginado
  const [currentPage, setCurrentPage] = useState(1); //le paso el estado local con la primera página que se renderiza
  const [playersPerPage] = useState(6); //cuántos jugadores quiero por página
  const indexOfLastPlayer = currentPage * playersPerPage; //cuando empieza será 10
  const indexOffirstPlayer = indexOfLastPlayer - playersPerPage; // 0
  const currentPlayers = searchPlayer.slice(
    indexOffirstPlayer,
    indexOfLastPlayer
  ); //slice toma una porción del arreglo dependiendo lo que le estoy pasando por parámetro

  const pagedTotal = (pageNumber) => {
    setCurrentPage(pageNumber); //acá el paginado va a setear la pagina en el numero de pagina que se vaya clickeando
  }; //cuando setea la página los índices cambian y el slide se va modificando

  return searchPlayer?.length > 0 && searchPlayer[0] !== null ? (
    <BoldPlayersSections>
      <div className="suplentes">
        {currentPlayers?.map((j) => {
          return (
            <CardPlayer
              nickname={j.nickname}
              image={j.avatar}
              id={j.Id}
              status={j.status}
              ranking={j.ranking}
            />
          );
        })}
      </div>

      <div>
        <Paged
          playersPerPage={playersPerPage}
          searchPlayer={searchPlayer.length}
          pagedTotal={pagedTotal}
        />
      </div>
    </BoldPlayersSections>
  ) : (
    <>
      <h4>...loading search</h4>
    </>
  );
};
