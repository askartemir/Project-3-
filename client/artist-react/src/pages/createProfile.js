import React from "react";
import "./createProfile.css";
import {Button, Input, File, Form} from "react-materialize";

const createProfile = props =>(
    <Form id = "newProfile">
        <Row>
            <Input s={6} m={6} l={6} label = "First Name" />
            <Input s={6} m={6} l={6} label = "Last Name" />
            <Input type = "password" label = "Password" s={12} m={12} l={12} />
            <Input type = "file" label = "Enter File for Profile Pic" s={8} m={8} l={8} />
        </Row>
    </Form>
)

export default createProfile;