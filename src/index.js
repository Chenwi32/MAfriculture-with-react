import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <React.StrictMode>
    {/*     // We wrap the app with the StateProvider that we created so that // every
    component will have access to the Data layer */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Background color changer
const bodyBG = document.querySelector("body");

const productBG = document.querySelectorAll(".product");

const BgBtn = document.querySelector(".change__BGcolor");

const productText = document.querySelectorAll(".about__product");

let colors = ["#000", "#f0f0f0", "rgb(144, 170, 162)", "#444545"];

BgBtn.addEventListener("click", () => {
  let randomColor = Math.floor(Math.random() * colors.length);

  bodyBG.style.backgroundColor = colors[randomColor];

  if (bodyBG.style.backgroundColor !== colors[0]) {
    productBG.forEach((product) => {
      product.style.backgroundColor = "#fff";
    });

    productText.forEach((product) => {
      product.style.color = "#000";
    });
  } else if (bodyBG.style.backgroundColor === colors[0]) {
    productBG.forEach((product) => {
      product.style.backgroundColor = "#60636380";
    });

    productText.forEach((product) => {
      product.style.color = "#fff";
    });
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
