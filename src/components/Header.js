import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/vintedlogo.png";
import { Link, useHistory } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const history = useHistory();

  return (
    <div className="header-container">
      <Link to="/">
        <div>
          <img className="header-logo" src={logo} alt="vinted" />
        </div>
      </Link>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Recherche des articles"
        />
        <FontAwesomeIcon icon="search" className="search-icon" />
      </div>
      <div>
        {token ? (
          <button
            onClick={() => {
              setUser(null);
            }}
            className="header-logout-button"
          >
            Se déconnecter
          </button>
        ) : (
          <div>
            <button
              onClick={() => {
                history.push("/signup");
              }}
              className="header-login-button"
            >
              S'inscrire
            </button>
            <button
              onClick={() => {
                history.push("/login");
              }}
              className="header-signup-button"
            >
              Se connecter
            </button>
          </div>
        )}
        <button
          onClick={() => {
            history.push("/publish");
          }}
          className="header-sell-item-button"
        >
          Vends tes articles
        </button>
      </div>
    </div>
  );
};

export default Header;
