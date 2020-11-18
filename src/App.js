import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Cookies from "js-cookie";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faCheck, faRedo } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faCheck, faRedo);

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const setUser = (token) => {
    if (token) {
      Cookies.set("token", token);
      setToken(token);
    } else {
      Cookies.remove("token");
      // supprimer cookie et repasser le state token à null
      setToken(null);
    }
  };
  return (
    <div>
      <Router>
        <Header token={token} setUser={setUser}></Header>
        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/publish">
            <Publish token={token} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
