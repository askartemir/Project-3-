import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages";

const LoginRoute = () => (
    <div>
      <Route exact path="/" component={Login} />
    </div>
);

export default LoginRoute;
