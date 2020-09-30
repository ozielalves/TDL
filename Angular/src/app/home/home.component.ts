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
  filter: string = "all";

  constructor() {}

  ngOnInit(): void {
    axios
      .get("http://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => (this.todos = res.data))
      .then(() => (this.filteredTodos = this.todos))
      .catch((err) => console.log(err));
  }

  setFilter(filter: string): void  {
    switch (filter) {
      case "completed":
        this.filter = 'completed';
        this.filteredTodos = this.todos.filter(
          (todo) => todo.completed !== false
        );
        break;
      case "uncompleted":
        this.filter = "uncompleted";
        this.filteredTodos = this.todos.filter(
          (todo) => todo.completed === false
        );
        break;
      default:
        this.filter = "all";
        this.filteredTodos = this.todos;
        break;
    }
  }
  
  handleDelete(id: number): void  {
    /* console.log(id);
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.setFilter(this.filter); */
    axios
      .delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then(
        (res) => (this.todos = this.todos.filter((todo) => todo.id !== res.data.id))
      )
      .then(() => this.todoFadeAway(id))
      .catch((err) => console.log(err));
  }

  todoFadeAway(id: number): void  {
    const todo = document.getElementById(`td${id}`);
    todo.classList.toggle("fadeOut");
    todo.addEventListener("transitionend", () => {
      todo.remove();
      this.setFilter(this.filter);
    });
  }

  handleComplete(id: number) {
    console.log(id);
    /* console.log(id);
    this.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    }); */
    axios
      .get(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const completed = !res.data.completed;
        console.log(completed)
        axios
          .put(`http://jsonplaceholder.typicode.com/todos/${id}`, {
            completed,
          })
          .then(() => this.todoToggleCompleted(id, completed))
          .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
  }

  todoToggleCompleted(id: number, completed: boolean) {
    const todo = document.getElementById(`td${id}`);
    const completeBtn = document.querySelector(`#td${id} .complete-btn`);
    if (completed === true) {
      todo.classList.add("completed");
      completeBtn.classList.add("uncomplete-btn");
      todo.addEventListener("transitionend", () => {
        this.setFilter(this.filter);
      });
    } else {
      todo.classList.remove("completed");
      completeBtn.classList.remove("uncomplete-btn");
      todo.addEventListener("transitionend", () => {
        this.setFilter(this.filter);
      });
    }
  }

  addTodo(newTodo: Todo) {
    const { title, completed } = newTodo;
    console.log(newTodo);
    axios
      .post("http://jsonplaceholder.typicode.com/todos", {
        title,
        completed,
      })
      .then((res) => (this.todos = [res.data,...this.todos]))
      .then(() => this.setFilter(this.filter))
      .catch((err) => console.log(err));
    /* this.todos = [...this.todos, newTodo]; */
  }
}
