import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./box.css";

export default function Box(props) {
  return (
    <Row className="box-1">
      <Col xs={12} md={3} className="content-icon">
        <div className="box-2">
          <Image src={props.image} fluid />
        </div>
      </Col>
      <Col xs={12} md={9} className="box">
        <h5 className="box-3">{props.title}</h5>
        <p>{props.lines}</p>
      </Col>
    </Row>
  );
}
