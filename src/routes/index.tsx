import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages";
import Detail from "../pages/Detail";
import MyPokemon from "../pages/MyPokemon";
import Catch from "../pages/Catch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id_pokemon" element={<Detail />} />
        <Route path="/mypokemon" element={<MyPokemon />} />
        <Route
          path="/detail/:id_pokemon/battle/:id_pokemon"
          element={<Catch />}
        />
        <Route path="*" element={<div>404 Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
