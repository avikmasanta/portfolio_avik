// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi Everyone, I am <span className="purple">Avik Masanta </span>
//             from <span className="purple"> WestBengal, India.</span>
//             <br />
//             I am a software developer .
//             <br />
//             I am currently pursuing my B-tech degree from Lovely Profee+ssional university.
//             <br />
//             <br />
//             Apart from coding, some other activities that I love to do!
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Playing Games
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Writing Tech Blogs
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Travelling
//             </li>
//           </ul>

//           <p style={{ color: "rgb(155 126 172)" }}>
//             "Strive to build things that make a difference!"{" "}
//           </p>
//           <footer className="blockquote-footer">Avik</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;

// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card
//       className="shadow-lg border-0 rounded-4 p-4"
//       style={{
//         background: "rgba(255, 255, 255, 0.1)",
//         backdropFilter: "blur(10px)",
//         WebkitBackdropFilter: "blur(10px)",
//         color: "#fff",
//         border: "1px solid rgba(255, 255, 255, 0.2)",
//       }}
//     >
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <h2
//             className="text-center mb-4"
//             style={{ color: "#b287f0", fontWeight: "700" }}
//           >
//             About Me
//           </h2>

//           <p style={{ textAlign: "justify", fontSize: "1.1rem" }}>
//             Hi Everyone, I am{" "}
//             <span style={{ color: "#c59bff", fontWeight: "600" }}>
//               Avik Masanta
//             </span>{" "}
//             from{" "}
//             <span style={{ color: "#c59bff", fontWeight: "600" }}>
//               West Bengal, India
//             </span>
//             .
//             <br />
//             I am a software developer currently pursuing my{" "}
//             <b>B.Tech in Computer Science</b> at Lovely Professional
//             University.
//             <br />
//             <br />
//             Beyond coding, here are a few things I love doing:
//           </p>

//           <ul className="fs-5 ps-3">
//             <li className="about-activity">
//               <ImPointRight style={{ color: "#c59bff" }} /> Playing Games
//             </li>
//             <li className="about-activity">
//               <ImPointRight style={{ color: "#c59bff" }} /> Writing Tech Blogs
//             </li>
//             <li className="about-activity">
//               <ImPointRight style={{ color: "#c59bff" }} /> Travelling
//             </li>
//           </ul>

//           <h4
//             className="mt-5 fw-semibold"
//             style={{
//               color: "#c59bff",
//               borderBottom: "2px solid #c59bff",
//               display: "inline-block",
//             }}
//           >
//             Education
//           </h4>

//           <ul className="mt-3 ps-3 fs-6">
//             <li className="mb-3">
//               <ImPointRight style={{ color: "#c59bff" }} />{" "}
//               <strong>Lovely Professional University</strong>
//               <br />
//               <small style={{ color: "#ddd" }}>
//                 B.Tech in Computer Science (2022 – Present) — CGPA: 7.94
//               </small>
//             </li>
//             <li className="mb-3">
//               <ImPointRight style={{ color: "#c59bff" }} />{" "}
//               <strong>Bankura Municipal High School</strong>
//               <br />
//               <small style={{ color: "#ddd" }}>
//                 Class XII – 92.4% (2022)
//               </small>
//             </li>
//             <li>
//               <ImPointRight style={{ color: "#c59bff" }} />{" "}
//               <strong>Bankura Municipal High School</strong>
//               <br />
//               <small style={{ color: "#ddd" }}>
//                 Class X – 85.6% (2020)
//               </small>
//             </li>
//           </ul>

//           <p
//             className="text-center mt-4"
//             style={{
//               color: "#c59bff",
//               fontStyle: "italic",
//               fontWeight: "500",
//               fontSize: "1.1rem",
//             }}
//           >
//             "Strive to build things that make a difference!"
//           </p>
//           <footer className="blockquote-footer text-center text-light">
//             Avik
//           </footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;


import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import ProfileImg from "../../Assets/p.jpeg"; // ✅ Make sure path is correct

function AboutCard() {
  return (
    <Card
      className="shadow-lg border-0 rounded-4 p-4"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <Card.Body>
        <div className="text-center mb-4">
          <img
            src={ProfileImg}
            alt="Avik Masanta"
            style={{
              width: "130px",
              height: "130px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "3px solid #c59bff",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>

        <blockquote className="blockquote mb-0">
          <h2
            className="text-center mb-4"
            style={{ color: "#b287f0", fontWeight: "700" }}
          >
            About Me
          </h2>

          <p style={{ textAlign: "justify", fontSize: "1.1rem" }}>
            Hi Everyone, I am{" "}
            <span style={{ color: "#c59bff", fontWeight: "600" }}>
              Avik Masanta
            </span>{" "}
            from{" "}
            <span style={{ color: "#c59bff", fontWeight: "600" }}>
              West Bengal, India
            </span>
            . I am a software developer currently pursuing my{" "}
            <b>B.Tech in Computer Science</b> at Lovely Professional University.
            <br />
            <br />
            Beyond coding, here are a few things I love doing:
          </p>

          <ul className="fs-5 ps-3">
            <li className="about-activity">
              <ImPointRight style={{ color: "#c59bff" }} /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: "#c59bff" }} /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: "#c59bff" }} /> Travelling
            </li>
          </ul>

          <h4
            className="mt-5 fw-semibold"
            style={{
              color: "#c59bff",
              borderBottom: "2px solid #c59bff",
              display: "inline-block",
            }}
          >
            Education
          </h4>

          <ul className="mt-3 ps-3 fs-6">
            <li className="mb-3">
              <ImPointRight style={{ color: "#c59bff" }} />{" "}
              <strong>Lovely Professional University</strong>
              <br />
              <small style={{ color: "#ddd" }}>
                B.Tech in Computer Science (2022 – Present) — CGPA: 7.94
              </small>
            </li>
            <li className="mb-3">
              <ImPointRight style={{ color: "#c59bff" }} />{" "}
              <strong>Bankura Municipal High School</strong>
              <br />
              <small style={{ color: "#ddd" }}>
                Class XII – 92.4% (2022)
              </small>
            </li>
            <li>
              <ImPointRight style={{ color: "#c59bff" }} />{" "}
              <strong>Bankura Municipal High School</strong>
              <br />
              <small style={{ color: "#ddd" }}>
                Class X – 85.6% (2020)
              </small>
            </li>
          </ul>

          <h4
            className="mt-5 fw-semibold"
            style={{
              color: "#c59bff",
              borderBottom: "2px solid #c59bff",
              display: "inline-block",
            }}
          >
            Achievements
          </h4>

          <ul className="mt-3 ps-3 fs-6">
            <li className="mb-3">
              <ImPointRight style={{ color: "#c59bff" }} />{" "}
              Solved 100+ coding problems across platforms like LeetCode, HackerRank, and Codeforces.
            </li>
            <li className="mb-3">
              <ImPointRight style={{ color: "#c59bff" }} /> Participated in multiple hackathons, including:
              <ul>
                <li>Global Hackathon 2023 - Runner-up</li>
                <li>Code for Good Hackathon - Finalist</li>
                <li>Tech Innovators Hackathon - Winner</li>
              </ul>
            </li>
          </ul>

          <p
            className="text-center mt-4"
            style={{
              color: "#c59bff",
              fontStyle: "italic",
              fontWeight: "500",
              fontSize: "1.1rem",
            }}
          >
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer text-center text-light">
            Avik
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
