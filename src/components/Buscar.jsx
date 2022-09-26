import { useState, useEffect } from "react";
import axios from "axios";

export default function Buscar() {
  const [input, setInput] = useState();
  const [pokemon, setPokemon] = useState(false);

  const url = "https://pokeapi.co/api/v2/pokemon/";

  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPokemon(input);
  }

  useEffect(() => {
    try {
      axios.get(`${url + pokemon}`).then((response) => {
        console.log(response.data);
        // setInput(response.data);
      });
    } catch (err) {}
  }, [pokemon]);

  return (
    <>
      <h1>Buscá tu pokemon</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={input || ""} onChange={handleChange} />
        </label>
        <button type="submit"> Buscar </button>
      </form>
    </>
  );
}
