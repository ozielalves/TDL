import React from "react";

import "./styles.css";
import { Link } from "react-router-dom";

interface navBarProps {
  handleHover: any;
  hoverBg: boolean;
}

export default function Navbar({ handleHover, hoverBg }: navBarProps) {
  return (
    <div className="login-nav">
      <ul className="menu">
        <Link
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          to="/"
          className={hoverBg ? "go-back" : "go-back"}
        >
          <i className="fas fa-arrow-left"></i>
        </Link>
        <Link
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          to="login"
          className={hoverBg ? "register-sing-in hoveredBTn" : "register-sing-in"}
        >
          SING IN
        </Link>
      </ul>
    </div>
  );
}
