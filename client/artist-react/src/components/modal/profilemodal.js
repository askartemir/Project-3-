import React from "react";
import { Modal, Button } from "react-materialize";
import TextArea from "../textarea/textarea";
import "../../pages/home.css";

const ProfileModal = props => (
    <Modal className = "expand-modal"
  header="Data"
  fixedFooter
  trigger={<Button>Expand</Button>}>
  Profile data
</Modal>
)

export default ProfileModal; 