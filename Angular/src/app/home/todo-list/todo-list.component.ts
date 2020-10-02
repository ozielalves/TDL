import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() delete = new EventEmitter();
  @Output() complete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.todos)
  }

}
