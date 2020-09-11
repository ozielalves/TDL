import React, { FormEvent } from 'react';

import './styles.css'

const Input = () => {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="todoInput">
        <input type="text" className="todo-input" required/>
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select name="todos" className="filter-todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Input;