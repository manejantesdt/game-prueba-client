
import Players from "./Players";
import Login from "./Login";
import MainPanel from "./MainPanel";
import NavBar from "./NavBar";
import "../styles/styles.scss";





export const Home = () => {
  return (
    <main>
      <NavBar />
      <Players />
      <MainPanel />
      <Login />
      
    </main>
  );
};
