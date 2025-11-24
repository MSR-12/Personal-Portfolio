import { Container, Card, Button } from "react-bootstrap";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Project.css";

import weatherapp from "../assets/Weather App.png";
import ecommerce from "../assets/ecommerce.png";
import music from "../assets/Music App.png"
import dashboard from "../assets/Dashboard.png"

function Projects() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    
    const scrollDiv = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = setInterval(() => {
      if (scrollDiv) {
        scrollDiv.scrollLeft += 1;
        scrollAmount += 1;

        
        if (scrollAmount >= scrollDiv.scrollWidth - scrollDiv.clientWidth) {
          scrollDiv.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, []);

  const projects = [
    {
      title: "Weather App",
      img: weatherapp,
      desc: "Displays real-time weather using an API.",
      skills: "React, API, CSS, JavaScript",
      link: "#",
    },
    {
      title: "E-commerce App",
      img: ecommerce,
      desc: "Full-stack platform with cart & payments.",
      skills: "React, Node, MongoDB, Bootstrap",
      link: "https://github.com/MSR-12/Amazon-clone",
    },
    {
      title: "Dashboard",
      img: dashboard,
      desc: "Smart analytics for business decisions",
      skills: "React, Express, JWT",
      link: "https://github.com/MSR-12/Dashboard",
    },
    {
      title: "Music App",
      img: music,
      desc: "Unlimited songs with personalized playlists",
      skills: "React, Tailwind, AOS",
      link: "#",
    },
    {
      title: "Chat App",
      img: "/assets/project5.jpg",
      desc: "Real-time messaging with Socket.io.",
      skills: "Socket.io, Node.js, React",
      link: "#",
    },
    {
      title: "Blog App",
      img: "/assets/project6.jpg",
      desc: "CRUD blog with authentication.",
      skills: "MERN Stack, JWT",
      link: "#",
    },
  ];

  return (
    <section className="projects-section">
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5 section-title" data-aos="fade-down">
          🚀 My Projects
        </h2>

        <div className="scroll-container" ref={scrollRef}>
          {projects.map((project, idx) => (
            <Card className="project-card shadow-lg border-0 mx-3" key={idx}>
            
              <div className="card-img-wrapper">
                <Card.Img variant="top" src={project.img} className="project-img" />
              </div>

             
              <Card.Body className="text-center">
                <h5 className="fw-bold">{project.title}</h5>
                <p className="small text-muted">{project.desc}</p>

                <p className="skills-text mt-2">
                  <strong>Skills:</strong> {project.skills}
                </p>

                <Button href={project.link} target="_blank" className="glow-btn w-100 mt-2">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
