import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSent(false), 3000);
    }, 1100);
  };

  return (
    <section className="contact-section">
      <Container className="py-5">

        <h2 className="text-center fw-bold mb-5 contact-title" data-aos="fade-down">
          Get In Touch
        </h2>

        <Row className="g-4" data-aos="fade-up">

          <Col md={6}>
            <div className="glass-card">

              <Form onSubmit={handleSubmit}>

                <Form.Group className="floating-label">
                  <Form.Control
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder=" "
                    required
                    className="transparent-input"
                  />
                  <Form.Label>Name</Form.Label>
                </Form.Group>

                <Form.Group className="floating-label">
                  <Form.Control
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder=" "
                    required
                    className="transparent-input"
                  />
                  <Form.Label>Email</Form.Label>
                </Form.Group>

             
                <Form.Group className="floating-label">
                  <Form.Control
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    as="textarea"
                    rows={6}
                    className="transparent-input"
                  />
                  <Form.Label>Message</Form.Label>
                </Form.Group>

       
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <Button
                    type="submit"
                    disabled={sending || sent}
                    className="glow-btn send-btn"
                  >
                    {sending ? "Sending..." : sent ? "Sent ✓" : "🚀 Send Message"}
                  </Button>

                  <div className={`send-success ${sent ? "show" : ""}`}>
                    <svg viewBox="0 0 52 52" className="checkmark">
                      <circle cx="26" cy="26" r="25" fill="none" />
                      <path
                        d="M14 27l7 7 17-17"
                        fill="none"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

              </Form>

            </div>
          </Col>

          <Col md={6}>
            <div className="glass-card info-box">

              <h4 className="info-title mb-3">📞 Contact Information</h4>

              <ul className="info-list">

                <li>
                  <a className="icon-card" href="mailto:sathishsathishraj40@gmail.com">
                    <span className="icon-wrap"><i className="bi bi-envelope-fill" /></span>
                    <div className="info-text">
                      <strong>Email</strong>
                      <span>sathishrajm1@gmail.com</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a className="icon-card" href="tel:+916382040252">
                    <span className="icon-wrap"><i className="bi bi-telephone-fill" /></span>
                    <div className="info-text">
                      <strong>Phone</strong>
                      <span>+91 6382040252</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a className="icon-card" href="https://www.instagram.com/msr__12/" target="_blank">
                    <span className="icon-wrap"><i className="bi bi-instagram" /></span>
                    <div className="info-text">
                      <strong>Instagram</strong>
                      <span>sathishraj</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a className="icon-card" href="https://www.linkedin.com/in/sathish-sathishraj-296b03299" target="_blank">
                    <span className="icon-wrap"><i className="bi bi-linkedin" /></span>
                    <div className="info-text">
                      <strong>LinkedIn</strong>
                      <span>sathishraj</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a className="icon-card" href="https://github.com/MSR-12" target="_blank">
                    <span className="icon-wrap"><i className="bi bi-github" /></span>
                    <div className="info-text">
                      <strong>GitHub</strong>
                      <span>MSR-12</span>
                    </div>
                  </a>
                </li>

              </ul>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Contact;
