import React from "react";
import TabPro from "../../Tabs/Tabs"
import Potion from "../../potions/potion/potion";
import Box from "../../potions/box/box";
import logo from "../../../assets/images/Dream.png";
import own from "../../../assets/images/Own.png";
import Exp from "../../../assets/images/Experience.png";
import img from "../../../assets/images/img-4.jpg"
import MyNavbar from "../../Navbar/Navbar";

import "./Fractional.css"


export default function Fraction(){
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <section className="sect-frac">
          <div className="frc-img">
            <img src={img} />
          </div>
        </section>
        <section className="home_secnd">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 works hai">
                <p>HOW FRACTIONAL PROPERTY WORKS</p>
                <h2> We make owning a second home easy</h2>
                <a className="btn-dark" href="">
                  Know More
                </a>
              </div>
              <div className="col-md-6 house text">
                <Potion
                  image={logo}
                  title="Dream"
                  lines="Pick from our list of stunning homes at your favorite
                        destination, and become a co-owner of your dream second
                        home."
                />
                <Potion
                  image={own}
                  title="Own"
                  lines="Pick from our list of stunning homes at your favorite
                        destination, and become a co-owner of your dream second
                        home."
                />
                <Potion
                  image={Exp}
                  title="Experience"
                  lines=" Enjoy a luxury vacation at your home for up to
                        forty-five days a year, for every share owned from the
                        eight that a FRACTIONAL PROPERTY  is divided into."
                />
              </div>
            </div>
          </div>
        </section>
        <section className="frc-sec2">
          <div className="explore-frc">
            <h1>Explore  our properties</h1>
          </div>
          <div className="pro-sec">
           <TabPro/>
          </div>
        </section>
        ;
      </main>
    </>
  );
}
