import React from "react"
import Form from "./form.js"

const Modal = props => (
	  <div id="modal1" class="modal">
    <div className="modal-content">

    <Form />

    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat"></a>
      	<a class="waves-effect waves-light btn">Go</a>
    </div>
  </div>
)

export default Modal;