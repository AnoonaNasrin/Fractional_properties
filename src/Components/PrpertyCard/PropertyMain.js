import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import PropertyCard from "./card/PropertyCard";

import "./Property.css";

export default function PropertyFilter() {
  return (
    <>
      <div>
        <Dropdown />
        <div className="filter-heading px-lg-5 my-3 px-sm-4">
          <h2>Showing 5 results</h2>
        </div>
        <div className="row property-container">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </>
  );
}
