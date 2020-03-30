import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.sass']
})
export class DynamicContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelector('.dynamic').addEventListener('scroll', () => {
      const sections = document.getElementsByClassName('heading');
        console.log(sections[0]['offsetTop']);

    });
  }

}
