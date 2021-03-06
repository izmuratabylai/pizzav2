import React from "react";

import { Catefories } from "../components/Catefories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { CircularProgress } from "@mui/material";

import { SearchContext } from "../App";
import axios from "axios";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setloading] = React.useState(true);
  const [catrgoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const { searchValue } = React.useContext(SearchContext);

  React.useEffect(() => {
    const search = searchValue ? `search="${searchValue}"` : "";

    axios
      .get(
        `https://62b407a7a36f3a973d2a6c2b.mockapi.io/items?${
          catrgoryId > 0 ? `category=${catrgoryId}` : ""
        }&sortBy=${sortType.sortProperty}${search}`
      )
      .then((response) => {
        setItems(response.data);
        setloading(false)
      });

    window.scrollTo(0, 0);
  }, [catrgoryId, sortType, searchValue]);

  return (
    <>
      <div className="content__top">
        <Catefories
          value={catrgoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((pizza, i) =>
          loading ? (
            <CircularProgress key={i} />
          ) : (
            <PizzaBlock key={pizza.id} {...pizza} />
          )
        )}
      </div>
    </>
  );
};
