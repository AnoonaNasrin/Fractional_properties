import React from "react";
import "./CardContainer.css";

function CardContainer({ headline, place, price, amenities, image }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt={headline} />
      </div>
      <div className="info-container">
        <h2 className="headline">{headline}</h2>
        <p className="place">{place}</p>
        <p className="price">{price}</p>
        <ul className="amenities">
          {["hsj"].map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardContainer;
