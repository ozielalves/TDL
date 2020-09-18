import React, { FormEvent, ChangeEvent } from 'react';

import './styles.css';

interface todoMakerProps {
  setInputText: any;
  setTodos: any;
  todos: any;
  inputText: string
}

const TodoMaker = ({setInputText, setTodos, todos, inputText} : todoMakerProps) => {
  
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
  
  return (
    <div className="todo-maker">
        <p>What can't you forget to do today?</p>
        <form onSubmit={handleSubmit}>
          <div className="todoInput">
            <input 
              value={inputText} 
              onChange={inputTextHandler} 
              type="text" 
              className="todo-input" 
              placeholder="Complete my todos" 
              required
            />
            <button className="todo-button" type="submit">
              <i className="fas fa-plus-square"></i>
            </button>
          </div>
        </form>
    </div>
  );
}

export default TodoMaker;