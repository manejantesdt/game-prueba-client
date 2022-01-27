import Players from "./Players";
import Login from "./Login";
import MainPanel from "./MainPanel";
import NavBar from "./NavBar";
import "../styles/styles.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <NavBar />
      <Players />
      <MainPanel />
      <Login />
      <Link to="/about">About</Link>
    </main>
  );
};
