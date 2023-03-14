import React, { useContext, useEffect } from "react";
import Header from "../components/header/header";
import PokemonCard from "../components/PokemonCard/pokemonCard";
import { PokemonContext } from "../context/pokemonContext";
import theme from "../theme/theme";
import { Box, ChakraProvider, Heading, Text, Flex } from "@chakra-ui/react";

function Poke() {
  const { pokedex, grass, fire, bug, normal, getPokemon } =
    useContext(PokemonContext);

  return (
    <ChakraProvider>
      <Header />
      <Heading color={"white"} bg={"#5d5d5d"} p={"2rem"} fontSize={"4xl"}>
        Detalhes
      </Heading>
      <Flex
        justifyContent="center"
        gap="16px"
        wrap="wrap"
        bg="#5d5d5d"
        theme={theme}
      >
        {pokedex.map((pokemons) => (
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

export default Poke;
