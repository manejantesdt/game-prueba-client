import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Players } from "./Players";
import { BoldPlayers } from "./BoldPlayers";
import { MainPanel } from "./MainPanel";
import { SearchPlayer } from "./SearchPlayer";
import "../styles/styles.scss";
import { getPlayers, searchPlayers } from "../actions";

export const Home = () => {
  const { searchPlayer } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayers({}));
    dispatch(searchPlayers({ nick_name: "" }));
  }, []);

  // return searchPlayer?.length > 0 &&
  //   searchPlayer[0] !== null &&
  //   searchPlayer[0] !== "" ? (
  //   <main>
  //     <SearchPlayer />
  //   </main>
  // ) : (
  //   <main>
  //     <Players />
  //     <MainPanel />
  //     <BoldPlayers />
  //   </main>
  // );
  return (
    <main>
      <Players />
      <MainPanel />
      <BoldPlayers />
      {/* <SearchPlayer /> */}
    </main>
  );
};
