import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        setIsLoading(false);

        history.push("/");
      } else {
        alert("une erreur est survenue");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-container">
      Login
      <form onSubmit={handleSubmit} className="form-login-signup">
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="adresse email"
          type="email"
        />
        <br />
        <input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="mot de passe"
          type="password"
        />
        <br />
        <button type="submit">Se connecter</button>
      </form>
      <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
    </div>
  );
};

export default Login;
