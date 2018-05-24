import React from "react"
import Form from "../form/form.js"
import { Button, Card, Row, Col } from 'react-materialize';

const Modal1 = props => (
<div id="modal1" className="modal">

	<div className="modal-content">

	    <div class="modal-footer">     
		    <a href="#!" class="modal-close waves-effect waves-green btn-flat"></a>
			<a class="waves-effect waves-light btn">Go</a>

	    <Form />

	    <div className="modal-footer">     
		    <a href="#!" className="modal-close waves-effect waves-green btn-flat"></a>
			<a className="waves-effect waves-light btn">Go</a>

	    </div>

	</div>

</div>

)

export default Modal;