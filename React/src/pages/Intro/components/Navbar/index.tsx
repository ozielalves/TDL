import React from "react";

import "./styles.css";
import { Link } from "react-router-dom";

interface navBarProps {
  handleHover: any;
  hoverBg: boolean;
}

export default function Navbar({ handleHover, hoverBg }: navBarProps) {
  return (
    <div className="intro-nav">
      <ul className="menu">
        <Link
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          to="/"
          className="sing-up"
        >
          SING UP
        </Link>
        <Link
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          to="home"
          className={hoverBg ? "sing-in hoveredBTn" : "sing-in"}
        >
          SING IN
        </Link>
      </ul>
    </div>
  );
}
