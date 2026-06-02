import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Experience</strong>
      </h1>

        <Col md={8}>
        <Card style={{ backgroundColor: "#2D1450", color: "white" }}>
            <Card.Body>
            <Card.Title>
                <strong>Full Stack Developer Intern</strong>
            </Card.Title>
            <Card.Subtitle className="mb-4" style={{ color: "white", opacity: 0.9 }}>
                Avadhan Softtech | November 2025 – April 2026
            </Card.Subtitle>
            <Card.Text>
                <p>
                    Developed responsive web applications by contributing to both frontend and backend development. Built user-friendly interfaces, implemented backend logic using Core Java and Python, integrated APIs, and ensured cross-browser compatibility. Collaborated in an agile environment to deliver scalable, high-performance solutions while maintaining clean, efficient, and maintainable code.
                </p>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>

        <Col md={8} style={{ marginTop: "15px" }}>
        <Card style={{ backgroundColor: "#2D1450", color: "white" }}>
            <Card.Body>
            <Card.Title>
                <strong>Full Stack Developer Intern</strong>
            </Card.Title>
            <Card.Subtitle className="mb-4" style={{ color: "white", opacity: 0.9 }}>
                Positive Quadrant Technologies LLP | April 2025 – October 2025
            </Card.Subtitle>
            <Card.Text>
                <p>
                    Developed dynamic web applications using React.js, PHP, and Laravel. Worked on RESTful APIs, authentication, and MySQL database integration. Improved frontend UI/UX using HTML, CSS, and JavaScript. Collaborated with developers using Git, GitHub, and Agile workflow. Independently handled end-to-end tasks including logo designing, branding, client documentation, and basic data entry, showcasing versatility and ownership.
                </p>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>

        <Col md={8} style={{ marginTop: "15px" }}>
        <Card style={{ backgroundColor: "#2D1450", color: "white" }}>
            <Card.Body>
            <Card.Title>
                <strong>Python Developer Intern</strong>
            </Card.Title>
            <Card.Subtitle className="mb-4" style={{ color: "white", opacity: 0.9 }}>
                Codsoft | Remote | February 2024 – March 2024
            </Card.Subtitle>
            <Card.Text>
                <p>
                Assigned structured tasks to enhance practical skills and understanding of real-world applications. Completed projects within deadlines, demonstrating adaptability and result-oriented work. Applied strong problem-solving skills and learned new tools quickly during execution. Worked with clients effectively, ensuring clarity, time management, and project delivery.
                </p>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>

    </Row>
  );
}

export default Experience;
