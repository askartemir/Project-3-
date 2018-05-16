import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";;
import Home from "../pages/home.js";

const LoginRoute = () => (
  <Router>
    <div>
      <Route exact path="/home" component={Home} />
    </div>
  </Router>
);
