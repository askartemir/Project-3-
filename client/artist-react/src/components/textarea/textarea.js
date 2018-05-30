
import React from "react";
import { Col, Card } from "react-materialize";
import ProfileModal from "../modal/profilemodal";

class TextArea extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		error: null,
		isLoaded: false,
		users: [],
	  };
	}
  
	componentWillMount() {
	  fetch("api/users", {
			method: 'GET'
		}).then(function(response) {
				return response.json();
	  }).then((body) => {
          console.log("we made it");
			this.setState({
			  isLoaded: true,
			  items: body
			});
		  },
		  (error) => {
			this.setState({
			  isLoaded: true,
			  error
			});
		  }
		)
	}
  
	render() {
	  const { error, isLoaded, items } = this.state;
	  if (error) {
		return <div>Error: {error.message}</div>;
	  } else if (!isLoaded) {
		return <div>Loading...</div>;
	  } else {
		return (
		  <ul>
			{items.map(item => (
			  <div className = "container">
				<Card key={item.id} className="card-panel" textClassName='black-text' title={item.name} actions={<ProfileModal />}>			
				<ul> {item.email} </ul>
				<ul> {item.details} </ul>
				<ul> {item.userType} </ul>
				<ul> {item.favorites} </ul>
				</Card>
			</div>
			))}
		  </ul>
		);
	  }
	}
  }
export default TextArea;