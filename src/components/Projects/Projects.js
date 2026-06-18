import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import techupgradlaptop from "../../Assets/Projects/techupgradlaptop.png";
import thirtysixstudiolaptop from "../../Assets/Projects/thirtysixstudiolaptop.png";
import binarypowerlaptop from "../../Assets/Projects/binarypowerlaptop.png";
import PQLaptop from "../../Assets/Projects/PQLaptop.png";
import AksharFruitsLaptop from "../../Assets/Projects/AksharFruitsLaptop.png";
import AksharConnectLaptop from "../../Assets/Projects/AksharConnectLaptop.png";
import researchpaper1 from "../../Assets/Projects/researchpaper1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techupgradlaptop}
              isBlog={false}
              title="TechUpGrad – EdTech Platform"
              // description="Designed and developed a modern educational platform for TechUpGrad, focused on helping students and professionals build industry-relevant digital skills. The website features course showcases, placement information, career guidance, and lead generation functionality, all delivered through a responsive and user-friendly interface. Emphasis was placed on performance, accessibility, and creating a seamless learning-focused digital experience."
              ghLink="https://www.techupgrad.in/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AksharFruitsLaptop}
              isBlog={false}
              title="Homemade Desi Rasoi – E-Commerce Freelance Project"
              // description="Developed a full-stack MERN-based e-commerce platform for Homemade Desi Rasoi, enabling customers to browse, order, and manage authentic homemade food products through a seamless online experience. Built a scalable application with secure authentication, automated invoice generation, WhatsApp integration, AI-powered chatbot assistance, and a complete order management system. Focused on delivering a user-friendly, mobile-responsive platform that streamlines both customer interactions and business operations."
              ghLink="https://homemade-desi-rasoi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AksharConnectLaptop}
              isBlog={false}
              title="Akshar Connect – Organization Management System"
              // description="Developed a comprehensive full-stack organization management platform serving 5,000+ active users. Built to streamline administrative operations through modules such as Sabha Management, Attendance Tracking, Approval Workflows, Organizational Hierarchy Management, and Real-Time Notifications. Designed a scalable and secure system that improves coordination, user management, and operational efficiency across multiple organizational levels."
              ghLink="https://aksharmandal.in/aksharconnect/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PQLaptop}
              isBlog={false}
              title="Positive Quadrant – Full Stack Web Application"
              // description="Developed a full-stack business website for Positive Quadrant, focusing on performance, user engagement, and dynamic content management. Built the frontend with modern JavaScript libraries and interactive UI components while leveraging PHP for backend functionality and server-side processing. Implemented responsive design, animations, data visualizations, optimized media loading, and seamless user interactions to deliver a fast and engaging web experience."
              ghLink="https://www.positivequadrant.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thirtysixstudiolaptop}
              isBlog={false}
              title="ThirtySix Studio Clone – Frontend Development Project"
              // description="Developed a pixel-perfect clone of the award-winning ThirtySix Studio website as a frontend learning project, focusing on advanced animations, interactive user experiences, and modern web design principles. Recreated immersive visual effects, smooth scrolling interactions, responsive layouts, and engaging UI elements to gain hands-on experience with creative web development and animation-driven interfaces inspired by leading digital production studios."
              ghLink="https://thirtysixstudiosclone.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={binarypowerlaptop}
              isBlog={false}
              title="Binary Power – Freelance Client Project"
              // description="Developed a responsive business website for a client in the industrial power solutions sector, featuring product showcases, service information, lead generation forms, and a professional user experience designed to strengthen the company's online presence. Collaborated directly with the client to understand business requirements, create a modern digital presence, and deliver a high-performance, mobile-friendly website."
              ghLink="https://www.binarypower.in/"
            />
          </Col>

        </Row>

        <h1 className="project-heading">
          My Recent <strong className="purple"> Research Paper </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my recent research contributions and publications.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={researchpaper1}
            isBlog={false}
            title="Analyzing Travel Blog and Vlog Content Trends to Predict Future Tourism Destinations"
              // description="Published research paper in IJAIR (Volume 13, Issue 1, 2026) exploring how AI and Natural Language Processing can predict emerging tourism destinations using YouTube travel vlog metadata. The study leverages Named Entity Recognition (NER), sentiment analysis, and destination classification to identify travel trends, uncover traveler preferences, and forecast future tourism hotspots from user-generated content. Read the full paper (Page Number 228 – 235) 👇"
            ghLink="https://iaraedu.com/about-journal/ijair-volume-13-issue-1-v-january-march-2026.php"
          />
        </Col>
        </Row>


      </Container>
    </Container>
  );
}

export default Projects;
