import React from "react";

import { Catefories } from "../components/Catefories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { CircularProgress } from "@mui/material";

export const Home = () => {
    const [items, setItems] = React.useState([]);
    const [loading, setloading] = React.useState(true);

    React.useEffect(() => {
      fetch("https://62b407a7a36f3a973d2a6c2b.mockapi.io/items")
        .then((res) => {
          return res.json();
        })
        .then((arr) => {
          setItems(arr);
          setloading(false);
        });
    }, []);
  return (
    <>
      <div className="content__top">
        <Catefories />
        <Sort />
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
