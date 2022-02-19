import React,{ useEffect } from "react";
import { TopTenSection } from "../styles/TopTen";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Spinner from "./Spinner";

export const TopThree = () => {

  var { players } = useSelector((state) => state);
  
  useEffect(() => {}, [players]);
  
  players = players.slice(0, 3);

  return (
    <TopTenSection>
      <div className="cancha">
    {
      players.length > 0 ? (
            <div className="imgPodio">
              {
                players?.map((player, index) => {
                  return (
                    <div className="podioPlace" key={index}>
                      <div className="position">{index+1}</div>
                      <div className="avatarPosition">
                        <img src={player.avatar} />
                      </div>
                      <div className="rowPosition pulse">{player.nickname}</div>
                      <div className="rowPosition rank">{player.status}</div>
                      <div className="rowPosition score">{player.score}</div>
                      <div className="rowPosition">
                        <NavLink className="infoLink" to={`/id/${player.Id}`}>
                        + info    
                        </NavLink>
                      </div>
                    </div>
                  );
               })
              }
            </div>
          ) : <Spinner />
        }
          </div>
        </TopTenSection>
  );
};
