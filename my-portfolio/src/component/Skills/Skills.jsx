
import React from 'react';
import '../Skills/Skills.css';

function Skills() {
  const skills = [
    { name: 'HTML5', icon: '🌐', level: 'Advanced' },
    { name: 'CSS3', icon: '🎨', level: 'Advanced' },
    { name: 'JavaScript', icon: '⚡', level: 'Intermediate' },
    { name: 'Bootstrap', icon: '🅱️', level: 'Intermediate' },
    { name: 'React', icon: '⚛️', level: 'Learning' },
    { name: 'Node.js', icon: '🟢', level: 'Learning' },
    { name: 'Express.js', icon: '🚀', level: 'Learning' },
    { name: 'Git & GitHub', icon: '🐙', level: 'Intermediate' },
    { name: 'MySQL', icon: '🗄️', level: 'Learning' },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <span className="section-subtitle">MY TECHNICAL ABILITIES</span>
          <h2>My <span>Skills</span></h2>
          <p>
            Technologies and tools I use and continue learning
            to build modern web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
