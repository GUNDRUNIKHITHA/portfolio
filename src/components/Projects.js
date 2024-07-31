import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'Online Doctor Appointment',
    image: 'https://thumbs.dreamstime.com/b/book-your-medical-appointment-online-using-mobile-app-doctor-sitting-desk-background-wearing-face-mask-190595834.jpg', // Replace with actual image URLs
    github: 'https://github.com/GUNDRUNIKHITHA/FullStack_Project',
    description: 'A comprehensive platform to book doctor appointments online. Ensures a seamless and efficient booking experience.'

  },
  {
    title: 'Weather Application',
    image: 'https://s3-alpha.figma.com/hub/file/3073272376/e4503307-1477-41b6-bd28-c02bbe63ee52-cover.png', // Replace with actual image URLs
    github: 'https://github.com/GUNDRUNIKHITHA/Fullstackproject',
    description: 'An application providing accurate weather forecasts. Stay updated with real-time weather conditions.'
  },
  {
    title: 'StudyMate',
    image: 'https://www.girlspring.com/wp-content/uploads/2023/03/Untitled142-726x600.png', // Replace with actual image URLs
    github: 'https://github.com/GUNDRUNIKHITHA',
    description: 'Designed to help students by simplifies studying by automatically summarizing lengthy text files into concise summaries.'
  }
];

function Project() {
  return (
    <>
      <div><h2 className="h2-title">Projects</h2></div>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-title">{project.title}</div>
              </div>
            </a>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
