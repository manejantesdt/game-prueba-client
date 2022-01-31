import  {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Players} from "./Players"
import {BoldPlayers} from "./BoldPlayers";
import {MainPanel} from "./MainPanel";
import "../styles/styles.scss";
import { getPlayers } from '../actions';

export const Home = () => {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPlayers({}));
    })
  return (
    <main>
      <Players />
      <MainPanel />
      <BoldPlayers />
    </main>
  );
};
