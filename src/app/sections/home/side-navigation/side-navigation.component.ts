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
        name: 'About',
        icon: 'account_circle'
      }, {
        id: 'experience',
        name: 'Experience',
        icon: 'show_chart'

      }, {
        id: 'projects',
        name: 'Projects',
        icon: 'developer_board'

      }, {
        id: 'skills',
        name: 'Skills',
        icon: 'bar_chart'
      }, {
        id: 'awards',
        name: 'Awards',
        icon: 'star'

      }, {
        id: 'education',
        name: 'Education',
        icon: 'menu_book'

      }, {
        id: 'contact',
        name: 'Contact',
        icon: 'call'
      }, {
        id: 'resume',
        name: 'Resume',
        icon: 'description'
      }
    ];
  }

  actionChanged($event, id) {
    $event.stopPropagation();
    if (id === 'resume') {
      window.open('../../../../assets/Resume-sakshay.docx', '_blank');
      return;
    }
   // this.selectedAction = id;
    $('.dynamic').animate({
      scrollTop: document.querySelector('#' + id)[`offsetTop`]
    }, 1000);

    this.globalData.toggleSideMenu.emit(true);

  }
}
