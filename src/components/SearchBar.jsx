import React, { useState } from "react";
import { SearchBarSection } from "../styles/SearchBar";
import { useDispatch } from "react-redux";
import { setNickname, searchPlayers } from "../actions";
import {useNavigate} from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [nick_name, setInput] = useState("");
  const dispatch = useDispatch();

  function handleOnChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setNickname(nick_name));
    dispatch(searchPlayers({ nick_name: nick_name }));
    setInput("");
    navigate("/search");
    
  };

  return (
    <SearchBarSection onSubmit={onSubmit} >
      <input
        className="inputSearch"
        placeholder="Buscar Jugador"
        type="text"
        value={nick_name ? nick_name : ""}
        onChange={handleOnChange}
      />

      <button className="button" type="submit">
        Buscar Jugador
      </button>
    </SearchBarSection>
  );
  
};
