import React from 'react';
import './Home.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

function Home() {
  return (
    <div className='body'>
      <header className='header'>
        <div className='logo'>
          <span className='logo-initials'>GN</span>
          <span className='logo-name'>GUNDRU NIKHITHA</span>
        </div>
        <nav className='nav'>
          <a className='button-nav' href="#">Home</a>
          <a className='button-nav' href="#about">About</a>
          <a className='button-nav' href="#projects">Projects</a>
          <a className='button-nav' href="#contact">Contact</a>
        </nav>
      </header>
      <main className='main slide-up'>
        <div className="center-content">
          <h1 className='center-h1'>
            <span className="white-text">HEY, I'M</span> 
            <span className="blue-text">GUNDRU NIKHITHA</span>
          </h1>
          <p className='center-h2'>I am a Full-Stack Developer <br />  I am currently working on Full-stack projects</p>
          <div className='icon-container'>
            <a href="mailto:nikhitha18.gundru@gmail.com" className='icon-circle'><FaEnvelope /></a>
            <a href="https://github.com/GUNDRUNIKHITHA" target="_blank" rel="noopener noreferrer" className='icon-circle'><FaGithub /></a>
            <a href="http://www.linkedin.com/in/gundru-nikhitha" target="_blank" rel="noopener noreferrer" className='icon-circle'><FaLinkedin /></a>
          </div>
        </div>
      </main>
      <section id="about" className="section-about">
        <About />
      </section>
      <section id="projects" className="section-others">
        <Projects />
      </section>
      <section id="contact" className="section-con">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
