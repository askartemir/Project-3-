import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../pages/login.js";
import Form from "../components/form/form.js";

// Demo page for the moment till I re-write these

const LoginRoute = () => (
  <Router>
    <div>
      <Route exact path="/hello" component={Login} />
    </div>
  </Router>
);

// 