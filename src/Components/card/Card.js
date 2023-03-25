import Card from "react-bootstrap/Card";

import "./Card.css";

export default function CardComponent(props) {
  return (
    <>
      <Card className="card-body">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <div className="card-div">
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
