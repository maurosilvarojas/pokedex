import { View, Text } from "react-native";
import React from "react";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Pokedex}
        options={{ title: "PokeBall" }}
      />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}
