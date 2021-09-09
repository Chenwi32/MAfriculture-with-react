import React from "react";
import Product from "../product/Product";
import "../product/Product.css";
import "./Products.css";
import "../home/Home.css";
import {
  banner,
  product_1,
  product_2,
  product_3,
  product_4,
  product_5,
  product_6,
  product_7,
  product_8,
  product_9,
  product_10,
  product_11,
  product_12,
  product_13,
  product_14,
} from "../images/imageindex";

function Products() {
  return (
    <div className="products__container container">
      <div className="one__row grid__3">
        <Product
          title="Dining Table Tray"
          image={product_1}
          price={15000}
          rating={5}
          id={6}
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
          image={product_3}
          price={4500}
          rating={3}
          id={2}
        />
        <Product
          title="Dining Table Tray"
          image={product_4}
          price={12000}
          rating={4}
          id={7}
        />
        <Product
          title="Table Flower Vase"
          image={product_5}
          price={3000}
          rating={3}
          id={8}
        />
        <Product
          title="Table Flower Vase"
          image={product_6}
          price={2500}
          rating={3}
          id={5}
        />
        <Product
          title="Dining Table Tray"
          image={product_7}
          price={2000}
          rating={4}
          id={9}
        />

        <Product
          title="Dining Table Tray"
          image={product_8}
          price={5000}
          rating={4}
          id={3}
        />

        <Product
          title="Large Floor Flower Vase"
          image={product_9}
          price={15000}
          rating={4}
          id={10}
        />

        <Product
          title="Large Floor Flower Vase to be finished to your taste"
          image={product_10}
          price={20000}
          rating={5}
          id={11}
        />

        <Product
          title="Decoration Stand"
          image={product_11}
          price={10000}
          rating={5}
          id={1}
        />
        <Product
          title="Table Flower Vase"
          image={product_13}
          price={3000}
          rating={3}
          id={12}
        />
      </div>
    </div>
  );
}

export default Products;
