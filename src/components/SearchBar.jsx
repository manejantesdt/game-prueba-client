import React, { useState } from "react";
import { SearchBarSection } from "../styles/SearchBar";
import { useDispatch } from "react-redux";
import { setNickname, getPlayers } from "../actions";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleOnChange(e) {
    setInput(e.target.value);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setNickname(input));
    dispatch(getPlayers({nickname:input}));
    setInput("");
  };

  return (
    <SearchBarSection onSubmit={onSubmit}>
      <input
        placeholder="Buscar Player"
        type="text"
        value={input}
        onChange={handleOnChange}
      />

      <button className="button" type="submit">
        Search Player
      </button>
    </SearchBarSection>
  );
};
