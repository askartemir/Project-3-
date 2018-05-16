import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";;
import Home from "../pages/home.js";

const HomeRoute = () => (
  <Router>
    <div>
      <Route exact path="/home" component={Home} />
    </div>
  </Router>
);

// Demo page for the moment till I re-write these

const Profile = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default HomeRoute;

