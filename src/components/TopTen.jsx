import React,{ useEffect } from "react";
import { TopTenSection } from "../styles/TopTen";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import fondo from "../img/podio.png";
import shadow from "../img/shadow.png";
import confeti from "../img/confetti.gif";


export const TopTen = () => {

  var { players } = useSelector((state) => state);
  
  useEffect(() => {}, [players]);
  
  players = players.slice(4, 10);

  return (
    <TopTenSection>
      <div className="cancha">
        <div className="imgPodio">
          <img src={fondo} alt="fondo" />
          {
            players?.map((player, index) => {
            var avatarTempo = "avatarTempo" + ( index + 1 )
            // var playerShadow = "playerShadow" + ( index + 1 )
            // var playerInfo = "playerInfo" + ( index + 1 )

            console.log(player)
            return (
              <div className="columna">
                {/* <img src={confeti} alt="confeti" /> */}
                <div className="Number">
                  {index === 0 ? index +2 : index === 1 ? index: index + 1}
                </div>
                <div className="avatarPlayer">
                  <div className={avatarTempo}>
                    <img src={player.avatar} alt="jugador" />
                  </div>
                </div>
                <div className="rankInfo pulse">
                  <p className="podioNickName">{player.nickname ? player.nickname : "Sin Nombre"}</p>
                  <p className="podioStatus">{player.status}</p>
                  <p className="podioRank">{player.ranking}</p>
                  <p > <NavLink className="podioMasInfo" to={`/id/${player.Id}`}>+ info</NavLink></p>
                </div>
                {/* <div className="confetti"></div> */}
              </div>
              );
            })
          }
        </div>
      </div>
    </TopTenSection>
  );
};
