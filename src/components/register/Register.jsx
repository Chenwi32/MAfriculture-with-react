import React, { useState } from "react";
import "../login/Login.css";
import logo from "../images/icons/7777.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = (event) => {
    event.preventDefault();

    // Firebase Functionality

    auth
      .createUserWithEmailAndPassword(email, password)

      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const toLogin = () => {
    history.push("/login");
  };

  return (
    <div className="login flex__col">
      <div className="logo">
        <Link className="link" to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="login__container flex__col">
        <h1>Sign-up</h1>
        <form className="form flex__col">
          <div className="input__container ">
            <h5>First Name</h5>
            <input
              className="input"
              type="text"
              /* This ties the useState to this input field */
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="input__container ">
            <h5>Last Name</h5>
            <input
              className="input"
              type="text"
              /* This ties the useState to this input field */
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="input__container ">
            <h5>E-mail</h5>
            <input
              className="input"
              type="email"
              /* This ties the useState to this input field */
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input__container">
            <h5>Password</h5>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button className="btn" type="submit" onClick={register}>
            Sign Up
          </button>

          <p>
            By signing in, you agree to the MAfriculture
            <a href="#"> use</a> and <a href="#">sale</a> policies. Please see our
            <a href="#"> Privacy</a> notice, <a href="#">Cookies</a> notice and
            our <a href="#">Interest-Based Ads</a> notice
          </p>
          <p className="create__notice">You already have an account?</p>
          <button className="register" onClick={toLogin}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
