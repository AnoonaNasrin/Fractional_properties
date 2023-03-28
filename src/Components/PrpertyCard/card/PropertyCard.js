import React from "react";
import "./PropertyCard.css";

export default function PropertyCard() {
  return (
    <div className="property-card col-lg-5 col-sm-11 ">
      <div className="card-flex">
        <div className="flex-item">
          <div className="img-wrap">
            <img
              src="https://www.yours.house/wp-content/uploads/2022/04/Ali-8005-resize.jpg"
              className="img"
              alt=""
            />
          </div>
          <div className="btn-wrap">
            <button className="btn-card grey dis-464" id="add" v="464">
              Compare
            </button>
            <button className="btn-card green overview" id="464">
              Quick View
            </button>
          </div>
        </div>
        <a href="https://www.yours.house/properties/goa/" className="flex-item">
          <div className="contents">
            <h4>YOURS™ Fonteira</h4>
            <p>
              <img
                src="https://www.yours.house/wp-content/themes/yours/assets/img/property-listing/mappinline.svg"
                alt=""
              />
              Assagao, Goa
            </p>
            <h5>
              <span>₹</span>140 Lakhs <span>/</span> share
            </h5>
            <ul className="components-list">
              <li>
                <img
                  src="https://www.yours.house/wp-content/themes/yours/assets/img/property-listing/bed.svg"
                  alt=""
                />
                <span>3 Beds</span>
              </li>
              <li>
                <img
                  src="https://www.yours.house/wp-content/themes/yours/assets/img/property-listing/tub.svg"
                  alt=""
                />
                <span>3.5Baths</span>
              </li>
              <li>
                <img
                  src="https://www.yours.house/wp-content/themes/yours/assets/img/property-listing/angle.svg"
                  alt=""
                />
                <span>2648 sqft</span>
              </li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
}
