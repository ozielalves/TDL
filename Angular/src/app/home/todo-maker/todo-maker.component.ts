import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-maker',
  templateUrl: './todo-maker.component.html',
  styleUrls: ['./todo-maker.component.scss']
})
export class TodoMakerComponent implements OnInit {
  inputText: string = 'hehehe';
  @Output() submit = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  inputTextHandler(txt: string) {
    this.inputText = txt;
  }
  handleSubmit(e: Event) {
    e.preventDefault();

    const newTodo: Todo = {
      userId: Math.random(),
      id: Math.random() * 12,
      title: this.inputText,
      completed: false
    }

    // SEND UP TO PARENT
    this.submit.emit(newTodo);
    // CLEAR INPUT
    e.srcElement[0].value = "";
  }
}
