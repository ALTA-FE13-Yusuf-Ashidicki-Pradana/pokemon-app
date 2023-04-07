import React from "react";
import Container from "../components/Layout";

import { WithRouter } from "../utils/Navigation";

function MyPokemon(props) {
  return (
    <Container>
      <h1>Halo</h1>;
    </Container>
  );
}

export default WithRouter(MyPokemon);
