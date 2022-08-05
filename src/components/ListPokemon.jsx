import React from "react";
import { useDispatch } from "react-redux";
import { addFavPokemon } from "../slice/FavPokemonSlice";

const ListPokemon = ({ data }) => {
  const dispatch = useDispatch(); 
  const handleClick = (el) => {
    // console.log(el);

    dispatch(addFavPokemon(el))
  };

  return (
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
                    </div>
                  </div>
                </div>

                <div>{el?.name.toUpperCase()}</div>
                <button type="button" className="btn btn-secondary me-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Detail
                </button>
                <button type="button" class="btn btn-primary" onClick={() => handleClick(el)}>
                  Add Favorite
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Pokemon Not Found</div>
      )}
    </div>
  );
};

export default ListPokemon;
