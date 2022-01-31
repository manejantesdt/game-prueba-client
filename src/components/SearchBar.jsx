import React, { useState } from "react";
import { SearchBarSection } from "../styles/SearchBar";
import { useDispatch } from "react-redux";
import { setNickname, getPlayers } from "../actions";

export const SearchBar = () => {
  const [nick_name, setInput] = useState("");
  const dispatch = useDispatch();

  function handleOnChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setNickname(nick_name));
    dispatch(getPlayers({ nick_name:nick_name}));
    setInput("");
  };

  return (
    <SearchBarSection onSubmit={onSubmit}>

      <input
        placeholder="Buscar Player"
        type="text"
        value={nick_name?nick_name:""}
        onChange={handleOnChange}
      />

      <button className="button" type="submit">
        Search Player
      </button>
    </SearchBarSection>
  );
};
