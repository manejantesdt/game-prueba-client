import {Players} from "./Players";
import {BoldPlayers} from "./BoldPlayers";
import {MainPanel} from "./MainPanel";
import "../styles/styles.scss";

export const Home = () => {
  return (
    <main>
      <Players />
      <MainPanel />
      <BoldPlayers />
    </main>
  );
};
