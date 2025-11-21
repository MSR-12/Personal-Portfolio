import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import profile from "../assets/profile.jpeg"

import { FaReact, FaJs, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const skills = [
    { name: "React.js", value: 92, color: "#61DBFB", icon: <FaReact /> },
    { name: "JavaScript", value: 95, color: "#F7E018", icon: <FaJs /> },
    { name: "HTML / CSS", value: 97, color: "#FF5722", icon: <FaHtml5 /> },
    { name: "Node.js", value: 88, color: "#3C873A", icon: <FaNodeJs /> },
    { name: "Express.js", value: 85, color: "#000000", icon: <SiExpress /> },
    { name: "MongoDB", value: 82, color: "#4DB33D", icon: <SiMongodb /> },
    { name: "MySQL", value: 78, color: "#00758F", icon: <SiMysql /> },
  ];

  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={5} data-aos="zoom-in">
            <div className="profile-card">
              <img
                src={profile}
                alt="Profile"
                className="img-fluid rounded-circle profile-image"
              />
              <div className="floating-shape"></div>
            </div>
          </Col>

          {/* RIGHT — About Details */}
          <Col md={7} data-aos="fade-left">
            <h2 className="about-title">About Me</h2>

            <p className="about-text">
              I'm <span className="highlight">Sathishraj</span>, a
              <strong> Full Stack Web Developer </strong> with a passion for
              building modern, clean and high-performance web applications.
              I specialize in <strong>React, Node.js</strong> and the full
              <strong> MERN stack</strong> to deliver seamless user experiences.
            </p>

            <h5 className="skill-title mt-4">Technical Skills</h5>

            {/* Skill Bars */}
            {skills.map((skill, i) => (
              <div
                className="skill-wrapper"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="d-flex justify-content-between mb-1">
                  <span className="skill-name">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="skill-value">{skill.value}%</span>
                </div>

                <div className="progress-container">
                  <ProgressBar
                    now={skill.value}
                    animated
                    style={{
                      height: "10px",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  />

                  <div
                    className="progress-overlay"
                    style={{
                      width: `${skill.value}%`,
                      background: `linear-gradient(90deg, ${skill.color}, #00eaff)`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default About;
