import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../pages/login.js";
import Form from "../components/form/form.js";

const LoginRoute = () => (
  <Router>
    <div>
      <Route exact path="/home" component={Home} />
    </div>
  </Router>
);

// 