import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PlayersTen } from "./PlayersTen";
import { BoldPlayers } from "./BoldPlayers";
import { MainPanel } from "./MainPanel";
import "../styles/styles.scss";
import { getPlayers,searchPlayers } from "../actions";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchPlayers({nick_name:""}));
    dispatch(getPlayers({}));
  }, [dispatch]);

  return (
    <main>
      <PlayersTen />
      <MainPanel />
      <BoldPlayers />
    </main>
  );
};
