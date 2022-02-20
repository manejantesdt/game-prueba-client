import { CardPlayer } from "./CardPlayer";
import { useSelector } from "react-redux";
import { BoldPlayersSections } from "../styles/BoldPlayers";
import Spinner from "./Spinner";

export const PlayersTen = () => {
  const { players } = useSelector((state) => state);
  const tenPlayers = players.slice(3, 10);
  return (
    <>
      {players.length > 0 ? (
    <BoldPlayersSections>
      <h2>Top 10</h2>
      <div className="suplentes one-row-grid">
          {
            tenPlayers.map((player) => {
            return (
              <CardPlayer
                nickname={player.nickname}
                image={player.avatar}
                key={player.Id}
                id={player.Id}
                ranking={player.ranking}
                status={player.status}
              />
            );
          })
        }     
      </div>
    </BoldPlayersSections> 
      ) : <Spinner />}
    </>
  );
};