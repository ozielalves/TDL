import React from 'react';

import Header from '../../components/Header';
import Todo from '../../components/Todo';

import './styles.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="todo-container">
        <ul className="todo-list">
          <Todo todoText="Why you do this?"/>
        </ul>
      </div>
    </div>
  );
}

export default Home;