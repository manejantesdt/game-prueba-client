import React from "react";
import { CardPlayer } from "./CardPlayer";
import { useSelector } from "react-redux";
import { BoldPlayersSections } from "../styles/BoldPlayers";

export const BoldPlayers = () => {
  const { players } = useSelector((state) => state);
  const bold = players.slice(24,50);
  return (
    <BoldPlayersSections>
      <div className="suplentes">
      {bold.map((j) => {
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
