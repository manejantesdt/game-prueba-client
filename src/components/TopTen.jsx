import React,{ useEffect } from "react";
import fondo from "../img/podio.png";
import { TopTenSection } from "../styles/TopTen";
import { useSelector } from "react-redux";

export const TopTen = () => {
  var { players } = useSelector((state) => state);
  useEffect(() => {}, [players]);
  players = players.slice(0, 3);
  return (
    <TopTenSection>
      <div className="cancha">
        <img src={fondo} alt="fondo" />
        {players?.map((player,i) => {
          return (
            <div className="jugador" key={i}>
              <img src={player.avatar} alt="jugador" />
            </div>
          );
        })}
      </div>
    </TopTenSection>
  );
};
