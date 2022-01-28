import React from "react";
import { CardPlayer } from "./CardPlayer";
import { useSelector } from "react-redux";
import { BoldPlayersSections } from "../styles/BoldPlayers";

export const BoldPlayers = () => {
  const { players } = useSelector((state) => state);
  return (
    <BoldPlayersSections>
      <div className="suplentes">
      {players.map((j) => {
            return (
              <CardPlayer
                nickname={j.nickname}
                image={j.avatar}
                key={j.id}
                id={j.id}
                status={j.status}
              />
            );
          })}
      </div>
    </BoldPlayersSections>
  );
};
