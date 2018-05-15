import React from "react";
import { Router } from "react-dom-router";
import Login from "../pages/login";
s
const LoginRoute = () => (
	  <Router>
    <div>
        <li>
          <Link to="/home">Home</Link>
        </li>
      <hr />

      <Route exact path="/" component={Login} />
      <Route path="/home" component={About} />
    </div>
  </Router>
);

