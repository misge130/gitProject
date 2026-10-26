import Image from '../css/4259e2e6-291e-4e47-b16d-d1e7a3096265.png';
import './Home.css';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="home-intro">Hello, I'm</p>

        <h1>
          Misgana <span>Ayele</span>
        </h1>

        <h2>Software Engineering Student</h2>

        <p className="home-description">
          I am a passionate software engineering student
          at Arba Minch University with a strong interest
          in web development. I love building useful and
          beautiful websites, and I am learning new
          technologies to become a full-stack developer.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Projects
          </a>

        <a
  href="https://t.me/Miseaye"
  target="_blank"
  rel="noopener noreferrer"
  className="btn secondary-btn"
>
  Contact Me
</a>
        </div>

        <div className="home-socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:your-email@example.com">
            Email
          </a>
        </div>
      </div>

      <div className="home-image">
        <img
          src={Image}
          alt="Misgana Ayele"
        />
      </div>
    </section>
  );
}

export default Home;
