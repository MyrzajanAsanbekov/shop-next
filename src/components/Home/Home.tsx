import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <h1>Welcome to My Store!</h1>
        </div>
        <div className="home-casual">
          <div className="home-img">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt=""
            />
          </div>
          <div className="home-text">
            <h2>Mens Casual Premium Slim Fit T-Shirts </h2>
            <p>
              Slim-fitting style, contrast raglan long sleeve, three-button{" "}
              <br />
              henley placket, light weight & soft fabric for breathable and{" "}
              <br />
              comfortable wearing. And Solid stitched shirts with round neck
              <br /> made for durability and a great fit for casual fashion wear
              <br />
              and diehard baseball fans. The Henley style round <br /> neckline
              includes a three-button placket.
            </p>
            <h3> Price 22.3 $</h3>
          </div>
        </div>
        <div className="home-solid">
          <div className="home-text2">
            <h2>
              John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain
              Bracelet
            </h2>
            <p>
              From our Legends Collection, the Naga wa s inspired by the <br />
              mythical water dragon that protects the ocean's pearl. Wear facing{" "}
              <br />
              inward to be bestowed with love and abundance, or outward for
              protection.
            </p>
            <h3>Price 695 $</h3>
          </div>
          <div className="home-img2">
            <img
              src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="home-acer">
          <div className="home-img3">
            <img
              src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
              alt="img"
            />
          </div>
          <div className="home-text3">
            <h2>
              Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
            </h2>
            <p>
              21. 5 inches Full HD (1920 x 1080) widescreen IPS display And{" "}
              <br />
              Radeon free Sync technology. No compatibility for VESA Mount{" "}
              <br />
              Refresh Rate: 75Hz - Using HDMI port Zero-frame design | <br />
              ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9.{" "}
              <br />
              Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt{" "}
              <br />
              angle -5 degree to 15 degree. Horizontal viewing angle-178 degree.{" "}
              <br />
              Vertical viewing angle-178 degree 75 hertz
            </p>
            <h3>Price 599 $</h3>
          </div>
        </div>
        <div className="home-women">
          <div className="home-img4">
            <img
              src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
              alt="img"
            />
          </div>
          <div className="home-text4">
            <h2>MBJ Women's Solid Short Sleeve Boat Neck V </h2>
            <p>
              95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach,{" "}
              <br />
              Lightweight fabric with great stretch for comfort, Ribbed on{" "}
              <br />
              sleeves and neckline / Double stitching on bottom hem", <br />
              "category": "women's clothing
            </p>
            <h3>Price 9.85 $</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
