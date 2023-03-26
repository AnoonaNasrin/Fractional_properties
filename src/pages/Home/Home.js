import React from "react";
import MyNavbar from "../../Components/Navbar/Navbar";

import video from "../../assets/videos/sample.mp4";
import logo from "../../assets/images/Dream.png";
import own from "../../assets/images/Own.png";
import Exp from "../../assets/images/Experience.png";
import keep from "../../assets/img/keep.svg";
import frame from "../../assets/img/frame.svg";
import mange from "../../assets/img/Mange.svg";
import newnbr from "../../assets/img/new-n.svg";
import last from "../../assets/images/image-1.jpg";
import { Container, Row, Col } from "react-bootstrap";

import "./Home.css";
import TabPro from "../../Components/Tabs/Tabs";
import LeftTabs from "../../Components/LeftTabs/LeftTabs";
import Potion from "../../Components/potions/potion/potion";
import Box from "../../Components/potions/box/box";

import Faq from "../../Components/faq/Faq";

import ContactForm from "../../Components/contact-form/ContactForm";

export default function Home() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <section className="main-head">
          <div className="container">
            <h1>The smart way to own a luxury second home</h1>
            <p>
              Join an exclusive community of luxury homeowners and co-own shares
              in a property that is yours, truly.
            </p>
          </div>
        </section>
        <section className="video-wrap">
          <div className="video-tag">
            <video
              className="video-baner"
              autoPlay
              loop
              muted
              playsInline
              src={video}
            ></video>
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
        <section className="properties">
          <h1 className="explore-h1">Explore our properties</h1>
          <div className="custom-container">
            <TabPro />
            {/* <ul className="nav nav-explore-wrap nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                 <button  className="nav-link active" id="featured"  data-bs-target="#pill-featured" type="button"
                 role="tab" aria-controls="pill-featured" aria-selected="true" fdprocessedid="5znkcb"> Featured
                 </button>
                </li>
               <li className="nav-item" role="presentation">
                <button className="nav-link active" id="featured" data-bs-toggle="pill" data-bs-target="#pill-upcoming" type="button" role="tab" aria-controls="pill-upcoming" aria-selected="false" fdprocessedid="7xe909">
                 Upcoming
                </button>
               </li>
             </ul> */}
          </div>
        </section>
        <section className="section-4">
          <div className="sec-4">
            <h1 className="custom-h1">Co-ownership with FRACTIONAL PROPERTY</h1>
            <div className="left-sec">
              <LeftTabs />
            </div>
          </div>
        </section>
        <section className="we-make">
          <Container>
            <h1 className="text-center mb-5">
              We make it really easy to manage your new home
            </h1>
            <Row>
              <Col sm={6} md={3} className="mb-4">
                <Box
                  image={keep}
                  title="Stay in touch"
                  lines="The FRACTIONAL PROPERTY mobile application allows you to get in touch with our concierge or property managers who will help you plan your stay better and for you to stay updated."
                />
              </Col>
              <Col sm={6} md={3} className="mb-4">
                <Box
                  image={frame}
                  title="Pick when you’d like to stay"
                  lines="Reserve travel and stay days for up to two years in advance.Holidays and common vacation periods are offered to each owner on a rotating basis."
                />
              </Col>
              <Col sm={6} md={3} className="mb-4">
                <Box
                  image={newnbr}
                  title="Experience your new neighbourhood"
                  lines="We curate and recommend experiences in and around your home. Whether you’re traveling with family, friends, or by yourself, we have something for you."
                />
              </Col>
              <Col sm={6} md={3} className="mb-4">
                <Box
                  image={mange}
                  title="Manage your home remotely"
                  lines="If and when there’s a need for your home to undergo repairs and maintenance, we send you notifications and updates on the mobile app."
                />
              </Col>
            </Row>
          </Container>
        </section>
        {/* <section className="section-bg">
          <h1>Not a time-share, but so much more</h1>
          <p>
            When you buy a home with FRACTIONAL PROPERTY, you invest in an
            asset. Here's how FRACTIONAL PROPERTY is different from investing in
            a Timeshare, and from Standard Ownership.
          </p>
        </section> */}

        <section className="section-img">
          <img src={last} />
        </section>
        <section className="ques">
          <h1 className="sec-qs">Questions ?</h1>
          <Faq data={faqData} />
        </section>
        <section className="contact-form">
          <ContactForm />
        </section>
      </main>
    </>
  );
}

const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
    image: "https://www.example.com/react.png",
    alt: "React logo",
  },
  {
    question: "How do I install React?",
    answer: "You can install React using npm or yarn.",
    image: "https://www.example.com/install.png",
    alt: "Installation instructions",
  },
  {
    question: "What are React hooks?",
    answer:
      "React hooks are functions that let you use state and other React features without writing classes.",
    image: "https://www.example.com/hooks.png",
    alt: "Hooks example",
  },
];
