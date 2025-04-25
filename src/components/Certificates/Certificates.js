// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "../Projects/ProjectCards";
// import Particle from "../Particle";
// import { FaCertificate } from "react-icons/fa";

// // Import the certificate image
// import CipherJavaCert from "../../Assets/Certificates/CipherJavaCert.jpg"; // ✅

// function Certifications() {
//   const certData = [
//     {
//       title: "Core Java - CipherSchools",
//       description: "Completed Core Java training from CipherSchools (Jan '24 – May '24)",
//       link: "#", // Replace with actual link if hosted
//       imgPath: CipherJavaCert,
//     },
//     // Add more certificates here if needed
//   ];

//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My <strong className="purple">Certifications</strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few certifications I've earned recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           {certData.map((cert, idx) => (
//             <Col key={idx} md={4} className="project-card">
//               <ProjectCard
//                 imgPath={cert.imgPath}
//                 isBlog={false}
//                 title={cert.title}
//                 description={cert.description}
//                 ghLink={cert.link}
//                 icon={<FaCertificate />}
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Certifications;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import { FaCertificate } from "react-icons/fa";

// Import certificate images
import CipherJavaCert from "../../Assets/Certificates/CipherJavaCert.jpg";
import CloudCert from "../../Assets/Certificates/C2.jpg"; // Example path
import JavaAdvancedCert from "../../Assets/Certificates/C1.jpg"; // Example path

function Certifications() {
  const certData = [
    {
      title: "Core Java - CipherSchools",
      description: "Completed Core Java training from CipherSchools (Jan '24 – May '24)",
      link: "#",
      imgPath: CipherJavaCert,
      btnText: "View Certificate",
    },
    {
      title: "Summer Training",
      description: "Completed Mern Stack",
      link: "#",
      imgPath: CloudCert,
      btnText: "View Certificate",
    },
    {
      title: "Core & Advanced Java",
      description: "Completed Java certification including object-oriented and advanced concepts.",
      link: "#",
      imgPath: JavaAdvancedCert,
      btnText: "View Certificate",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I've earned recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certData.map((cert, idx) => (
            <Col key={idx} md={4} className="project-card">
              <ProjectCard
                imgPath={cert.imgPath}
                isBlog={false}
                title={cert.title}
                description={cert.description}
                ghLink={cert.link}
                btnText={cert.btnText}
                icon={<FaCertificate />}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
