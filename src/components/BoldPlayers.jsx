import React from "react";
import { CardPlayer } from "./CardPlayer";
import { useSelector } from "react-redux";
import { BoldPlayersSections } from "../styles/BoldPlayers";
import Spinner from "./Spinner";

export const BoldPlayers = () => {
  const { players } = useSelector((state) => state);
  const boldPlayers=players.slice(10,16);
  return (
    <>
    {boldPlayers.length > 0 
    ? (
    <BoldPlayersSections>
      <h2>Jugadores Destacados</h2>
      <div className="suplentes">
      {boldPlayers.map((j) => {
            return (
              <CardPlayer
              nickname={j.nickname}
                image={j.avatar}
                key={j.Id}
                id={j.Id}
                status={j.status}
                ranking={j.ranking}
                />
                );
              })}
      </div>
    </BoldPlayersSections>
    ) : <Spinner />
    }
  </>
  );
};
