// src/components/ProjectList.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Calculadora',
    description: 'Um projeto simples de calculadora.',
    image: '/dark-mode-calculadora.png',  // Caminho da imagem
    demoLink: 'https://app-calculadora-react.vercel.app',  // Substitua pelo link real do projeto
    codeLink: 'https://github.com/reginaldoassuncao/app-calculadora-react',  // Substitua pelo link real do repositório
  },
  {
    title: 'Snake Game',
    description: 'Um jogo clássico da cobrinha.',
    image: '/snake-game.png',  // Caminho da imagem
    demoLink: 'https://reginaldoassuncao.github.io/snake-game/',  // Substitua pelo link real do projeto
    codeLink: 'https://github.com/reginaldoassuncao/snake-game',  // Substitua pelo link real do repositório
  }
];

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
