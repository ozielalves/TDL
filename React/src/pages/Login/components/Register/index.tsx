import React, { FormEvent, ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { UserData } from "../../index";

import "./styles.css";

interface RegisterFormProps {
  setUserData: React.Dispatch<React.SetStateAction<UserData | undefined>>;
  hover: boolean;
}

const RegisterForm = ({ setUserData, hover }: RegisterFormProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const inputHandler = (
    e: ChangeEvent,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const input = e.target as HTMLTextAreaElement;
    setter(input.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUserData({ id: Math.random() * 1000, name, email, password });
    setName("");
    setEmail("");
    setPassword("");
    window.location.assign("http://localhost:3000/home");
  };

  return (
    <div className={hover ? "login-form formHovered" : "login-form"}>
      <form onSubmit={handleSubmit}>
        <div className="formItem">
          <p>E-mail</p>
          <div className="todoInput">
            <input
              value={email}
              onChange={(e: ChangeEvent) => inputHandler(e, setEmail)}
              type="text"
              className="todo-input"
              placeholder="exemple@exemple.com"
              required
            />
          </div>
        </div>
        <div className="formItem">
          <p>Password</p>
          <div className="todoInput">
            <input
              value={password}
              onChange={(e: ChangeEvent) => inputHandler(e, setPassword)}
              type="text"
              className="todo-input"
              placeholder="oooooo"
              required
            />
          </div>
        </div>
        <button className="confirm-button" type="submit">
          <Link to="home">Sing in</Link>
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
