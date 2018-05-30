import React from "react";
import { Card, CardTitle, Col } from "react-materialize";
import Image from "../image/image.js";

const Profile = props => (

    <div className = "container">
        <Image />

        <Col>
            <Card className='profilebox' textClassName='black-text'  title='Card title'>
               Profile data
            </Card>
        </Col>
    </div>
)

export default Profile;