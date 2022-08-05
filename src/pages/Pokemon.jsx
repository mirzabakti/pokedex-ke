import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

function Pokemon() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokedexbackend.herokuapp.com/pokemon")
      .then((response) => {
        const newData = response?.data?.result?.map((e, i) => ({
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
                  
                  <div className="flip-box">
                    <div className="flip-box-inner">
                      <div className="flip-box-front">
                            <img src={el?.pictureBack} alt="pokemon" className="img-fluid card-img-top " />
                        </div>
                      <div className="flip-box-back">
                        <img src={el?.pictureFront} alt="pokemon" className="img-fluid card-img-top " />
                      </div>
                    </div>
                  </div>


                  <div>{el?.name.toUpperCase()}</div>
                  <button className="btn btn-secondary">Detail</button>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Pokemon Not Found</div>
        )}
        <Pagination />
      </div>

      
    </div>
  );
}

export default Pokemon;
