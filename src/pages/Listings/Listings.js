import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/image-1.jpg";
import owner from "../../assets/img/Co-own.svg";
import flexSvg from "../../assets/img/The-flex.svg";

import MyNavbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";

import "./Listing.css";
import PropertyFilter from "../../Components/PrpertyCard/PropertyMain";

const upCome = [
  {
    image:
      "https://i.phuketbuyhouse.com/upload/phuketbuy/Houseimage/default/7/7/0/77086.jpg",
    heading: "Up1",
    description:
      "Lorem ipsum Lorem ipsum the place is located in goa one of the favorite we provide Lorem ipsum the place is located in goa one of the favorite we provide Lorem ipsum the place is located in goa one of the favorite we provide 1q",
    Bedrooms: "4",
    place: "Goa",
    Baths: "2",
    price: "200000",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--vWbC4AeJNuDSq9GiMEzCubstDZM2xFcjlF7ldBh1_7OSq9oKyQkFEL1jOh5rPlSz3A&usqp=CAU",
    heading: "Up2",
    description:
      "Lorem ipsum Lorem ipsum the place is located in goa one of the favorite we provide Lorem ipsum the place is located in goa one of the favorite we provide ",
    Bedrooms: "4",
    place: "Goa",
    Baths: "2",
    price: "200000",
  },
  {
    image:
      "https://cdn.wowowhome.com/photos/2018/03/Midcentury-Modern-by-Urban-Development-002.jpg",
    heading: "Up3",
    description:
      "Lorem ipsum the place is located in goa one of the favorite we provide Lorem ipsum the place is located in goa one of the favorite we provide Lorem ipsum the place is located in goa one of the favorite we provide   ",
    Bedrooms: "4",
    place: "Goa",
    Baths: "2",
    price: "200000",
  },
];

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
          <div className="listing-1"></div>
          <div>
            <PropertyFilter />
          </div>
        </section>
        <section className="contact-section ">
          <div className="contact-main row">
            <div className="head-contact col-lg-6 col-md-12">
              <h1>Need more help to find your house?</h1>
              <h5>
                We can help you get your second home at the location of your
                choice{" "}
              </h5>
              <Link to="/">
                <button className="head-conta-btn btn">Contact Us</button>
              </Link>
            </div>
            <div className="cont-img col-lg-6 col-md-12">
              <img src="https://corporategrowth.org/wp-content/uploads/2020/09/meet-customer-needs-article.jpg" />
            </div>
          </div>
        </section>
        <section className="tab-sec-list">
          <div className="sec-tab-head">
            <h1>Upcoming Properties</h1>
            <Slider data={upCome} />
          </div>
        </section>
        <section className="section-ownExp row">
          <div className="col-lg-6 col-md-12 sec-own-exp mb-5">
            <h2>
              FRACTIONAL PROPERTY ,<br />
              to own the experience
            </h2>
          </div>
          <div className="col-lg-6 col-md-12 ownSec-main">
            <div className="sec-ownership">
              <dv className="sec-mini-exp">
                <img src={owner} />
              </dv>
              <div className="sec-min-2">
                <h5>
                  Co-ownership allows you to own multiple homes in different
                  destinations, at the cost of a single home.
                </h5>
              </div>
            </div>
            <div className="sec-ownership">
              <div className="sec-mini-exp">
                <img src={flexSvg} />
              </div>
              <div className="sec-mini-3">
                <h5>
                  The flexibility to sell your share directly to other buyers,
                  or on the FRACTIONAL PROPERTY marketplace, whenever you wish
                  to.
                </h5>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
