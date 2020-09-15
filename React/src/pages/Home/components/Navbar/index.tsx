import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

export default function Navbar () {
  return (
    <div className="intro-nav">
      <ul className="menu">
        <Link to="/" className="profile">
          Profile
        </Link>
        <Link to="home"className="sing-out">
          Sing out
        </Link>
      </ul>
    </div>
  );
}
