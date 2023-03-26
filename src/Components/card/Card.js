import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./Card.css";

export default function CardComponent(props) {
  return (
    <>
      <Col xs={12} md={6} lg={4} className="mb-4 w-100">
        <Card className="card-body h-100">
          <Card.Img variant="top" src={props.image} className="h-50 w-100" />
          <Card.Body>
            <div className="card-div h-50">
              <Card.Title className="card-title">{props.title}</Card.Title>
              <Card.Text>{props.text}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
