import React from 'react';

import './styles.css';

import Todo from '../Todo';

interface todoListProps {
  todos: any,
  filteredTodos: any,
  setTodos: any
}

const TodoList = ({todos, setTodos, filteredTodos} : todoListProps ) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map( (todo : any) => (
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
  );
}

export default TodoList;
