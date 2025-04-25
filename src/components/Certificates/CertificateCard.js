import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CertificateCard({ imgPath, title, description, certificateLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="certificate-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button
          variant="primary"
          href={certificateLink}
          target="_blank"
          style={{ marginTop: "10px" }}
        >
          View Certificate
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;
