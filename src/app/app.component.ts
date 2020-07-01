import { Component, OnInit } from '@angular/core';
import { fade } from './animations/fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [ fade ]
})
export class AppComponent implements OnInit {
  title = 'sakshayPhanda';
  constructor() {

  }
  ngOnInit() {
  }
}
