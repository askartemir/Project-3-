import React from "react";
import {BrowserRouter as Route, Router, Link} from "react-router-dom";
import createProfile from "../pages/createProfile";

const CreateProfileRoute = () =>(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profilepage" component={ProfilePage} />
        </div>
    </Router>
);
