import { useSelector, useDispatch } from "react-redux";
import { CardPlayer } from "./CardPlayer";
import { BoldPlayersSections } from "../styles/BoldPlayers";
import { searchPlayers } from "../actions";
import { useEffect } from "react";

export const SearchPlayer = () => {
  const dispatch = useDispatch();
  const { searchPlayer, nickname,Players } = useSelector((state) => state);

  useEffect(() => {
    dispatch(
      searchPlayers(nickname ? { nick_name: nickname } : { nick_name: "" })
    );
  }, [ Players]);

  // return nickname !== "" ? (
  //   <BoldPlayersSections>
  //     <div className="suplentes">
  //       {searchPlayer.map((j) => {
  //         return (
  //           <CardPlayer
  //             nickname={j.nickname}
  //             image={j.avatar}
  //             key={j.Id}
  //             id={j.Id}
  //             status={j.status}
  //             ranking={j.ranking}
  //           />
  //         );
  //       })}
  //     </div>
  //   </BoldPlayersSections>
  // ) : (
  //   <>
  //     <h1>...loading</h1>
  //   </>
  // );
  return searchPlayer?.length > 0 || searchPlayer[0] !== null ? (
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
              ranking={j.ranking}
            />
          );
        })}
      </div>
    </BoldPlayersSections>
  ) : (
    <>
      <h1>...loading</h1>
    </>
  );
};
