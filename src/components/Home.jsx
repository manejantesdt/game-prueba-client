import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Players } from "./Players";
import { BoldPlayers } from "./BoldPlayers";
import { MainPanel } from "./MainPanel";
import "../styles/styles.scss";
import { getPlayers } from "../actions";

export const Home = () => {
  const { players } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // for (let i = 0; i === 2; i++) {
    //   console.log(i);
    //   dispatch(getPlayers({}));
    // }
    // i <= 2,i++ ? dispatch(getPlayers()) : null;
    // dispatch(searchPlayers({ nick_name: "" }));
    dispatch(getPlayers({}));
    // searchPlayers(nickname ? { nick_name: nickname } : { nick_name: "" });
  }, [dispatch]);

  return (
    <main>
      <Players />
      <MainPanel />
      <BoldPlayers />
    </main>
  );
};
