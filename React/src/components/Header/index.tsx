import React from 'react';

import Form from '../Form'

import './styles.css';

interface headerProps {
  setInputText: any;
  setTodos: any;
  todos: any;
  inputText: string,
  setStatus: any
}

const Header = ({setStatus, setInputText, setTodos, todos, inputText} : headerProps) => {
  return (
    <header>
        {/* <div className="title">
          <i className="fas fa-stream"></i>
          <h1>To Do List</h1>
        </div> */}
        <p>What can't you forget to do today?</p>
        <Form 
         inputText={inputText} 
         setInputText={setInputText} 
         setTodos={setTodos} 
         todos={todos}
         setStatus={setStatus}
        />
    </header>
  );
}

export default Header;