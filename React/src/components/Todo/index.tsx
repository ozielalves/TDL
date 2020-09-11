import React, { MouseEventHandler } from "react";

import './styles.css';

interface todoProps {
  todoText: string;
}

const Todo = ({todoText} : todoProps) => {

  const handleClick = (e : MouseEvent ) => {
    const item = e.target as HTMLButtonElement;
    
    if(item){
      // DELTE TODO
      if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // The Event Animation
        if(todo) {
          todo.classList.toggle('fadeOut');
          /* deleteLocalTodos(todo); */
          todo.addEventListener('transitionend', () => {
              todo.remove();
          }); 
        }
      }
      // SET TO COMPLETED
      if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        if(todo) {
          todo.classList.toggle('completed');
        }
      }
    }
    
  }

  return (
      <div className="todo">
        <li className="todo-item">{todoText}</li>
        <button className="complete-btn" onClick={() => handleClick}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={() => handleClick}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
  );
};

export default Todo;
