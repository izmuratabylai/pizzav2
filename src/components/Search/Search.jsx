import React from "react";
import styles from "./search.modules.scss";

export const Search = ({ searchValue, setSearchValue }) => {
  return (
    <input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className="root"
      placeholder="Поиск пиццы"
    />
  );
};
