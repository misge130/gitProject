import Loptope from './image/p.png'
import '../about/about.css';

function About() {
  const information = [
    {
      icon: '🎓',
      title: 'University',
      description: 'Arba Minch University'
    },
    {
      icon: '📚',
      title: 'Course',
      description: 'Software Engineering'
    },
    {
      icon: '💻',
      title: 'Career Goal',
      description: 'Full-Stack Developer'
    },
    {
      icon: '📍',
      title: 'Location',
      description: 'Arba Minch, Ethiopia'
    },

    {
  icon: '📅',
  title: 'Expected Graduation',
  description: '2026'
},
  ];

  return (
    <section className="about-section" id="about">

      {/* Heading */}
      <div className="about-heading">
        <span className="about-line"></span>
        <h2>About Me</h2>
      </div>

      <div className="about-wrapper">

        {/* Left side */}
        <div className="about-text">

          <h3>
            Who <span>Am I?</span>
          </h3>

          <p>
            I am Misgana Ayele, a Software Engineering
            student at Arba Minch University. I enjoy
            coding, solving problems, and creating
            useful web applications.
          </p>

          <p>
            I have experience with HTML, CSS, JavaScript,
            and Bootstrap. I am improving my React skills
            and learning Node.js, Express, and MySQL.
          </p>

          <p>
            My goal is to become a professional full-stack
            developer and build real-world software
            solutions.
          </p>

          <a href="#contact" className="about-btn">
         laern more
            <span> →</span>
          </a>

        </div>

        {/* Middle information cards */}
        <div className="about-info">

          {information.map((item, index) => (
            <div className="info-card" key={index}>

              <div className="info-icon">
                {item.icon}
              </div>

              <div className="info-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>

              <span className="info-arrow">↗</span>

            </div>
          ))}

        </div>

        {/* Right side developer card */}
        <div className="about-profile">

          <div className="profile-glow"></div>

          <div className="profile-content">

         <div className="profile-laptop">
  <img
    src={ Loptope}
    alt="Laptop showing software development"
  />
</div>

            <h3>Software Developer</h3>

            <p>
              Turning ideas into reality
            </p>

            <div className="profile-skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
            </div>

            <div className="profile-status">
              <span className="status-dot"></span>
              Always Learning
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;

