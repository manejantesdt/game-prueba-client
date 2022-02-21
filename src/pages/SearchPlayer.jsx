import { useSelector } from "react-redux";
import { CardPlayer } from "../components/CardPlayer";
import {
  BoldPlayersSections,
  BoldPlayersPagination,
} from "../styles/BoldPlayers";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import Paged from "../components/Paged";
import { FilterBar } from "../components/FilterBar";
import Spinner from "../components/Spinner";
import swal from "sweetalert";

export const SearchPlayer = () => {
  const navigate = useNavigate();
    const { searchPlayer,  } = useSelector((state) => state);

  const [currentPage, setCurrentPage] = useState(1);
  const [playersPerPage] = useState(18);
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOffirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = searchPlayer ? searchPlayer.slice(indexOffirstPlayer, indexOfLastPlayer)
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
    <>
      <Spinner/>
      {setTimeout(() => {
        <div>
         <h2>not found</h2>
          <a href="/" className="BackHome">
            Volver a la página principal
          </a>
      </div>
      }, 3000)}           
      
      
     
    </>    
  );
};