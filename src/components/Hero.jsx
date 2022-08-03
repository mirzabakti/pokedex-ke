import React from "react";
import Image1 from "../assets/id_pickup_banner_Kejuaraan_Ekspansi_Baru_S10_-S10a.png";
import Image2 from "../assets/id_pickup_banner_S10b_promo.jpg";

const Hero = () => {
  return (
    <div>
      <section id="intro">
        <div className="container-lg py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 text-center text-md-start">
              <h1>
                <div className="display-4">
                  Pokemon Battle <br />
                  is Come!
                </div>
              </h1>
              <p className="lead my-4 text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quaerat veritatis dolorum, iure tenetur ad vero saepe velit quidem distinctio at exercitationem veniam quibusdam ipsum nostrum nulla alias. Velit, laudantium?
              </p>
            </div>
            <div className="col-md-5 text-center d-none d-md-block">
              <img className="img-fluid rounded" src={Image1} alt="sunnygo" />
            </div>
          </div>
        </div>
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 text-center d-none d-md-block">
              <img className="img-fluid rounded" src={Image2} alt="sunnygo" />
            </div>
            <div className="col-md-5 text-center text-md-start">
              <h1>
                <div className="display-4">
                  Free Stuff <br />
                  Special For You!
                </div>
              </h1>
              <p className="lead my-4 text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quaerat veritatis dolorum, iure tenetur ad vero saepe velit quidem distinctio at exercitationem veniam quibusdam ipsum nostrum nulla alias. Velit, laudantium?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
