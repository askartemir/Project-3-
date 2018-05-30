// based off of user.html
import React from "react";
import { Col, Card, CardTitle } from "react-materialize";
import "./home.css";
// import Wrapper from "../components/wrapper/wrapper";
import TextArea from "../components/textarea/textarea";
import DropDown from "../components/profile/dropdown";
import Paginate from "../components/pagination/pagination";

export default class Home extends React.Component {
	render () {
		return (
		<div>
			<div className = "wrapper">
				<Card className='small opener'
				  title={"Welcome to Artist Croissant"}
				  actions={[<a href='#'></a>]}>
				  "Hello Artist! Welcome to Artist Croissant, the place where you can quickly find venues 
				  and businesses looking for local art! The list below are the venues and their contact information. 
				  Please feel free to reachout to any of them to learn more about their art needs"
				</Card>
			</div>
			
			<DropDown />
			{/* <Wrapper /> */}
			<TextArea />
			<Paginate />
		</div>
		);
	}
}