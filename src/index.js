import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

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
} from "./components/images/imageindex";

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

/*/////// Banner Animated Text ///////*/
const animateText = () => {
  const textContainer = document.getElementById("animated__text");
  const feel = document.getElementById("feel");
  const priority = document.getElementById("priority");

  textContainer.innerHTML = feel.innerHTML;
  setInterval(() => {
    if (textContainer.innerHTML === feel.innerHTML) {
      textContainer.innerHTML = priority.innerHTML;
    } else {
      textContainer.innerHTML = feel.innerHTML;
    }
  }, 6000);
};

/*/////// Banner Animated Images ///////*/
const animateImages = () => {
  const bannerImg = document.querySelector(".banner");

  bannerImg.src = banner;

  let banners = [banner, banner1, banner2, banner3];

  let i = 0;
  let bannersLength = banners.length - 1;
  setInterval(() => {
    if (i < bannersLength) {
      i++;
      bannerImg.src = banners[i];
    } else {
      i--;
      bannerImg.src = banners[i];
    }
  }, 9000);
};

animateImages();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
animateText();
