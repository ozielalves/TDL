import React from 'react';

import Input from '../Input'

import './styles.css';

const Header = () => {
  return (
    <header>
        <div className="title">
          <i className="fas fa-stream"></i>
          <h1>To Do List</h1>
        </div>
        <p>What can't you forget to do today?</p>
        <Input />
    </header>
  );
}

export default Header;