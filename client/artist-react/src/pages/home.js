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
			<DropDown />
			{/* <Wrapper /> */}
			<TextArea />
			{/* <Paginate /> */}
		</div>
		);
	}
}