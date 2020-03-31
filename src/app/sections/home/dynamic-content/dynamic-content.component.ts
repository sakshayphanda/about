import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.sass']
})
export class DynamicContentComponent implements OnInit {
  constructor(
    private globalData: GlobalDataService
  ) {}

  ngOnInit(): void {
    document.querySelector('.dynamic').addEventListener('scroll', (ev) => {
      const sections = document.getElementsByClassName('sec');
      if(ev[`target`][`scrollTop`] < document.querySelectorAll('.sec')[0][`offsetTop`]) {
        this.globalData.selectedAction.emit('');
        return;
      }
      for (let i = 0; i < sections.length; i++) {
        if(ev[`target`][`scrollTop`] >= document.querySelectorAll('.sec')[i][`offsetTop`]) {
        this.globalData.selectedAction.emit(document.querySelectorAll('.sec')[i][`id`]);
        }
      }
    });
  }
}
