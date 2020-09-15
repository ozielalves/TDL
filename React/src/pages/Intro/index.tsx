import React from 'react';

import Logo from './components/Logo';
import Navbar from './components/Navbar';

import './styles.css';
import bg from '../../assets/Circle-bg.svg'
import MovingTodo1 from '../../assets/Moving-todo-1.svg'
import MovingTodo2 from '../../assets/Moving-todo-2.svg'
import MovingTodo3 from '../../assets/Moving-todo-3.svg'
import MovingTodo4 from '../../assets/Moving-todo-4.svg'
import MovingTodo5 from '../../assets/Moving-todo-5.svg'
import Note from '../../assets/note.svg'

export default function Intro () {
  return (
    <div id="intro">
      <img id="bg" src={bg} alt="background"/>
      <img id="mt1" src={MovingTodo1} alt="animation"/>
      <img id="mt2" src={MovingTodo2} alt="animation"/>
      <img id="mt3" src={MovingTodo3} alt="animation"/>
      <img id="mt4" src={MovingTodo4} alt="animation"/>
      <img id="mt5" src={MovingTodo5} alt="animation"/>
      <img id="note" src={Note} alt="animation"/>
      <Navbar />
      <Logo />
    </div>
  );
}
