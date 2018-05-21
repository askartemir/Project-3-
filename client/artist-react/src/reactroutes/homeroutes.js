import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/home";

const HomeRoute = () => (
    <div>
      <Route exact path="/home" component={Home} />
    </div>
);

export default HomeRoute;