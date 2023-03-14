import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/header";

function Details() {
  const pathParams = useParams();
  const [details, setDetails] = useState([]);
  const getPokedex = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pathParams.idPokemon}/`
      );

      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokedex();
  }, []);

  return (
    <>
      <Header />
      <div>{details.name}</div>
    </>
  );
}

export default Details;
