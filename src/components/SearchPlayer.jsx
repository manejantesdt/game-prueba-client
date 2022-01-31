import { useSelector } from "react-redux";
import { CardPlayer } from "./CardPlayer";
import { BoldPlayersSections } from "../styles/BoldPlayers";

export const SearchPlayer = () => {
  const { searchPlayer } = useSelector((state) => state);
  console.log(searchPlayer);
  return searchPlayer?.length > 0 ? (
    <BoldPlayersSections>
      <div className="suplentes">
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
      </div>
    </BoldPlayersSections>
  ):(<><h1>...loading</h1></>);
};
