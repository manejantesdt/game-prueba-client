import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PlayersTen } from "./PlayersTen";
import { BoldPlayers } from "./BoldPlayers";
import { MainPanel } from "./MainPanel";
import { getPlayers,searchPlayers } from "../actions";
import {StyledHome} from "../styles/Home"

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchPlayers({nick_name:"",order:"",status:""}));
    dispatch(getPlayers({}));
  }, [dispatch]);

  return (
    <StyledHome>
      <PlayersTen />
      <MainPanel />
      <BoldPlayers />
    </StyledHome>
  );
};
