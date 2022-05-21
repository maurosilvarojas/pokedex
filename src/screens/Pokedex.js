import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

export default function Pokedex() {
  useEffect(() => {
    (async () => {
      loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
