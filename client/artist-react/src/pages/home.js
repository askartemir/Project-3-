// based off of user.html
import React from "react";
import "./home.css";
import { Card, CardTitle, Image } from 'react-materialize';
import Form from "../components/profile/profile.js";

export default class Home extends React.Component {
	render () {
		return (
		<div>
			<div className = "wrapper">
				<Card className='small'
				  header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
				  actions={[<a href='#'>This is a Link</a>]}>
				  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
				</Card>
			</div>
		</div>
		);
	}
}