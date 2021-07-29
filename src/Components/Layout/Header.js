import React, { useState, useEffect } from "react";

function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <div className="header-container">
      <nav className="header">
        <div className="logo">
          <a href="/">
            <img src="/default-monochrome.svg" alt="" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
