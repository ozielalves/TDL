import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() hoverBg: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  /* @Input() handleHover: void; */
  @Output() hover = new EventEmitter()
  
}
