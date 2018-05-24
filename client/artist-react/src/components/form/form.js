import React from "react";

const Form = props => {
  return (
    <div className="card-content">
        <span className ="card-title"><h3>Sign Up</h3></span>
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" value={props.value.email} onChange={props.onChange}/>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="password">Password </label>
            <input type="password" name="password" value={props.value.password} onChange={props.onChange}/>
          </div>
        </div>
    </div>
  );
}

export default Form;