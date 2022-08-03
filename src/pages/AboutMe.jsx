import React from "react";
import Foto from "../assets/Pro Pic.jpg";

const AboutMe = () => {
  return (
    <div>
      <section>
        <div className="mt-5 py-6 container-fluid px-xxl-8">
          <div className="row">
            <div className="col-lg-6">
              <div className="lc-block mb-4 mb-lg-0 lh-lg">
                <div editable="rich">
                  <h1 className="display-5">Hi, I'm Mirza Bakti Sukaryana</h1>
                  <p></p>

                  <p className="rfs-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus ullamcorper sapien, in lacinia purus luctus vel. In vel tristique risus. Aenean ac felis vitae leo malesuada porta. Morbi ac tincidunt nisl. Morbi
                    semper, sem non finibus pellentesque, ipsum mauris varius neque, in semper tortor orci sed ex.{" "}
                  </p>

                  <p className="rfs-7">
                    Donec ut suscipit est, ut facilisis mauris. Nunc faucibus nec dolor nec interdum. Fusce ac felis luctus, pharetra turpis eu, ullamcorper enim. Praesent at est enim. Cras sit amet mi feugiat, dictum tellus vel, tristique
                    neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam vehicula tincidunt mauris et interdum.{" "}
                  </p>

                  <p className="rfs-7">
                    Sed non rhoncus dolor. Aenean posuere vitae quam ac maximus. Suspendisse vel egestas mauris. Suspendisse sit amet massa nunc. In hendrerit ipsum eros, sit amet venenatis neque fringilla ut. Ut ut tortor vestibulum,
                    elementum sem sed, pulvinar sapien. Nullam finibus justo vitae malesuada porttitor. Nulla finibus risus mi, a ornare massa elementum sed. Duis quis accumsan nibh, sit amet cursus augue. Aenean nisi eros, convallis sit
                    amet vestibulum vel, elementum pulvinar ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 offset-lg-2 text-end">
              <img className="rounded img-fluid h-100" alt="A" style={{ objectFit: "cover" }} src={Foto} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light py-5">
        <div className="mypath mx-auto">
          <div className="lc-block">
            <div editable="rich">
              <h2>The quick brown fox</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus. Cras ornare faucibus laoreet&nbsp;</p>
            </div>
          </div>
          <div className="lc-block">
            <div editable="rich">
              <h2>The quick brown fox</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus. Cras ornare faucibus laoreet&nbsp;</p>
            </div>
          </div>
          <div className="lc-block">
            <div editable="rich">
              <h2>The quick brown fox</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus. Cras ornare faucibus laoreet&nbsp;</p>
            </div>
          </div>
          <div className="lc-block">
            <div editable="rich">
              <h2>The quick brown fox</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus. Cras ornare faucibus laoreet&nbsp;</p>
            </div>
          </div>
          <div className="lc-block">
            <div editable="rich">
              <h2>The quick brown fox</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus. Cras ornare faucibus laoreet&nbsp;</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
