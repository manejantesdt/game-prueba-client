import React,{ useEffect } from "react";
import fondo from "../img/podio.png";
import shadow from "../img/shadow.png";
import { TopTenSection } from "../styles/TopTen";
import { useSelector } from "react-redux";
import {CardPlayer}from "./CardPlayer"

export const TopTen = () => {

  var { players } = useSelector((state) => state);
  
  useEffect(() => {}, [players]);
  
  players = players.slice(0, 3);

  return (
    <TopTenSection>
      <div className="cancha">
        <div className="imgPodio">
          <img src={fondo} alt="fondo" />
          {players?.map((player, index) => {
            var playerPodio = "playerPodio" + ( index + 1 )
            var playerShadow = "playerShadow" + ( index + 1 )
            return (
              <div className={playerPodio}>
              <CardPlayer
              nickname={player.nickname}
              image={player.avatar} 
              key={player.Id}
              id={player.Id}
              ranking={player.ranking}
              status={player.status}
            />
             <div className={playerShadow}>
              //       <img src={shadow} alt="sombra"  />
              //     </div>
            </div>
              // <>
              //   <div className={playerPodio}>
              //     <img src={player.avatar} alt="jugador" />
              //     <div className={playerShadow}>
              //       <img src={shadow} alt="sombra"  />
              //     </div>
              //   </div>
              // </>
            );
          })}
        </div>
      </div>
    </TopTenSection>
  );
};
