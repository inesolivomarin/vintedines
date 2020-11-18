import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/home");
      } else {
        setErrorMessage("Une erreur est survenue");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup-container">
      Signup
      <form onSubmit={handleSubmit} className="form-signup-login">
        <input
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="nom d'utilisateur"
          type="text"
        />
        <br />
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="email"
          type="email"
        />
        <span className="signup-login-error-message">{errorMessage}</span>
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
        <button type="submit">S'inscrire </button>
      </form>
      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </div>
  );
};

export default Signup;
