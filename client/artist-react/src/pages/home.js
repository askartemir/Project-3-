// based off of user.html
import React from "react";
import { Col, Card, CardTitle } from "react-materialize";
import "./home.css";
// import Wrapper from "../components/wrapper/wrapper";
import TextArea from "../components/textarea/textarea";
import DropDown from "../components/profile/dropdown";
// import Paginate from "../components/pagination/pagination";
import "./login.js";

import Paginate from "../components/pagination/pagination";

export default class Home extends React.Component {
	render () {
		return (
		<div>
			{/* <div className = "wrapper">
				<Card className='small'
				  header={<CardTitle image='http://via.placeholder.com/140x140'>Card Title</CardTitle>}
				  actions={[<a href='#'>This is a Link</a>]}>
				  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
				</Card>
			</div> */}

			<DropDown />
			{/* <Wrapper /> */}
			<TextArea />
			<Paginate />
		</div>
		);
	}
}