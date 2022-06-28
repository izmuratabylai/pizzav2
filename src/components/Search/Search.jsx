import React from "react";
import "./search.modules.scss";
import { SearchContext } from "../../App";

export const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className="root"
      placeholder="Поиск пиццы"
    />
  );
};
