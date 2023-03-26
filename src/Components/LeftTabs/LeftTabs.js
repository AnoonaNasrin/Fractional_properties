import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import CardComponent from "../card/Card";
import "./LeftTabs.css";

import logo from "../../assets/images/imag2.jpg";
import img1 from "../../assets/images/img3.jpg";
import img2 from "../../assets/images/img-4.jpg";
import img from "../../assets/images/image-1.jpg";
import img3 from "../../assets/images/img-n.png";

export default function LeftTabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <div className="left-tab">
            <Nav variant="pills" id="tabs-left" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Trust</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Ownership</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Freedom</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="four">Luxury</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="five">Tech-Enabled</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Col>
        <Col sm={9}>
          <div className="left-1">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <CardComponent
                  image={logo}
                  title="Goa"
                  text="But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. To do so, I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <CardComponent
                  image={img}
                  title="Pune"
                  text="But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. To do so, I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <CardComponent
                  image={img1}
                  title="Banguluru"
                  text="The FRACTIONAL PROPERTY mobile application allows you to get in touch with our concierge or property managers who will help you plan your stay better and for you to stay updated."
                />
              </Tab.Pane>
              <Tab.Pane eventKey="four">
                <CardComponent
                  image={img2}
                  title="Tamilnadu"
                  text="The FRACTIONAL PROPERTY mobile application allows you to get in touch with our concierge or property managers who will help you plan your stay better and for you to stay updated."
                />
              </Tab.Pane>
              <Tab.Pane eventKey="five">
                <CardComponent
                  image={img3}
                  title="Kerala"
                  text="The FRACTIONAL PROPERTY mobile application allows you to get in touch with our concierge or property managers who will help you plan your stay better and for you to stay updated."
                />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Col>
      </Row>
    </Tab.Container>
  );
}
