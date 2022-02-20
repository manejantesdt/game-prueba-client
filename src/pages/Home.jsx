import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PlayersTen } from "../components/PlayersTen";
import { BoldPlayers } from "../components/BoldPlayers";
import { getPlayers,searchPlayers } from "../actions";
import {StyledHome} from "../styles/Home"
import {TopThree} from "../components/TopThree";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchPlayers({nick_name:"",order:"",status:""}));
    dispatch(getPlayers({}));
  }, [dispatch]);

  return (
    <StyledHome>
      <PlayersTen />
      <TopThree />
      <BoldPlayers />
    </StyledHome>
  );
};
