import { useSelector } from "react-redux";
import { useState } from "react";
import { CardPlayer } from "./CardPlayer";
import { BoldPlayersSections } from "../styles/BoldPlayers";
import Paged from "./Paged";
import { orderbyRanking } from '../actions';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export const SearchPlayer = () => {
  /* const allPlayers = useSelector((state) => state.searchPlayer) */
  const { searchPlayer } = useSelector((state) => state);
  const dispatch = useDispatch();

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

  const [order, setOrder] = useState(""); // esto es solo un estado local para que me renderize el ordenamiento por ranking

  function handleOrderByRanking(e) {
    e.preventDefault();
    dispatch(orderbyRanking(e.target.value));
    setCurrentPage(1);                               
    setOrder(`Ordenado ${e.target.value}`);        
}                                       
  return  searchPlayer?.length > 0 ?  (
    <BoldPlayersSections>
       <div>
            <select onClick={(e) => handleOrderByRanking(e)}>

            <option value="Order by Ranking">Order by Ranking</option>
            <option value="Desc">From higher to smaller</option>
            <option value="Asc">From smaller to higher</option>
             
            </select>
          </div>
      <div className="suplentes">
        {currentPlayers?.map((j) => {
          return (
            <Link /* className={styles.a} */ to={"/player/" + j.Id}>
              <CardPlayer
                nickname={j.nickname}
                image={j.avatar}
                id={j.Id}
                status={j.status}
                ranking={j.ranking}
              />
            </Link>
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
      {/* <div className="suplentes">
        {searchPlayer.map((j) => {
          return (
            <CardPlayer
              nickname={j.nickname}
              image={j.avatar}
              key={j.Id}
              id={j.Id}
              status={j.status}
            />
          );
        })}
      </div> */}
    </BoldPlayersSections>
) : (
  <>
      <h4>...loading search</h4>
  </>
    
) 

}