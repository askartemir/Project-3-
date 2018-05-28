import React from "react";
import "./createProfile.css";
import { CardPanel, Col, Button, Input, File, Form, Row, MediaBox } from "react-materialize";

export default class createProfile extends React.Component {
	render () {
		return (
		<div>
            <div className = "container form-box">
            <CardPanel>
                <Row>
                    <div className = "profile-box">
                    <MediaBox src="http://via.placeholder.com/140x140" width="200"/>
                    </div>
                
                <div className = "content">
                    <Input s={6} label="First Name" />
                    <Input s={6} label="Last Name" />
                </div>
                    
                    <div className = "about">
                        <Row>
                            <Input type='textarea' className = "text-extended" label = "Tell us a bit about yourself."/>
                        </Row>
                    </div>

                    <Button className = "linkbtn" waves='light' node='a' href='/home'> I'm done </Button>
                </Row>
                </CardPanel>
            </div>
		</div>
		);
	}
}
