import React from "react";
import "./Home.css";
import {
  banner,
  product_1,
  product_2,
  product_3,
  product_6,
  product_11,
  product_8,
} from "../images/imageindex";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container container">
        <img src={banner} alt="banner" className="banner" />

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
        <div className="one__row flex">
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
