import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/style.scss";
import { Spinner } from "reactstrap";
import Character from "./components/Character";
import Pages from "./components/Pages";
import pokemon from "./images/pokemon_logo.png";

function App() {
  const [pokemonData, setPokemonData] = useState({});
  const [page, setPage] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${page}?offset=0&limit=9`)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((err) => console.log("Error getting list", err));
  }, [page]);

  return (
    <div className="App">
      <h1>
        <img className="logo" src={pokemon} alt="Pokemon Logo" />
      </h1>
      <main>
        {pokemonData.results ? (
          pokemonData.results.map((pokemon, index) => (
            <Character pokemon={pokemon} />
          ))
        ) : (
          <h2 style={{ margin: "0 auto" }}>
            Loading <Spinner />
          </h2>
        )}
      </main>
      <Pages pokemonData={pokemonData} setOffset={setPage} />
    </div>
  );
}

export default App;
