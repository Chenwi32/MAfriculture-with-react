import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout container">
      <div className="checkout__left">
        {/* 
                Checkout advert Template
              <div className="checkout__ad"></div> 
              */}
        <div>
          <h2 className="checkout__title">
            {user
              ? `Hey ${user.email}, these are the items you selected`
              : "This is a Shopping Cart"}
          </h2>
          {/* Basaket items */}

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
