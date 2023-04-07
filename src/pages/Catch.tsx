import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { WithRouter } from "../utils/Navigation";
import { useTitle } from "../utils/hooks/useTitle";
import { RouteComponentProps } from "react-router-dom";

import Container from "../components/Layout";
import Card from "../components/Card";
import { Link } from "react-router-dom";

type CatchParams = {
  id_pokemon: string;
};

type Props = RouteComponentProps<CatchParams>;

function Catch(props: Props) {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useTitle(`Pokemon App | ${data.name}`);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const { id_pokemon } = props.match.params;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id_pokemon}`)
      .then((res) => {
        const { data } = res;
        setData(data);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container>
      <div className="grid flex-auto grid-cols-2 items-center font-silkscreen">
        <div>
          <Card link={data.id} nama={data.name} />
        </div>
        <div className=" border-4 border-black rounded-xl m-2 p-5">
          <div>What will You do?</div>
          <div className="grid grid-cols-2">
            <div>Catch!</div>

            <Link to="/">
              <div>Run</div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WithRouter(Catch);
