import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

/* interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
} */

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  listTodos(): Observable<any>{
    return this.http.get("http://jsonplaceholder.typicode.com/todos?_limit=5");
  }

  deleteTodo(id: number): void {
    this.http.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
  }

  updateTodo(id: number, completed: boolean): void {
    this.http.put(`http://jsonplaceholder.typicode.com/todos/${id}`, {
      completed,
    });
  }

  getTodo(id: number): Observable<any> {
    return this.http.get(`http://jsonplaceholder.typicode.com/todos/${id}`);
  }

  addTodo(userId: number,title: string): void {
    this.http.post("http://jsonplaceholder.typicode.com/todos", {
      userId,
      title
    })
  }
  
}
