import React from "react";
import Header from "../components/header/header";
import { Box, ChakraProvider, Heading, Text, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import theme from "../theme/theme";
import { PokemonContext } from "../context/pokemonContext";

import PokemonCard from "../components/PokemonCard/pokemonCard";

function Home() {
  const { pokemon, grass, fire, bug, normal, pokedex } =
    useContext(PokemonContext);

  // não mostrar pokemons que estão na pokedex

  const filteredPokelist = () =>
    pokemon.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) =>
            pokemonInList.data.name === pokemonInPokedex.data.name
        )
    );

  return (
    <ChakraProvider>
      <Header />
      <Heading color={"white"} bg={"#5d5d5d"} p={"2rem"} fontSize={"5xl"}>
        Todos os Pokémons
      </Heading>
      <Flex
        justifyContent="center"
        gap="16px"
        wrap="wrap"
        bg="#5d5d5d"
        theme={theme}
      >
        {/* {pokemon.map((pokemons) => {
          return <PokemonCard key={pokemons.data.id} pokemons={pokemons} />;
        })} */}
        {filteredPokelist().map((pokemons) => (
          <>
            {pokemons.data.types.map((types) => {
              switch (types.type.name) {
                case "grass":
                  return (
                    <PokemonCard
                      bg={"#729F92"}
                      img={grass}
                      key={pokemons.data.id}
                      pokemons={pokemons}
                    />
                  );
                  break;
                case "fire":
                  return (
                    <PokemonCard
                      bg={"#EAAB7D"}
                      img={fire}
                      key={pokemons.data.id}
                      pokemons={pokemons}
                    />
                  );
                  break;
                case "bug":
                  return (
                    <PokemonCard
                      bg={"#76A866"}
                      img={bug}
                      key={pokemons.data.id}
                      pokemons={pokemons}
                    />
                  );
                  break;
                case "normal":
                  return (
                    <PokemonCard
                      bg={"#BF9762"}
                      img={normal}
                      key={pokemons.data.id}
                      pokemons={pokemons}
                    />
                  );
                  break;
              }
            })}
          </>
        ))}
      </Flex>
    </ChakraProvider>
  );
}

export default Home;
