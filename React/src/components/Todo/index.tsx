import React from "react";

import './styles.css';

interface todoProps {
  text: string,
  completed: boolean,
  id: any,
  todos: any,
  setTodos: any,
}

const Todo = ({text, completed, id, todos, setTodos} : todoProps) => {

  const handleDelete = () => {
    setTodos(todos.filter((el : any) => el.id !== id));
  }
  const handleComplete = () => {
    setTodos(todos.map((item : any) => {
      if(item.id === id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }));
  }

  return (
      <div id={id} className={completed ? "todo completed" : "todo"}>
        <li className="todo-item">{text}</li>
        <button onClick={handleComplete} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={handleDelete} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
  );
};

export default Todo;
