import axios from "axios";
import Pokemon from "./Pokemon";
import { useEffect, useState } from "react";

export default function Vertodos() {
  const [pokemones, setPokemones] = useState([]);
  const urlPokemones = "https://pokeapi.co/api/v2/pokemon?limit=150";

  useEffect(() => {
    async function traerPokemones() {
      try {
        const response = await axios.get(urlPokemones);
        setPokemones(response.data.results);
      } catch (err) {
        console.log("entró en el catch");
      }
    }
    traerPokemones();

    const getPokemonUrl = () => {
      pokemones.map((pokemon) => {
        const response = axios.get(pokemon.url).then((response) => {
          console.log(response.data);
        });
        return response;
      });
    };

    getPokemonUrl();
  }, [pokemones]);

  return (
    <>
      <h1>Lista de pokemones</h1>
      {pokemones ? (
        pokemones.map((pokemon, index) => {
          return <Pokemon data={pokemon} key={index} />;
        })
      ) : (
        <h2>aqui</h2>
      )}
    </>
  );
}
