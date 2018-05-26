import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Login from "../../pages/login";
import Home from "../../pages/home";

import ProfilePage from "../../pages/profilepage";

import CreateProfilePage from "../../pages/createprofilepage";

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path ="/home" component={Home} />
          <Route exact path ="/profile" component = {ProfilePage} />
          {/* <Route exact path ="/profilepage" component = {CreateProfilePage} /> */}
	      </div>

      </Router>
    );
  }
}

export default App;