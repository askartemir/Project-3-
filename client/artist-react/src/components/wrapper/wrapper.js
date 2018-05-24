import React from "react";
import { Card, CardTitle } from "react-materialize";
import Profile from "../profile/profile.js";
import Image from "../image/image.js";
import "./wrapper.css"

const Wrapper = props => (
  <div className = "container" id = "profile-container">
    <Card className='small'
    header={<CardTitle>Image</CardTitle>}
    actions={[<a href='#'>Hello Artist / Venue</a>]}>
    This will also be populated.
    </Card>
  </div>
	)


export default Wrapper;