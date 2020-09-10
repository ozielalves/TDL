import React from 'react';

import Header from '../../components/Header';

import './styles.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className="todo-container">
        <ul className="todo-list"></ul>
      </div>
    </>
  );
}

export default Home;