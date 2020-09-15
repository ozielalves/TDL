import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

export default function Navbar () {
  return (
    <div className="intro-nav">
      <ul className="menu">
        <Link to="/" className="sing-up">
          SING UP
        </Link>
        <Link to="home"className="sing-in">
          SING IN
        </Link>
      </ul>
    </div>
  );
}
