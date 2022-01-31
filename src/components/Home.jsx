import  {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Players} from "./Players"
import {BoldPlayers} from "./BoldPlayers";
import {MainPanel} from "./MainPanel";
import {SearchPlayer} from "./SearchPlayer";
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
      <SearchPlayer />
    </main>
  );
};
