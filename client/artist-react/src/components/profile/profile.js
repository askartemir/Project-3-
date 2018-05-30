import React from "react";
import { Card, CardTitle, Col, MediaBox } from "react-materialize";
import Image from "../image/image.js";
import "../../pages/createProfile.css";

const Profile = props => (

    <div className = "container">
            <Card className='profilebox' textClassName='black-text'  title='Test User'>
               <MediaBox src="http://via.placeholder.com/140x140" width="200"/>
               <div className = "prom">
                   Here's some text about how cool we are. Super super cool. So cool. Cooler than a prom dress from the 80s in a vintage store.
                </div>
            </Card>
    </div>
)

export default Profile;