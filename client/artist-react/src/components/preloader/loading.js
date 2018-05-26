import React from "react";
import { Row, ProgressBar, Col } from "react-materialize";

const PageLoader = props => (
    <Row>
        <Col s={12}>
            <ProgressBar progress={70}/>
        </Col>
        <Col s={12}>
            <ProgressBar />
        </Col>
    </Row>
)

export default PageLoader;

// import PageLoader from "../components/preloader/loading";