import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.sass']
})
export class SideNavigationComponent implements OnInit {

  productsInCart = {};
  userData = {};
  selectedAction = '';
  actions = [];

  constructor(
    private globalData: GlobalDataService
    ) {
   }

  ngOnInit() {
    this.initialiseActions();
    this.globalData.selectedAction.subscribe(
      action => {
        this.selectedAction = action;
      }
    );
  }

  initialiseActions() {
    this.actions = [
      {
        id: 'about',
        name: 'About'
      }, {
        id: 'experience',
        name: 'Experience'

      }, {
        id: 'projects',
        name: 'Projects'

      }, {
        id: 'skills',
        name: 'Skills'
      }, {
        id: 'awards',
        name: 'Awards'

      }, {
        id: 'education',
        name: 'Education'

      }, {
        id: 'contact',
        name: 'Contact'
      }, {
        id: 'resume',
        name: 'Resume'
      }
    ];
  }

  actionChanged($event, id) {
    $event.stopPropagation();
   // this.selectedAction = id;
    console.log(document.querySelector('#' + id));
    $('.dynamic').animate({
      scrollTop: document.querySelector('#' + id)[`offsetTop`]
    }, 1000);
   // document.querySelector('.dynamic').scrollTop = document.querySelector('#' + id)[`offsetTop`];
  }
}
