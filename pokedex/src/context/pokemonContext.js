import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import bug from "../assets/bug.png";
import dark from "../assets/dark.png";
import dragon from "../assets/dragon.png";
import electric from "../assets/electric.png";
import fairy from "../assets/fairy.png";
import fighting from "../assets/fighting.png";
import fire from "../assets/fire.png";
import flying from "../assets/flying.png";
import ghost from "../assets/ghost.png";
import grass from "../assets/grass.png";
import ground from "../assets/ground.png";
import ice from "../assets/ice.png";
import normal from "../assets/normal.png";
import poison from "../assets/poison.png";
import psychic from "../assets/psychic.png";
import rock from "../assets/rock.png";
import steel from "../assets/steel.png";
import water from "../assets/water.png";
export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [details, setDetails] = useState([]);

  const getPokemon = () => {
    let pokemonPoint = [];
    for (let i = 1; i < 22; i++) {
      pokemonPoint.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(pokemonPoint.map((element) => axios.get(element)))
      .then((res) => setPokemon(res))
      .catch((erro) => console.log(erro));
  };
  useEffect(() => {
    getPokemon();
  }, []);

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) =>
        pokemonInPokedex.data.name !== pokemonToRemove.data.name
    );

    setPokedex(newPokedex);
  };

  const addToPokedex = (pokemonToAdd) => {
    const newPokedex = [...pokedex, pokemonToAdd];
    setPokedex(newPokedex);
  };

  function renderBg(pokemons) {
    const type = pokemons.types.type.name;

    switch (type) {
      case "bug":
        return "#76A866";
      case "dark":
        return "#70657B";
      case "dragon":
        return "#004170";
      case "electric":
        return "#E7BF0D";
      case "fairy":
        return "#EA85E4";
      case "fighting":
        return "#D96D8C";
      case "fire":
        return "#EAAB7D";
      case "flying":
        return "#6892B0";
      case "ghost":
        return "#7587BD";
      case "grass":
        return "#729F92";
      case "ground":
        return "#E7A888";
      case "ice":
        return "#59C5B4";
      case "normal":
        return "#BF9762";
      case "poison":
        return "#B978BA";
      case "psychic":
        return "#F88C90";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#ADADAD";
      case "water":
        return "#71C3FF";
      default:
        return "#BF9762";
    }
  }
  function renderTypeOne(pokemons) {
    const type = pokemons.types[0].type.name;

    switch (type) {
      case "normal":
        return normal;
      case "grass":
        return grass;
      case "fire":
        return fire;
      case "water":
        return water;
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
    }
  }

  function renderTypeTwo(pokemons) {
    const type = pokemons.types[1].type.name;

    switch (type) {
      case "normal":
        return normal;
      case "grass":
        return grass;
      case "fire":
        return fire;
      case "water":
        return water;
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "ground":
        return ground;
      case "poison":
        return poison;
      case "psychic":
        return psychic;

      case "steel":
        return steel;
    }
  }
  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        pokedex,
        setPokedex,
        addToPokedex,
        removeFromPokedex,
        renderBg,
        grass,
        fire,
        water,
        bug,
        normal,
        getPokemon,

        details,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
