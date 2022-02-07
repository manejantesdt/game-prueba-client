import { useSelector, useDispatch } from "react-redux";
import { CardPlayer } from "./CardPlayer";
import { BoldPlayersSections } from "../styles/BoldPlayers";
import { searchPlayers } from "../actions";
import { useEffect, useState } from "react";
import Paged from "./Paged";

export const SearchPlayer = () => {
  const dispatch = useDispatch();
  const { searchPlayer, nickname, players } = useSelector((state) => state);

  useEffect(() => {
    dispatch(
      searchPlayers(nickname ? { nick_name: nickname } : { nick_name: "" })
    );
  }, [nickname, dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [playersPerPage] = useState(6);
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOffirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = searchPlayer
    ? searchPlayer.slice(indexOffirstPlayer, indexOfLastPlayer)
    : [];

  const pagedTotal = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
