import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Login from "../../pages/login";
import Home from "../../pages/home";
import './App.css';

import Login from "../../pages/login.js";
import Home from "../../pages/home.js";

import Form from "./form/form.js";
import Modal from "./modal/modal.js";
import Image from "./image/image.js";
import Profile from "./profile/profile.js";
import TextArea from "./textarea/textarea.js";
import Wrapper from "./wrapper/wrapper.js";

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
