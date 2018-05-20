import React from "react";
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
				      <div className="card-image">
				      </div>
					
				      <div className="card-stacked">
				        <div className="card-content">
				          <p>Are you an artist, or a venue looking for an artist?</p>
				        </div>

						<div className="card-action center-align">
					<Modal
					  header="Sign Up"
					  trigger={<Button>MODAL</Button>}>
					  <Form />
					</Modal>

					<Modal
					  header="Sign Up"
					  trigger={<Button>MODAL</Button>}>
					  <Form />
					</Modal>

				 		</div>
				 	  </div>
				 	</div>
				</div>
			</div>


			<Modal
			  header="Sign In"
			  trigger={<Button>MODAL</Button>}>
			  <Form />
			</Modal>
		</div>
		);
	}
}