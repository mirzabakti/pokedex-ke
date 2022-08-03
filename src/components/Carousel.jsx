import React from "react";
import Carousel1 from "../assets/id_top_banner_S9a.png";
import Carousel2 from "../assets/id_top_banner_S10_220630.png";
import Carousel3 from "../assets/id_top_banner_S10b_1after.png";
import Carousel4 from "../assets/id_top_banner_S9.png";
import Carousel5 from "../assets/id_top_banner_SCE.jpg";

const Carousel = () => {
  return (
    <div className="row justify-content-center mb-5">
      <div className="col-10">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Carousel1} className="d-block w-100 rounded" alt="Carousel" />
            </div>
            <div className="carousel-item">
              <img src={Carousel2} className="d-block w-100 rounded" alt="Carousel" />
            </div>
            <div className="carousel-item">
              <img src={Carousel3} className="d-block w-100 rounded" alt="Carousel" />
            </div>
            <div className="carousel-item">
              <img src={Carousel4} className="d-block w-100 rounded" alt="Carousel" />
            </div>
            <div className="carousel-item">
              <img src={Carousel5} className="d-block w-100 rounded" alt="Carousel" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
