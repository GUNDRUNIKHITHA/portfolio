import React from 'react';
import './About.css';
import file from '../assets/resume.pdf';

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi, I'm GUNDRU NIKHITHA, a dedicated software developer with solid skills in Java and Python,
          combined with practical experience in full stack web development. Proficient in managing and utilizing cloud data warehouses,
          including AWS Redshift and Snowflake. Seeking a challenging position to leverage my technical skills and contribute to innovative projects within a dynamic and forward-thinking organization.
        </p>
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-buttons">
            <button className="skill-button">Java</button>
            <button className="skill-button">Python</button>
            <button className="skill-button">JavaScript</button>
            <button className="skill-button">React.js</button>
            <button className="skill-button">Node.js</button>
            <button className="skill-button">SQL</button>
            <button className="skill-button">MongoDB</button>
            <button className="skill-button">AWS Redshift</button>
            <button className="skill-button">Snowflake</button>
          </div>
        </div>
        <a href={file} download className="resume-button">Download Resume</a>
      </div>
      <div className="about-image">
        <img
          src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717718400&semt=ais_user"
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default About;
