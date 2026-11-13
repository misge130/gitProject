

import React, { useState, useEffect, useRef } from "react";
import { Link, BrowserRouter } from "react-router-dom";

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
    <BrowserRouter>
      
    </BrowserRouter>
  );
}

export default Navigation;
