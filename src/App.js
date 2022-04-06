import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function App() {
  const logWhenClicked = () => {
    console.log("This is react!");
  };
  return (
    <div>
      <Logo appName="Pokedex" handleClick = {logWhenClicked }/>
      <BestPokemon abilities = {["Anticipation", "Adaptability", "Run-Away"]}/>
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
