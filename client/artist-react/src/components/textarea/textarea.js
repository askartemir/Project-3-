import React from "react";
import { Col, Card } from "react-materialize";
import ProfileModal from "../modal/profilemodal";

const TextArea = props => {
	let data = [1,2,3,4,5,6,7,8,9,10];

	data = data.map((data, index) => {
		return (
			<div className = "container">
				<Card key={data.toString()} className="card-panel" textClassName='black-text' title='Venue/artist name' actions={<ProfileModal />}>
				Will be populated with data from artists or venues
				</Card>
			</div>
		);
	});

	return(
		<Col m={6} s={12}>
		{data}
		</Col>
	);
}
export default TextArea;