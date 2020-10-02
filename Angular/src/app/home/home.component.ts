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
  filter: string = "all";

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.listTodos();
    /* axios
      .get("http://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => (this.todos = res.data))
      .then((res) => console.log(res.data))
      .then(() => (this.filteredTodos = this.todos))
      .catch((err) => console.log(err));
    console.log(this.todos,this.filteredTodos) */
  }

  listTodos(): void {
    this.todosService.listTodos().subscribe(todos => {
      this.todos = todos
      this.filteredTodos = todos
    }, err => {
      console.log("Error while listing the todos",err)
    })
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

  updateTodos() {
    this.setFilter(this.filter);
  }
  
  handleDelete(id: number): void  {
    this.todosService.deleteTodo(id); // Error?
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.todoFadeAway(id);
    /* console.log(id);
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.setFilter(this.filter); */
    /* axios
      .delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then(
        (res) => (this.todos = this.todos.filter((todo) => todo.id !== res.data.id))
      )
      .then(() => this.todoFadeAway(id))
      .catch((err) => console.log(err)); */
  }

  todoFadeAway(id: number): void  {
    const todo = document.getElementById(`td${id}`);
    todo.classList.toggle("fadeOut");
    todo.addEventListener("transitionend", () => {
      todo.remove();
      this.updateTodos();
    });
  }

  handleComplete(id: number) {
    let completed: boolean;
    this.todosService.getTodo(id).subscribe(todo => {
      completed = !todo.completed
    }, err => {
      console.log("Could not get todo state",err)
    })
    this.todosService.updateTodo(id, completed);
    this.todoToggleCompleted(id, completed);
    /* console.log(id);
    this.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    }); */
    /* axios
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
          .catch((err) => console.log(err)); */
  }

  todoToggleCompleted(id: number, completed: boolean) {
    const todo = document.getElementById(`td${id}`);
    const completeBtn = document.querySelector(`#td${id} .complete-btn`);
    if (completed === true) {
      todo.classList.add("completed");
      completeBtn.classList.add("uncomplete-btn");
      todo.addEventListener("transitionend", () => {
        this.updateTodos();
      });
    } else {
      todo.classList.remove("completed");
      completeBtn.classList.remove("uncomplete-btn");
      todo.addEventListener("transitionend", () => {
        this.updateTodos();
      });
    }
  }

  addTodo(newTodo: Todo) {
    const { userId, title } = newTodo;
    this.todosService.addTodo(userId, title);
    this.updateTodos();
    /* axios
      .post("http://jsonplaceholder.typicode.com/todos", {
        title,
        completed,
      })
      .then((res) => (this.todos = [res.data,...this.todos]))
      .then(() => this.setFilter(this.filter))
      .catch((err) => console.log(err)); */
    /* this.todos = [...this.todos, newTodo]; */
  }
}
