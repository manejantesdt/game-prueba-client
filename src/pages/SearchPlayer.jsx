import { useSelector, useDispatch } from "react-redux";
import { CardPlayer } from "../components/CardPlayer";
import {
  BoldPlayersSections,
  BoldPlayersPagination,
} from "../styles/BoldPlayers";
import { searchPlayers,} from "../actions";
import { useEffect, useState } from "react";
import Paged from "../components/Paged";
import { FilterBar } from "../components/FilterBar";
import Spinner from "../components/Spinner";

export const SearchPlayer = () => {
  const dispatch = useDispatch();
  const { searchPlayer, nickname, players } = useSelector((state) => state);

  useEffect(() => {
    dispatch(
      searchPlayers(nickname ? { nick_name: nickname } : { nick_name: "" }),
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
    <FilterBar />
      <BoldPlayersSections>
        <div className="suplentes">
          {currentPlayers?.map((player, i) => {
            return (
              <CardPlayer
                key={i}
                nickname={player.nickname}
                image={player.avatar}
                id={player.Id}
                status={player.status}
                ranking={player.ranking}
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
            Volver a la página principal
          </a>
        </div>
      </BoldPlayersPagination>
    </>
  ) : (
      <Spinner />
  );
};