import React, { useState } from "react";


function PokemonCity() {
  const [city, setCity] = useState("");

    const UpdateCity = (event) => {
        setCity(event.target.value);
    };
  return (
      <div>
          <input type="text" value={city} onChange={UpdateCity}></input>
      <p>Welcome to the city of {city} </p>
    </div>
  );
}

export default PokemonCity;
