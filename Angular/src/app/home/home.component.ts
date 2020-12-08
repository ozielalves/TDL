import { TodosService } from './../../todos.service';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos: Todo[];
  filteredTodos: Todo[];
  filter: string = 'all';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getLocalTodos();
  }

  listTodos(): void {
    this.todosService.listTodos().subscribe(
      (todos) => {
        this.todos = todos;
        this.filteredTodos = todos;
      },
      (err) => {
        console.log('Error while listing the todos', err);
      }
    );
  }

  getLocalTodos(): void {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todosFromLocal = JSON.parse(localStorage.getItem('todos') || '{}');
      this.todos = todosFromLocal.filter(
        (item: Todo) => item.id && item 
      );
    }
    this.updateTodos();
  }

  setFilter(filter: string): void {
    switch (filter) {
      case 'completed':
        this.filter = 'completed';
        this.filteredTodos = this.todos.filter(
          (todo: Todo) => todo.id && todo.completed !== false
        );
        break;
      case 'uncompleted':
        this.filter = 'uncompleted';
        this.filteredTodos = this.todos.filter(
          (todo: Todo) => todo.id && todo.completed === false
        );
        break;
      default:
        this.filter = 'all';
        this.filteredTodos = this.todos.filter(
          (item: Todo) => item.id && item
        );
        break;
    }
  }

  saveTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  updateTodos() {
    this.setFilter(this.filter);
  }

  handleDelete(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.todoFadeAway(id);
  }

  todoFadeAway(id: number): void {
    const todo = document.getElementById(`td${id}`);
    todo.classList.toggle('fadeOut');
    todo.addEventListener('transitionend', () => {
      todo.remove();
      this.updateTodos();
    });
  }

  handleComplete(id: number) {
    let completed: boolean;
    this.todos = this.todos.map((item: Todo) => {
      if (item.id === id) {
        completed = !item.completed;
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.todoToggleCompleted(id, completed);
  }

  todoToggleCompleted(id: number, completed: boolean) {
    const todo = document.getElementById(`td${id}`);
    const completeBtn = document.querySelector(`#td${id} .complete-btn`);
    if (completed === true) {
      todo.classList.add('completed');
      completeBtn.classList.add('uncomplete-btn');
      /* todo.addEventListener('transitionend', () => { */
        this.updateTodos();
      /* }); */
    } else {
      todo.classList.remove('completed');
      completeBtn.classList.remove('uncomplete-btn');
      /* todo.addEventListener('transitionend', () => { */
        this.updateTodos();
      /* }); */
    }
  }

  addTodo(newTodo: Todo) {
    this.todos = [...this.todos, newTodo];
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.updateTodos();
  }
}
