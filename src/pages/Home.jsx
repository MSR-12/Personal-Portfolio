import { Button } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import photo from "../assets/photo.jpeg"

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="home-section">
      <div className="overlay"></div>

      <img
        src={photo}
        alt="Profile"
        className="profile-img"
        data-aos="zoom-in"
      />

      <h1 className="intro-title" data-aos="fade-up">
        Hi, I'm <span className="highlight">Sathishraj</span> 👋
      </h1>

      <h4 className="typed-text" data-aos="fade-up" data-aos-delay="200">
        <ReactTyped
          strings={[
            "Full Stack Web Developer 💻",
            "React Enthusiast ⚛️",
            "Problem Solver 🧠",
            "Creative Coder 🚀",
          ]}
          typeSpeed={60}
          backSpeed={40}
          backDelay={1000}
          loop
        />
      </h4>

      <p
        className="intro-desc"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Passionate about building modern, fast, and scalable web applications.
        Turning ideas into interactive digital experiences with React, Node, and
        modern web tools.
      </p>

      <div
        className="button-group"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Button
          variant="info"
          href="/projects"
          className="custom-btn btn-glow"
        >
          <i className="bi bi-code-slash me-2"></i> View My Work
        </Button>

        <Button
          variant="outline-light"
          href="/contact"
          className="custom-btn btn-outline-glow"
        >
          <i className="bi bi-envelope me-2"></i> Contact Me
        </Button>

        <Button
          variant="success"
          href="./src/resume.pdf"
          download
          className="custom-btn btn-download"
        >
          <i className="bi bi-download me-2"></i> Download Resume
        </Button>
      </div>

      <div className="scroll-down" data-aos="fade-in" data-aos-delay="500">
        <span></span>
        <p>Scroll Down</p>
      </div>
    </section>
  );
}

export default Home;
