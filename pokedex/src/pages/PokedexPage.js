import React from "react";
import Header from "../components/header/header";
import { Box, ChakraProvider, Heading, Text, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import theme from "../theme/theme";
import { PokemonContext } from "../context/pokemonContext";

function Pokedex() {
  const { pokedex, removeFromPokedex } = useContext(PokemonContext);
  return (
    <div>
      {pokedex.map((pokemon) => (
        <div
          key={pokemon.name}
          pokemonUrl={`${BASE_URL}/${pokemon.name}`}
          removeFromPokedex={removeFromPokedex}
        />
      ))}
    </div>
  );
}
