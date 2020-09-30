import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-todo-maker',
  templateUrl: './todo-maker.component.html',
  styleUrls: ['./todo-maker.component.scss']
})
export class TodoMakerComponent implements OnInit {
  inputText: string = '';
  @Output() submit = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  inputTextHandler($event: any) {
    this.inputText = $event.target.value;
  }
  handleSubmit( ) {
/*     e.preventDefault(); */
    const newTodo = {
      title: this.inputText,
      completed: false
    }
    console.log(newTodo)
    // SEND UP TO PARENT
    /* this.submit.emit(newTodo); */
    // CLEAR INPUT
    this.inputText = "";
  }
}
