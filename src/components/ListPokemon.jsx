import React from "react";

const ListPokemon = ({ data }) => {
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
  );
};

export default ListPokemon;
