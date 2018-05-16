import React from "react";

const Form = props => (
  <div className="card-content">
        <span className ="card-title"><h3>Sign Up</h3></span>
        <div className="row">
          <div className="input-field col s12">
            <label for="email">Email address</label>
            <input type="email" name="email" id="email" />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <label for="password">Password </label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
      </div>
  )

export default Form;