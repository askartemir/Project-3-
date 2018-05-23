import React from "react";
import "./createProfile.css";
import {Button, Input, File, Form} from "react-materialize";
import SubmitButton from "../components/submitButton/submitButton.js";

const createProfile = props =>(
    <Form id = "newProfile">
        <Row>
            <Input s={5} m={5} l={5} offset={1} label = "First Name" />
            <Input s={5} m={5} l={5} label = "Last Name" />
            <Input type = "password" label = "Password" s={11} m={11} l={11} offset={1} />
            <Input type = "file" label = "Enter File for Profile Pic" s={8} m={8} l={8} offset={1} />
            <Button type = "submit">Submit</Button>
        </Row>
    </Form>
)

export default createProfile;