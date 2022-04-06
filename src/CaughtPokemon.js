// import React from "react";
import React, { useState } from "react";
const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }
  const catchPokemon = () => {
    setCaught((c) => c.concat(pokemonNameInput));
    setPokemonNameInput("");
  };
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}.{" "}
      </p>
      <input type = "text" value ={pokemonNameInput} onChange ={handleInputChange}></input>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((pokemon, i) => <li key={i}npm>{ pokemon }</li>)}
      </ul>
    </div>
  );
};
export default CaughtPokemon;
