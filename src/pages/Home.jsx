import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlayersTen } from "../components/PlayersTen";
import { BoldPlayers } from "../components/BoldPlayers";
import { getPlayers,searchPlayers } from "../actions";
import {StyledHome} from "../styles/Home"
import {TopThree} from "../components/TopThree";

export const Home = () => {
  const dispatch = useDispatch();
  const { players } = useSelector((state) => state);

  useEffect(() => {
    dispatch(searchPlayers({nick_name:"",order:"",status:"",}));
    dispatch(getPlayers({}));
  }, [dispatch, players?.length]);

  return (
    <StyledHome>
      <TopThree />
      <PlayersTen />
      <BoldPlayers />
    </StyledHome>
  );
};
