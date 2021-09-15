import React from "react";
import "./Home.css";
import {
  banner,
  banner1,
  banner2,
  banner3,
  product_1,
  product_2,
  product_3,
  product_6,
  product_11,
  product_8,
} from "../images/imageindex";
import Product from "../product/Product";
import { animateText } from "../..";

function Home() {
  /*///////// Animate Text //////////*/

  return (
    <div className="home">
      {/*//////// Banner /////////*/}
      <div class="banner-container flex__col">
        <div className="bannerImg__container">
          <img src={banner} alt="" className="banner" />
        </div>
        <div className="container">
          <h1 id="backToTop">MAfriculture</h1>

          <div className="quotes">
            <p>
              There Is Beauty In Everything — <br />
              African Fashion Is Never An Exception.
              <br />
              <strong>Give The African Style A Try!</strong>
            </p>
            <div id="animated__text" className="animated__text"></div>
            <span class="feel hide" id="feel">
              <strong>“FEEL THE ROYALTY”</strong>
            </span>
            <span class="hide" id="priority">
              <strong>
                <em>Your Satisfaction, Our Priority!</em>
              </strong>
            </span>
          </div>

          <div className="button">
            <button class="btn">SHOP NOW</button>
          </div>
        </div>
      </div>

      <div className="home-container container">
        {/*///////// Products /////////////*/}
        <div className="one__row flex">
          <Product
            title="Decoration Stand"
            image={product_11}
            price={10000}
            rating={5}
            id={1}
          />
          <Product
            title="Table Flower Vase"
            image={product_3}
            price={4500}
            rating={4}
            id={2}
          />
        </div>
        <div className="one__row flex">
          <Product
            title="Dining Table Tray"
            image={product_8}
            price={5000}
            rating={4}
            id={3}
          />
          <Product
            title="Table Flower Vase"
            image={product_2}
            price={3000}
            rating={3}
            id={4}
          />
          <Product
            title="Table Flower Vase"
            image={product_6}
            price={2500}
            rating={3}
            id={5}
          />
        </div>
        <div className="one__row premium flex">
          <Product
            title="Floor Flower Vase with Inscription"
            image={product_1}
            price={15000}
            rating={5}
            id={6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
