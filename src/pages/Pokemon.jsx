import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import DetailPokemon from "../components/DetailPokemon";
import ListPokemon from "../components/ListPokemon";

function Pokemon() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokedexbackend.herokuapp.com/pokemon")
      .then((response) => {
        return response;
      })
      .then((response) => {
        console.log(response.data.result);
        // console.log(response.result)
        const limitData = response.data.result.splice(0, 100);
        console.log(limitData);
        setData(limitData || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <div className="container">
      <SearchBar />
      <DetailPokemon />
      <ListPokemon data={data} />
    </div>
  );
}

export default Pokemon;
