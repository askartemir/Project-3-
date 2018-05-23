import React from "react";
// import Modal from "../components/modal/modal";
import "./login.css";
import { Button, Card, Col, Modal, Icon } from 'react-materialize';
import Form from "../components/form/form.js";

export default class Login extends React.Component {
	render () {
		return (
		<div>
			<div className ="container">
				<div className="center-align col s12 m7">
				  <h3 className="header">Welcome</h3>
				    <div className="card horizontal">
					
				      <div className="card-stacked">
				        <div className="card-content">
				          <p>Are you an artist, or a venue looking for an artist?</p>
				        </div>

		<div className = "button-container">
						<div className="card-action center-align">
							<div className = "center-align">
					<Modal
					  trigger={<Button>Artist</Button>}>
					  <Form />
					</Modal>
					</div>

					<div className = "center-align">
					<Modal
					  trigger={<Button>Venue</Button>}>
					  <Form />
					</Modal>
					</div>
				 		</div>
				 	  </div>
				 	</div>
				</div>
			</div>
		</div>

			<div className = "already-in">
				<Modal
					header="Sign In"
					trigger={<Button className = "already-in">Already in?</Button>}>
					
					<Form />
				</Modal>
			</div>
		</div>
		);
	}
}