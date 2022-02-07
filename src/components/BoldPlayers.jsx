import React from "react";
import { CardPlayer } from "./CardPlayer";
import { useSelector } from "react-redux";
import { BoldPlayersSections } from "../styles/BoldPlayers";

export const BoldPlayers = () => {
  const { players } = useSelector((state) => state);
  const boldPlayers=players.slice(0,6);
 /*  const bold = players.slice(1,7); */
  return (
    <BoldPlayersSections>
      <h2>Bold Players</h2>
      <div className="suplentes">
      {boldPlayers.map((j) => {
            return (
              <CardPlayer
                nickname={j.nickname}
                image={j.avatar}
                key={j.Id}
                id={j.Id}
                status={j.status}
              />
            );
          })}
      </div>
    </BoldPlayersSections>
  );
};
