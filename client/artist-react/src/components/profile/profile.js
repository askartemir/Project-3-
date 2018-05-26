import React from "react";
import { Card, CardTitle, Col } from "react-materialize";
import Image from "../image/image.js";

const Profile = props => (

    <div className = "container">
        <Image />

        <Col m={6} s={12}>
            <Card className='profilebox' textClassName='black-text'  title='Card title' actions={[<a href='#'>This is a link</a>]}>
               Profile data
            </Card>
        </Col>
    </div>
)

export default Profile;