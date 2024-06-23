// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-details">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="project-links">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Ver código</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
