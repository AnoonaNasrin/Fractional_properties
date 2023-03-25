import React from "react";
import { Carousel } from "react-bootstrap";

import "./Slider.css";

export default function Slider(props) {
  return (
    <Carousel className="slider" slide={false}>
      {props.data.map((element) => {
        return (
          <Carousel.Item>
            <div className="slider-child">
              <div className="slider-2">
                <h4>{element.place}</h4>
                <h3>{element.heading}</h3>
                <p>{element.description}</p>
                <div className="slider-items">
                  <div>
                    <h5> {element.Bedrooms}</h5>
                    <h5>Bedrooms</h5>
                  </div>
                  <div>
                    <h5>{element.Baths}</h5>
                    <h5>Baths</h5>
                  </div>
                  <div>
                  <h5> {element.price}</h5>
                  <h5>Price</h5>
                  </div>
                </div>
                {/* <div className="slider-ul">
                   <ul className="slider-list">
                     <li>Bedrooms / {element.Bedrooms}</li>
                     <li>Baths / {element.Baths}</li>
                     <li>|</li>
                     <li> Price / {element.price}</li>
                   </ul>
                 </div> */}
                <div className="slider-d">
                  <button className="slider-btn">View Details</button>
                  <a className="slider-a" href="#">
                    View more details
                  </a>
                </div>
              </div>
              <div className="slider-3">
                <img
                  className="d-block w-100 slider-img"
                  src={element.image}
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
