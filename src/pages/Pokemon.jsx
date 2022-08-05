import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import DetailPokemon from "../components/DetailPokemon";

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

  // function Spin(pictureBack){
  //   const [spin, setSpin] = useState('')

  //   const Spinning = () => {
  //       setSpin('')
  //   }
  // }

  return (
    <div className="container">
      <SearchBar />
      <DetailPokemon />
      <div>
        {data?.length ? (
          <div className="row">
            {data?.map((el, idx) => {
              return (
                <div key={idx} className="col-xl-2  col-sm-3 lc-block bg-white rounded shadow text-center m-3 p-3">
                  <div className="flip-box">
                    <div className="flip-box-inner">
                      <div className="flip-box-front">
                        {/* <button > */}
                        <img src={el?.pictureBack} alt="pokemon" className="img-fluid card-img-top " />
                        {/* </button> */}
                      </div>
                      <div className="flip-box-back">
                        <img src={el?.pictureFront} alt="pokemon" className="img-fluid card-img-top " />
                        apa aja
                      </div>
                    </div>
                  </div>

                  <div>{el?.name.toUpperCase()}</div>
                  <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Detail
                  </button>
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
