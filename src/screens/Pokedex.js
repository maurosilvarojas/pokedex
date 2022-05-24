import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../componets/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
 console.log("POKE STADO", pokemons);

  useEffect(() => {
    (async () => {
      loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      // console.log("response", response);
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        // console.log(pokemonDetails);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image:
            pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      console.log("array", pokemonsArray.length);
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons}/>
    </SafeAreaView>
  );
}
