import React, { useState, useEffect } from "react";

import TodoMaker from "./components/TodoMaker";
import TodoList from "./components/TodoList";

import "./styles.css";
import Navbar from "./components/Navbar";

interface todo {
  text: string;
  completed: boolean;
  id: any;
}

const Home = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<todo[]>([]);
  const [status, setStatus] = useState<string>("all");
  const [filteredTodos, setFilteredTodos] = useState<todo[]>([]);
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setRendered(true), 5000); 
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todosFromLocal = JSON.parse(localStorage.getItem("todos") || "{}");
        setTodos(todosFromLocal);
      }
    };
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = (e: MouseEvent) => {
    const option = e.target as HTMLLIElement;
    console.log(option.value);
    /* setStatus(option.value); */
  };

  return (
    <div className="home">
      <svg
        id="bg"
        width="1046"
        height="857"
        viewBox="0 0 1046 857"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M926 114.62C926 524.139 579.021 856.12 151 856.12C-277.021 856.12 -624 524.139 -624 114.62C-624 -294.899 -277.021 -626.88 151 -626.88C579.021 -626.88 926 -294.899 926 114.62Z"
          fill="#232332"
          fillOpacity="0.35"
        />
        <ellipse
          cx="270.5"
          cy="58.5"
          rx="775"
          ry="741.5"
          fill="#232332"
          fillOpacity="0.35"
        />
      </svg>
      <Navbar />
      <TodoMaker
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        setStatus={setStatus}
      />
      <div id={rendered ? "fadeIn" : "" }>
        <ul className="filter">
          <li
            onClick={() => filterHandler}
            id="selectedAll"
            className="filterBtn all"
            value="all"
          >
            ALL
          </li>
          <li
            onClick={() => filterHandler}
            className="filterBtn comp"
            value="completed"
          >
            COMPLETED
          </li>
          <li
            onClick={() => filterHandler}
            className="filterBtn to-do"
            value="all"
          >
            TO DO
          </li>
        </ul>
      </div>
      <TodoList
        todos={todos}
        filteredTodos={filteredTodos}
        setTodos={setTodos}
      />
      <div id={rendered ? "appearUp" : "" } className="home-logo">
        <div className="title">
          <i className="fas fa-stream"></i>
          <h1>To Do List</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
