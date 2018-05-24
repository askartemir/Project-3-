// based off of user.html
import React from "react";
import { Col, Card } from "react-materialize";
import "./home.css";
// import Wrapper from "../components/wrapper/wrapper";
import TextArea from "../components/textarea/textarea";
import DropDown from "../components/profile/dropdown";
// import Paginate from "../components/pagination/pagination";

export default class Home extends React.Component {
	render () {
		return (
		<div>
			<div className = "wrapper">
				<Card className='small'
				  header={<CardTitle image='https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Kratos_PS4.jpg/234px-Kratos_PS4.jpg'>Card Title</CardTitle>}
				  actions={[<a href='#'>This is a Link</a>]}>
				  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
				</Card>
			</div>

			<DropDown />
			{/* <Wrapper /> */}
			<TextArea />
			{/* <Paginate /> */}
		</div>
		);
	}
}