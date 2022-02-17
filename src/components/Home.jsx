import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PlayersTen } from "./PlayersTen";
import { BoldPlayers } from "./BoldPlayers";
import { MainPanel } from "./MainPanel";
import { Footer } from "./Footer";
import { getPlayers,searchPlayers } from "../actions";
import "../styles/styles.scss";

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
      <Footer />
    </main>
  );
};
