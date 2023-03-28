import React from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import "./Slider.css";

export default function Slider(props) {
  return (
    <Carousel className="slider" slide={false}>
      {props.data.map((element) => {
        return (
          <Carousel.Item>
            <Row className="slider-child">
              <Col md={6} className="slider-2">
                <h4>{element.place}</h4>
                <h3>{element.heading}</h3>
                <p>{element.description}</p>
                <div className="slider-items">
                  <div>
                    <h5>{element.Bedrooms}</h5>
                    <h5>Bedrooms</h5>
                  </div>
                  <div>
                    <h5>{element.Baths}</h5>
                    <h5>Baths</h5>
                  </div>
                  <div>
                    <h5>{element.price}</h5>
                    <h5>Price</h5>
                  </div>
                </div>
                <div className="slider-d">
                  <Button variant="dark" className="slider-btn">
                    View Details
                  </Button>
                  <Link to ='view-details'>
                    View more details
                  </Link>
                </div>
              </Col>
              <Col md={6} className="slider-3">
                <img
                  className="d-block w-100 slider-img"
                  src={element.image}
                  alt="First slide"
                />
              </Col>
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
