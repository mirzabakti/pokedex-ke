import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";

function Pokemon() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0")
      .then((response) => {
        const newData = response?.data?.results?.map((e, i) => ({
          ...e,
          imgUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${i + 1 < 10 ? `00${i + 1}` : i + 1 < 100 ? `0${i + 1}` : `${i + 1}`}.png`,
        }));

        setData(newData ?? []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <SearchBar />

      <div>
        {data?.length ? (
          <div className="row">
            {data?.map((el, idx) => {
              return (
                <div key={idx} className="col-xl-2  col-sm-3 lc-block bg-white rounded shadow text-center m-3 p-3">
                  <img src={el?.imgUrl} alt="pokemon" className="img-fluid card-img-top " />
                  <div>{el?.name.toUpperCase()}</div>
                  <button className="btn btn-secondary">Detail</button>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Pokemon Not Found</div>
        )}
      </div>
    </div>
  );
}

export default Pokemon;
