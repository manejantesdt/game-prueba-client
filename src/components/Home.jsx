import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Players } from "./Players";
import { BoldPlayers } from "./BoldPlayers";
import { MainPanel } from "./MainPanel";
import "../styles/styles.scss";
import { getPlayers, searchPlayers } from "../actions";

export const Home = () => {
  const { players } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayers({}));
    dispatch(searchPlayers({ nick_name: "" }));
  }, [dispatch]);

  return (
    <main>
      <Players />
      <MainPanel />
      <BoldPlayers />
    </main>
  );
};
