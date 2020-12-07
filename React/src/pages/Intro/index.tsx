import React, { useState } from "react";

import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

import "./styles.css";
import MovingTodo1 from "../../assets/Moving-todo-1.svg";
import MovingTodo2 from "../../assets/Moving-todo-2.svg";
import MovingTodo3 from "../../assets/Moving-todo-3.svg";
import MovingTodo4 from "../../assets/Moving-todo-4.svg";
import MovingTodo5 from "../../assets/Moving-todo-5.svg";
import Note from "../../assets/note.svg";

export default function Intro() {
  const [hoverBg, setHoverBg] = useState(false);
  const handleHover = () => {
    setHoverBg(!hoverBg);
  };

  return (
    <div id="intro" className={hoverBg ? "hoverBg" : ""}>
      <svg
        id="bg"
        width="1656"
        height="1483"
        viewBox="0 0 1656 1483"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          className={hoverBg ? "hoveredIntroCircle" : ""}
          cx="881"
          cy="741.5"
          rx="775"
          ry="741.5"
          fill={hoverBg ? "#ffffff" : "#232332"}
          fillOpacity="0.35"
        />
        <ellipse
          cx="775"
          cy="741.5"
          rx="775"
          ry="741.5"
          fill={hoverBg ? "#ffffff" : "#232332"}
          fillOpacity="0.35"
        />
      </svg>
      <img id="mt1" src={MovingTodo1} alt="animation" />
      <img id="mt2" src={MovingTodo2} alt="animation" />
      <img id="mt3" src={MovingTodo3} alt="animation" />
      <img id="mt4" src={MovingTodo4} alt="animation" />
      <img id="mt5" src={MovingTodo5} alt="animation" />
      <img id="note" src={Note} alt="animation" />
      <Navbar handleHover={handleHover} hoverBg={hoverBg} />
      <Logo />
    </div>
  );
}
