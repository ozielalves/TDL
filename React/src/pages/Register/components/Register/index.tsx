import React, { FormEvent, ChangeEvent, useState } from "react";
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
  };

  return (
    <div className={hover ? "register-form formHovered" : "register-form"}>
      <form onSubmit={handleSubmit}>
        <div className="formItem">
          <p>How can we call you, mate?</p>
          <div className="todoInput">
            <input
              value={name}
              onChange={(e: ChangeEvent) => inputHandler(e, setName)}
              type="text"
              className="todo-input"
              placeholder="Chico Buarque"
              required
            />
          </div>
        </div>
        <div className="formItem">
          <p>Your e-mail</p>
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
          <p>Your password</p>
          <div className="todoInput">
            <input
              value={password}
              onChange={(e: ChangeEvent) => inputHandler(e, setPassword)}
              type="password"
              className="todo-input"
              placeholder="oooooo"
              required
            />
          </div>
        </div>
        <button className="confirm-button" type="submit">
          Sing up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
