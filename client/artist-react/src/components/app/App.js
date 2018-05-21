import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Login from "../../pages/login";
import Home from "../../pages/home";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
	      <div>
          <Route exact path="/" component={Login} />
	      </div>
      </Router>
    );
  }
}

export default App;
