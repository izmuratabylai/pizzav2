import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Cart } from "./pages/Cart.jsx";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/filterSlice";


import "./scss/app.scss";

export const SearchContext = React.createContext();

function App() {

  const filter = useSelector((state) =>state.filterSliceReducer.value)
  const dispatch = useDispatch()
  console.log(filter)

  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue,setSearchValue}}>
        <Header  />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home  />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <h3 style={{ textAlign: "center" }}>
              © 2022 Made with ❤️ in Taraz
            </h3>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
