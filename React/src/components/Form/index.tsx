import React, { FormEvent, ChangeEvent } from 'react';
import './styles.css'

interface formProps {
  setInputText: any,
  setTodos: any,
  todos: any,
  inputText: string,
  setStatus: any
}

const Form = ({inputText, setInputText, setTodos, todos, setStatus}: formProps) => {

  const inputTextHandler = (e: ChangeEvent) => {
    const input = e.target as HTMLTextAreaElement;
    setInputText(input.value); 
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText('');
  }

  const filterHandler = (e :ChangeEvent) => {
    const option = e.target as HTMLTextAreaElement;
    setStatus(option.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="todoInput">
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" required/>
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;