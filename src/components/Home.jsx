import Players from "./Players";
//import Login from "./Login";
import MainPanel from "./MainPanel";
import "../styles/styles.scss";
//import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <Players />
      <MainPanel />

    </main>
  );
};
