import React from "react";
import img from "../../../assets/images/image-1.jpg";
import MyNavbar from "../../Navbar/Navbar";

import "./Listing.css"

export default function List() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <section className="sec-list">
          <div className="list-img">
            <img src={img} />
          </div>
        </section>

        <section>
          <div className="listing-1">
            <select name="select city" value="select city">
              <option>Goa</option>
              <option>Kerala</option>
              <option>Mumbai</option>
            </select>

            <select name="price"></select>

            <select name="All type">
              <option>All type</option>
              <option>Featured</option>
              <option>New Releases</option>
              <option>Upcoming</option>
            </select>
          </div>
          <div>
            <select name="All type">
              <option>All type</option>
              <option>Featured</option>
            </select>
          </div>
        </section>
      </main>
    </>
  );
}
