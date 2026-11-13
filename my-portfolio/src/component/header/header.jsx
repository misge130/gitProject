
import './Header.css';
import Navigation from '../navigation/navigation';
function Header() {
  return (
    <header className="header">
      <Navigation/>
      <a href="#home" className="brand">
        <span className="brand-icon">&lt;/&gt;</span>
        <span className="brand-name">
          Misgana <span>Ayele</span>
        </span>
      </a>

      <nav className="navbar">
        <a className="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <button
        className="theme-button"
        type="button"
        aria-label="Theme icon"
      >
        ☼
      </button>
    </header>
  );
}

export default Header;
