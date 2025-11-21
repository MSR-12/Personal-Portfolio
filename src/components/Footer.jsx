import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto" data-aos="fade-up">
      <Container className="text-center">
        <div className="mb-2">
          <a href="https://github.com/MSR-12" target="_blank" className="text-light me-3">
            <i className="bi bi-github fs-5"></i>
          </a>
          <a href="https://www.linkedin.com/in/sathish-sathishraj-296b03299" target="_blank" className="text-light me-3">
            <i className="bi bi-linkedin fs-5"></i>
          </a>
          <a href="https://x.com/home" target="_blank" className="text-light">
            <i className="bi bi-twitter fs-5"></i>
          </a>
        </div>
        <p className="mb-0">&copy; {new Date().getFullYear()} Sathishraj. All rights reserved.</p>
      </Container>
    </footer>
  );
}
export default Footer;