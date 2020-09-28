import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',/* 'app-intro', */
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  hoverBg = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  handleHover () {
    this.hoverBg = !this.hoverBg;
  }
}
