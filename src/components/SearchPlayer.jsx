import { useSelector, useDispatch } from "react-redux";
import { CardPlayer } from "./CardPlayer";
import {
  BoldPlayersSections,
  BoldPlayersPagination,
} from "../styles/BoldPlayers";
import { searchPlayers,} from "../actions";
import { useEffect, useState } from "react";
import Paged from "./Paged";
import { FilterBar } from "./FilterBar";
import Spinner from "./Spinner";

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
            Volver a la página principal
          </a>
        </div>
      </BoldPlayersPagination>
    </>
  ) : (
      <Spinner />
  );
};
