import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = () => {
    // Remove Item
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct flex">
      <img src={image} alt="" />
      <div className="info flex__col">
        <div>
          <p>{title}</p>
          <p>XAF {price} </p>
          <div className="rating flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p className="rating__stars">&#x2B50;</p>
              ))}
          </div>
        </div>

        <button onClick={removeFromCart} className="btn">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
