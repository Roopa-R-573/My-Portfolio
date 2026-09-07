import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./style.css";

const skills = [
  { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
  { name: "SQL", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
  { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png" },
  { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "Django", icon: "https://skillanything.com/wp-content/uploads/2024/06/Django-Framework.png" },
  { name: "DSA", icon: "https://img.freepik.com/premium-vector/luxury-dsa-logo-with-crown-elegant-initials-dsa-letter-logo-exclusive-brands-letter-dsa-monogram-highend-businesses_1101554-19695.jpg" },
  { name: "Git", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1FgKCiN-jU9nEiKMlieP1GVXlidi0UdClw&s" }
];

const projects = [
  {
    title: "E-commerce Website",
    image: "https://img.freepik.com/free-vector/minimal-fashion-stylist-landing-page_23-2150055317.jpg",
    link: "https://github.com/Roopa-R-573/my_project.git"
  },
  {
    title: "Email Sender Application",
    image: "https://martech.org/wp-content/uploads/2015/09/email-laptop-computer-marketing-ss-1920.jpg",
    link: "https://github.com/Roopa-R-573/email-sender-app-master-main.git"
  },
  {
    title: "Portfolio Website",
    image: "https://www.teachertrap.com/wp-content/uploads/2019/05/Teacher-Interview-Blog-Post-by-Teacher-Trap2.png",
    link: "https://github.com/Roopa-R-573/My-Portfolio.git"
  },
  {
    title: "Tender Website",
    image: "https://media.istockphoto.com/id/2149585752/photo/a-group-of-three-happy-beautiful-businesswomen-working-on-a-computer-in-the-office.jpg?s=612x612&w=0&k=20&c=Igp87zozmktGuujAxPRI04W8iIb5BZB6wOoKWl_VxUM=",
    link: "https://github.com/Roopa-R-573/Tender-website.git"
  }
];

const submitForm = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_4ifwv5g",
      "template_86iho1j",
      e.target,
      {
        publicKey: "XJXoTTAXuPB2jeJ_A",
      }
    )
    .then(
      () => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      }
    );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <nav className={menuOpen ? "nav open" : "nav"}>
        <a className="brand" href="#home" onClick={closeMenu}>Roopa R</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div className="nav-links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </nav>

      <header id="home" className="hero">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src="https://www.pexels.com/download/video/34160315/" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-small">WELCOME TO MY PORTFOLIO</p>
          <h1>Hello, <span>Roopa R</span></h1>
          <p className="hero-role">Full Stack Developer</p>
          <p className="hero-skills">• HTML • CSS • JavaScript • React.js • Python • SQL  • Django • DSA • Git •  Github </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View Projects <ExternalLink size={17}/></a>
            <a className="button glass" href="#contact">Contact Me <Mail size={17}/></a>
          </div>
        </div>
      </header>

      <main>
        <section id="skills" className="section black-section">
          <div className="section-title">
            <p>WHAT I KNOW</p>
            <h2>Skills</h2>
          </div>
          <div className="skills">
            {skills.map(skill => (
              <div className="skill-card" key={skill.name}>
                <img src={skill.icon} alt={skill.name} />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section black-section">
          <div className="section-title">
            <p>MY WORK</p>
            <h2>Projects</h2>
          </div>
          <div className="projects">
            {projects.map(project => (
              <article className="project" key={project.title}>
                <img src={project.image} alt={project.title} />
                <a className="overlay" href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <span>{project.title}</span>
                  <ExternalLink size={22} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section black-section contact-section">
          <div className="section-title">
            <p>GET IN TOUCH</p>
            <h2>Contact Me</h2>
          </div>
          <div className="contact-layout">
            <div className="contact-copy">
              <h3>Let's connect.</h3>
              <p>
                I am interested in opportunities where I can use my Python,
                Django and full-stack development skills to build useful applications.
              </p>
              <a href="https://www.linkedin.com/in/roopa-r-751768388" target="_blank" rel="noreferrer">
                <Linkedin size={20}/> LinkedIn
              </a>
              <a href="https://github.com/Roopa-R-573" target="_blank" rel="noreferrer">
                <Github size={20}/> GitHub
              </a>
              <a href="mailto:your-email@example.com">
                <Mail size={20}/> roopar042004@gmail.com
              </a>
            </div>

            <form className="contact-form" onSubmit={submitForm}>
  <input
    type="text"
    name="from_name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="from_email"
    placeholder="Your Email"
    required
  />

  <textarea
    name="message"
    rows="5"
    placeholder="Your Message"
    required
  />

  <button type="submit">
    Send Message <Send size={17} />
  </button>
</form>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Roopa R | All Rights Reserved</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
