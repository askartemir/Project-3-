import React from "react";
import { Card, Title } from "react-materialize";
import Profile from "../components/profile/profile";
import DropDown from "../components/profile/dropdown";

export default class ProfilePage extends React.Component {
	render () {
		return (
		<div>
		<DropDown />
            <Profile />
		</div>
		);
	}
}