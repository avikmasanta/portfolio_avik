// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Home2() {
//   return (
//     <Container fluid className="home-about-section" id="about">
//       <Container>
//         <Row>
//           <Col md={8} className="home-about-description">
//             <h1 style={{ fontSize: "2.6em" }}>
//               LET ME <span className="purple"> INTRODUCE </span> MYSELF
//             </h1>
//             <p className="home-about-body">
//               I fell in love with programming and I have at least learnt
//               something, I think… 🤷‍♂️
//               <br />
//               <br />I am fluent in classics like
//               <i>
//                 <b className="purple"> Java, Javascript and Go. </b>
//               </i>
//               <br />
//               <br />
//               My field of Interest's are building new &nbsp;
//               <i>
//                 <b className="purple">Web Technologies and Products </b> and
//                 also in areas related to{" "}
//                 <b className="purple">
//                   Blockchain.
//                 </b>
//               </i>
//               <br />
//               <br />
//               Whenever possible, I also apply my passion for developing products
//               with <b className="purple">Node.js</b> and
//               <i>
//                 <b className="purple">
//                   {" "}
//                   Modern Javascript Library and Frameworks
//                 </b>
//               </i>
//               &nbsp; like
//               <i>
//                 <b className="purple"> React.js and Next.js</b>
//               </i>
//             </p>
//           </Col>
//           <Col md={4} className="myAvtar">
//             <Tilt>
//               <img src={myImg} className="img-fluid" alt="avatar" />
//             </Tilt>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/avikmasanta"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href=" "
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiOutlineTwitter />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/avikmasanta/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href=" https://www.instagram.com/avikmasanta0604?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillInstagram />
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }
// export default Home2;

import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                Hi, I’m <b className="purple">Avik Masanta</b>, a B.Tech Computer Science student at Lovely Professional University with a passion for{" "}
                <b className="purple">Full-Stack Development</b>. I specialize in creating efficient, user-focused web applications and have hands-on experience across both front-end and back-end technologies.
                <br />
                <br />
                Feel free to connect with me by phone at <b className="purple">8391828260</b> or via the contact form below!
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/avikmasanta"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href=" "
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/avikmasanta/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/avikmasanta0604"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Button
            variant="primary"
            onClick={handleShow}
            style={{
              position: "fixed",
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              backgroundColor: "#6e8efb",
              border: "none",
              padding: "10px 15px",
              zIndex: 9999,
              boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            }}
          >
            Contact Me
          </Button>
        </Container>
      </Container>

      <Modal show={showModal} onHide={handleClose} centered className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <style>{`
        .custom-modal .modal-content {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          color: white;
          animation: fadeInUp 0.4s ease-in-out;
        }

        .custom-modal .form-control {
          background-color: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }

        .custom-modal .form-control::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .custom-modal .form-control:focus {
          background-color: rgba(255, 255, 255, 0.15);
          outline: none;
          border-color: #a777e3;
          box-shadow: 0 0 5px #a777e3;
        }

        .custom-modal .modal-title,
        .custom-modal .form-label {
          color: white;
        }

        .custom-modal .btn-primary {
          background: linear-gradient(135deg, #6e8efb, #a777e3);
          border: none;
          border-radius: 8px;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default Home2;


