import React, { useState, useEffect } from 'react';

import TodoMaker from './components/TodoMaker';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

import './styles.css';
import Navbar from './components/Navbar';

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

  const filterHandler = (e :MouseEvent) => {
    const option = e.target as HTMLLIElement;
    console.log(option.value);
    /* setStatus(option.value); */
  }

  return (
    <div className="home">
      <Navbar/>
      <TodoMaker 
        setInputText={setInputText} 
        setTodos={setTodos} 
        todos={todos} 
        inputText={inputText}
        setStatus={setStatus}
      />
      <div>
        <ul className="filter">
          <li onClick={() => filterHandler} className="filterBtn all" value="all" >ALL</li>
          <li onClick={() => filterHandler} className="filterBtn comp" value="completed">COMPLETED</li>
          <li onClick={() => filterHandler} className="filterBtn to-do" value="all">TO DO</li>
        </ul>
      </div>
      <TodoList 
       todos = {todos}
       filteredTodos = {filteredTodos}
       setTodos = {setTodos} 
      />
      <div className="home-logo">
        <div className="title">
          <i className="fas fa-stream"></i>
          <h1>To Do List</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;