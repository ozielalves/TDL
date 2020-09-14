import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Todo from '../../components/Todo';

import './styles.css';

interface todo {
  text: string,
  completed: boolean,
  id: any
}

const Home = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<todo[]>([]);
  const [status, setStatus] = useState<string>("all");
  const [filteredTodos, setFilteredTodos] = useState<todo[]>([]);

  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]))
      } else {
        let todosFromLocal = JSON.parse(localStorage.getItem('todos') || '{}');
        setTodos(todosFromLocal);
      }
    }
    getLocalTodos(); 
  }, [])

  useEffect(( ) => {
    const filterHandler = () => {
      switch(status) {
        case "completed":
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    } 
    filterHandler();
    saveLocalTodos();
  },[todos, status]);

  return (
    <div className="home">
      <Header 
        setInputText={setInputText} 
        setTodos={setTodos} 
        todos={todos} 
        inputText={inputText}
        setStatus={setStatus}
      />
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map( (todo) => (
            <Todo 
              key={todo.id} 
              id={todo.id} 
              text={todo.text} 
              completed={todo.completed}
              todos = {todos}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;