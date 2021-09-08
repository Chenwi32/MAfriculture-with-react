import React, { useState } from "react";
import "./Login.css";
import logo from "../images/icons/7777.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { InfoRounded } from "@material-ui/icons";

function Login() {
  // useHistory alows us to programatically change url when somethi ng
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();

    // Firebase Funtionality
    auth
      .signInWithEmailAndPassword(email, password)
      .then((register) => {
        if (register) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const toRegister = () => {
    history.push("/register");
  };

  return (
    <div className="login flex__col">
      <div className="logo">
        <Link className="link" to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="login__container flex__col">
        <h1>Sign-in</h1>
        <form className="form flex__col">
          <div className="input__container ">
            <h5>E-mail</h5>
            <input
              className="input"
              type="email"
              /* This tires the useState to this input field */
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

          <button className="btn" type="submit" onClick={signIn}>
            Sign In
          </button>

          <p className="create__notice">You don't have an account?</p>
          <button className="register" onClick={toRegister}>
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
