import { useSelector, useDispatch } from "react-redux";
import { CardPlayer } from "./CardPlayer";
import {
  BoldPlayersSections,
  BoldPlayersPagination,
} from "../styles/BoldPlayers";
import { searchPlayers, getPlayers } from "../actions";
import { useEffect, useState } from "react";
import Paged from "./Paged";

export const SearchPlayer = () => {
  const dispatch = useDispatch();
  const { searchPlayer, nickname, players } = useSelector((state) => state);

  useEffect(() => {
    dispatch(
      searchPlayers(nickname ? { nick_name: nickname } : { nick_name: "" }),
      // getPlayers({})
    );
  }, [players, nickname, dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [playersPerPage] = useState(18);
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOffirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = searchPlayer
    ? searchPlayer.slice(indexOffirstPlayer, indexOfLastPlayer)
    : [];

  const pagedTotal = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return searchPlayer?.length > 0 && searchPlayer[0] !== null ? (
    <>
      <BoldPlayersSections>
        <div className="suplentes">
          {currentPlayers?.map((j, i) => {
            return (
              <CardPlayer
                key={i}
                nickname={j.nickname}
                image={j.avatar}
                id={j.Id}
                status={j.status}
                ranking={j.ranking}
              />
            );
          })}
        </div>
      </BoldPlayersSections>

      <BoldPlayersPagination>
        <div className="pagesContainer">
          <Paged
            playersPerPage={playersPerPage}
            searchPlayer={searchPlayer.length}
            pagedTotal={pagedTotal}
            currentPage={currentPage}
          />
        </div>
        <div className="returnContainer">
          <a href="/" className="BackHome">
            Volver
          </a>
        </div>
      </BoldPlayersPagination>
    </>
  ) : (
    <>
      <h4>...descargando búsqueda</h4>
    </>
  );
};
