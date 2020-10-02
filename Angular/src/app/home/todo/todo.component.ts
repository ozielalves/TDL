import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Output() delete = new EventEmitter();
  @Output() complete = new EventEmitter();
  @Input() id: number; 
  @Input() text: string; 
  @Input() completed: boolean; 

  constructor() { }

  ngOnInit(): void {
  }

}
