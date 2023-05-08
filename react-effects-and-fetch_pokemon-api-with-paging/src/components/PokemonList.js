import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState({});
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0")

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url
        );
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  const previousPage = () => {
    setUrl(pokemon.previous); 
  }


  const nextPage = () => {
    setUrl(pokemon.next); 
  }

  return (
    <main>
      {pokemon?.previous && (
        <button type="button" onClick ={previousPage}>Previous Page</button>

      )}
      
      <button type="button" onClick={nextPage}>Next Page</button>
      <ul>
        {pokemon?.results?.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
