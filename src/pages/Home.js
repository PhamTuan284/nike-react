import React, { memo } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
 

      <section className="nikeapp-section container mb-5 mt-1">
        <div className="nikeapp-section-img section-img">
          <Link to="/app">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_1101,c_limit/7a1bedb5-5cfa-4fa0-a38a-397ed691cbc6/nike-just-do-it.jpg"
              alt="app-img"
            />
          </Link>
        </div>
        <div className="nikeapp-section-desc section-desc text-center mt-4">
          <h1>YOUR NIKE CONNECTION</h1>
          <p>More sport, more inspriration, more Nike!</p>
          <Link to="/app">
            <button type="button" className="btn btn-dark">
              Get Your Great
            </button>
          </Link>
        </div>
      </section>

      <section className="nikeproduct container mb-5 mt-1">
        <div className="nikeproduct-img section-img">
          <Link to="/products">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_1101,c_limit/59a48171-ba35-4f32-b293-f94655497942/nike-just-do-it.jpg"
              alt="product-img"
            />
          </Link>
        </div>
        <div className="nikeproduct-desc section-desc text-center mt-4">
          <h1>REACH FUTHER</h1>
          <p>
            Welcome to the space where we're always practicing, learning, and
            growing. Where flushed
            <br /> faces, tumbling poses, and sore muscles are embraced. A space
            that opens its arms to
            <br /> anyone, and everyone, ready to reach a little further.
          </p>
          <Link to="/products">
            <button type="button" className="btn btn-dark">
              Get Your Great
            </button>
          </Link>
        </div>
      </section>

      <section className="home-img">
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_1101,c_limit/5372f111-e51e-45a4-bd86-1cf90c4c438b/nike-just-do-it.jpg"
          alt=""
        />
        <button type="button" className="btn btn-light home-btn">
          <Link to="/products">See Products</Link>
        </button>
      </section>
    </div>
  );
}
export default memo(Home);
