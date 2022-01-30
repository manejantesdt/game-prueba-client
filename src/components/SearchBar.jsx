import React from "react";
import { SearchBarSection } from "../styles/SearchBar";

export const SearchBar = () => {
  return (
    <SearchBarSection>
      <imput placeholder="Search Player" />
      <button className="button" onClick={() => {}}>Search Player</button>
    </SearchBarSection>
  );
};