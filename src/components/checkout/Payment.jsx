import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="payment container">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} item(s)</Link>)
        </h1>
        <div className="payment__section delivery flex">
          <h3>Delivery Adress</h3>
          <small className="adress">
            <p>{user ? user.email : "Customer"}</p>
            <p>Yauonde-Cameroon</p>
            <p>Nsimeyong-Rue-Damas</p>
          </small>
        </div>
        <div className="payment__section flex">
          <h3>Review items and delivery</h3>
          <div className="pament__items flex__col">
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
        <div className="payment__section flex">
          <h3>Payment Method</h3>
          <div className="method flex__col">
            <h4>Card Details</h4>
            <div className="two__smalls flex">
              <small>bahbsa</small>
              <small>lnksds djd</small>
            </div>
            <p>
              Order Total:{" "}
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p className="subtotal__value">
                      <strong>{value}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"FCFA"}
              />
            </p>
            <button
              className="btn"
              disabled={processing || disabled || succeeded}
            >
              {processing ? <p>Processing</p> : "Buy now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;