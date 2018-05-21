import React from "react";
import { Router } from "react-dom-router";
import Login from "../pages/login";

// ??????

// home route will be triggered after a click/sign in/stuff  

const LoginRoute = () => (
	<Router>
    <div>
      <Route path="/home" component = {Home} />
    </div>
  </Router>
);

