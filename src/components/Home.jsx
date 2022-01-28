
import Players from "./Players";
import Login from "./Login";
import MainPanel from "./MainPanel";
import "../styles/styles.scss";





export const Home = () => {
  return (
    <main>
      <Players />
      <MainPanel />
      <Login />
      
    </main>
  );
};
