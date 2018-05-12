import React from "react";
import Modal from "../components/modal/modal";

export default class Login extends React.Component {
	render () {
		return (
		<div>
			<div className ="container">
				<div className="center-align col s12 m7">
				  <h3 className="header">Welcome</h3>
				    <div className="card horizontal">
				      <div className="card-image">
				      </div>
					
				      <div className="card-stacked">
				        <div className="card-content">
				          <p>Are you an artist, or a venue looking for an artist?</p>
				        </div>

						<div className="card-action center-align">
					 <button></button>
				 		</div>
				 	  </div>
				 	</div>
				</div>
			</div>

			<Modal />
			<Modal />
		</div>
		);
	}
}