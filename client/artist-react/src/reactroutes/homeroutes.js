import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../pages/home";
import Loadable from "react-loadable";

const Loading = () => <div>Loading</div>;

const Home = () => 
(
  <div>
    <h3>Home</h3>
  </div>
)

const About = () =>
(
  <div>
    <h3>about</h3>
  </div>
)



const HomeRoute = () => (
    <div>
      <Route exact path="/home" component={Home} />
    </div>
);


export default HomeRoute;