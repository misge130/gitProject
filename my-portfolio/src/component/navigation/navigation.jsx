
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navigation-container" ref={menuRef}>
      {/* Three-line button */}
      <button
        className="menu-button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menu content */}
      <nav className={`navigation-menu ${isOpen ? "menu-open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>

        <Link to="/scond" onClick={() => setIsOpen(false)}>
         Scond
        </Link>

        <Link to="/watch" onClick={() => setIsOpen(false)}>
          Watch
        </Link>

        <Link to="/products" onClick={() => setIsOpen(false)}>
          Products
        </Link>

        <Link to="/upgrade" onClick={() => setIsOpen(false)}>
          Upgrade
        </Link>

        <Link to="/apple-youtube" onClick={() => setIsOpen(false)}>
          Apple YouTube
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;