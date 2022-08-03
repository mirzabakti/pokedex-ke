import React from "react";
import Character from "../assets/unnamed.webp";

const Guide = () => {
  return (
    <div>
      <section id="topics">
        <div className="container-md my-5">
          <div className="text-center">
            <h2>How To Play</h2>
            <p className="lead text-muted">A quick steps to enjoy the game</p>
          </div>
          <div className="row justify-content-around align-items-center">
            {/* //? Accordion */}
            <div className="col-lg-6">
              <div className="accordion" id="chapters">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
                      Step-1 - Get your favorite deck!
                    </button>
                  </h2>
                  <div id="chapter-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#chapters">
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vel aliquid corrupti minima deleniti consequuntur repellat nobis et illum cumque maiores, beatae placeat quibusdam aliquam natus atque? Dolore,
                        aliquam tempora?
                      </p>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vel aliquid corrupti minima deleniti consequuntur repellat nobis et illum cumque maiores, beatae placeat quibusdam aliquam natus atque? Dolore,
                        aliquam tempora?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-2" aria-expanded="false" aria-controls="chapter-2">
                      Step-2 - Arrange your deck with best strategy you have!
                    </button>
                  </h2>
                  <div id="chapter-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#chapters">
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vel aliquid corrupti minima deleniti consequuntur repellat nobis et illum cumque maiores, beatae placeat quibusdam aliquam natus atque? Dolore,
                        aliquam tempora?
                      </p>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vel aliquid corrupti minima deleniti consequuntur repellat nobis et illum cumque maiores, beatae placeat quibusdam aliquam natus atque? Dolore,
                        aliquam tempora?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-3" aria-expanded="false" aria-controls="chapter-3">
                      Step-3 - Battle!
                    </button>
                  </h2>
                  <div id="chapter-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#chapters">
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vel aliquid corrupti minima deleniti consequuntur repellat nobis et illum cumque maiores, beatae placeat quibusdam aliquam natus atque? Dolore,
                        aliquam tempora?
                      </p>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vel aliquid corrupti minima deleniti consequuntur repellat nobis et illum cumque maiores, beatae placeat quibusdam aliquam natus atque? Dolore,
                        aliquam tempora?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-4" aria-expanded="false" aria-controls="chapter-4">
                      Step-4 - Win the battle and tournament!
                    </button>
                  </h2>
                  <div id="chapter-4" className="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#chapters">
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vel aliquid corrupti minima deleniti consequuntur repellat nobis et illum cumque maiores, beatae placeat quibusdam aliquam natus atque? Dolore,
                        aliquam tempora?
                      </p>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vel aliquid corrupti minima deleniti consequuntur repellat nobis et illum cumque maiores, beatae placeat quibusdam aliquam natus atque? Dolore,
                        aliquam tempora?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-5">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-5" aria-expanded="false" aria-controls="chapter-5">
                      Step-5 - Get a prize!
                    </button>
                  </h2>
                  <div id="chapter-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#chapters">
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vel aliquid corrupti minima deleniti consequuntur repellat nobis et illum cumque maiores, beatae placeat quibusdam aliquam natus atque? Dolore,
                        aliquam tempora?
                      </p>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vel aliquid corrupti minima deleniti consequuntur repellat nobis et illum cumque maiores, beatae placeat quibusdam aliquam natus atque? Dolore,
                        aliquam tempora?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#intro" class="btn btn-primary btn-lg mt-3">
                Start Your Battle!
              </a>
            </div>
            <div className="col-6 col-lg-4 d-none d-md-block">
              <img src={Character} className="w-50 img-fluid" alt="Character" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
