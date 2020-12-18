import React, { useState } from "react";

import RegisterForm from "./components/Register";
import Navbar from "./components/Navbar";

import "./styles.css";

export interface UserData {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const [hoverBg, setHoverBg] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>();

  const handleHover = () => {
    setHoverBg(!hoverBg);
  };

  return (
    <div id="register" className={!hoverBg ? "hoverBg" : ""}>
      <svg
        id="bg"
        width="1280"
        height="1614"
        viewBox="0 0 1550 1614"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          id="bg-circle-1"
          className={!hoverBg ? "hoveredCircle" : ""}
          cx="775"
          cy="872.5"
          rx="775"
          ry="741.5"
          fill={!hoverBg ? "#ffffff" : "#232332"}
          fillOpacity="0.35"
        />
        <ellipse
          id="bg-circle-2"
          cx="775"
          cy="741.5"
          rx="775"
          ry="741.5"
          fill={!hoverBg ? "#ffffff" : "#232332"}
          fillOpacity="0.35"
        />
      </svg>

      <Navbar handleHover={handleHover} hoverBg={!hoverBg} />
      <h2 className="register-title">Join the team</h2>
      <div className="content">
        <RegisterForm hover={!hoverBg} setUserData={setUserData} />
        <div className="register-logo">
          <div className="title">
            <i className="fas fa-stream"></i>
            <h1>To Do List</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
