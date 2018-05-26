import React from "react";

import Profile from "./profile/profile.js";
import Image from "./image/image.js";
import { Button, Card, Row, Col } from 'react-materialize';


const profileModal = props => (
<Modal
  header='Modal Header'
  fixedFooter
  trigger={<Button>MODAL WITH FIXED FOOTER</Button>}>
  <TextArea />
</Modal>
)

export default Modal;