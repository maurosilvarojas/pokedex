import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "../screens/Favorites";
import Account from "../screens/Account";
import Pokedex from "../screens/Pokedex";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image } from "react-native";
import FavoriteNavigation from "../navigation/FavoriteNavigation";
import PokedexNavigation from "../navigation/PokedexNavigation";
import AccountNavigation from "../navigation/AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorites"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} zize={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Usuario",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} zize={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{
        width: 75,
        height: 75,
        top: -20,
      }}
    />
  );
}
