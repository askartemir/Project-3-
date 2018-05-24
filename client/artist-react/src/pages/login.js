import React from "react";
// import Modal from "../components/modal/modal";
import "./login.css";
import { Redirect } from "react-router-dom";
import { Button, Card, Col, Modal, Icon } from 'react-materialize';
import Form from "../components/form/form.js";

export default class Login extends React.Component {
	state = {
			email: "",
			password: "",
			redirectToHome: false,
			isModalOpen: false
	};

	handleSignUp = () => {
		console.log('help outside');
			if (this.state.email === "test123" && this.state.password === "test123") {
				this.setState({isModalOpen: false}, ()=>this.setState({ redirectToHome: true }));
			}
	}

	handleOnChangeSignUp = (event) => {
		let target = event.target;
		let name = target.name;
		let value = target.value

		this.setState({ isModalOpen: true, [name]: value });
	}

	onClickClose() {
		this.setState({isModalOpen: false});
	}

	render () {
		if(this.state.redirectToHome) {
			return <Redirect to={ {pathname: "/home"} } />
		}

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
					  trigger={<Button>Artist</Button>} open={this.state.isModalOpen} actions={<Button onClick={this.handleSignUp}>Go</Button>}>
					  <Form value={this.state} onChange={this.handleOnChangeSignUp} />
					</Modal>
					</div>

					<div className = "center-align">
					<Modal
					  trigger={<Button>Venue</Button>} open={this.state.isModalOpen} actions={<Button onClick={this.handleSignUp}>Go</Button>}>
					  <Form value={this.state} onChange={this.handleOnChangeSignUp} />
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
					trigger={<Button>Already In?</Button>} open={this.state.isModalOpen} actions={<Button onClick={this.handleSignUp}>Go</Button>}>
					<Form value={this.state} onChange={this.handleOnChangeSignUp}/>
				</Modal>
			</div>
		</div>
		);
	}
}