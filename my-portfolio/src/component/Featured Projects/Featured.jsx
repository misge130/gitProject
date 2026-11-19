
import React from 'react';
import '../Featured Projects/Featured.css';

function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description:
        'A responsive personal portfolio website built to introduce myself, showcase my technical skills, and display my projects.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/',
      demo: 'https://git-project-f74t5.vercel.app/',
    },
    {
      title: 'Apple Website Clone',
      description:
        'A modern Apple-inspired website built with React, featuring reusable components, navigation, and responsive layouts.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
      technologies: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com/',
      demo: '#',
    },
    {
      title: 'Todo Application',
      description:
        'A simple task management application that helps users organize daily activities and manage their tasks.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
      technologies: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/',
      demo: '#',
    },
    {
      title: 'Node.js API Project',
      description:
        'A backend practice project exploring Node.js, Express.js, API routes, and server-side development.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      technologies: ['Node.js', 'Express.js', 'JavaScript'],
      github: 'https://github.com/',
      demo: '#',
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <span className="projects-subtitle">MY RECENT WORK</span>
          <h2>Featured <span>Projects</span></h2>
          <p>
            Some of the projects I have built and the technologies
            I use to turn ideas into reality.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                <img src={project.image} alt={project.title} />

                <div className="project-overlay">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
