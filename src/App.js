import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Checkbox } from "@material-ui/core";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/checkout/Payment";
import Register from "./components/register/Register";
import Footer from "./components/footer/Footer";

function App() {
  const [{}, dispatch] = useStateValue();

  // This will run only once when the app loads since we
  // included the empty square brackets as a second parameter
  // to this useEffect
  useEffect(() => {
    // So this keeps listening and acting when the user logs
    // in or out,, or depending on what we will put in the
    // square brackets below
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        // The user just logged in or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM Naming Convention

    <Router>
      <div className="app">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path={"/payment"}>
            <Header />
            <Payment />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
