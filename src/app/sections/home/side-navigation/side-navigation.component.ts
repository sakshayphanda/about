import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.sass']
})
export class SideNavigationComponent implements OnInit {

  productsInCart = {};
  userData = {};
  selectedAction = 'Home';
  actions = [];

  constructor(
    ) {
   }

  ngOnInit() {
    this.initialiseActions();
  }

  initialiseActions() {
    this.actions = [
      {
        name: 'About',
        route: '/home',
        auth: 'no'
      }, {
        name: 'Experience',
        route: '/cart',
        auth: 'no'
      }, {
        name: 'Projects',
        route: '/check-out',
        auth: 'no'
      }, {
        name: 'Skills',
        route: '/my-orders',
        auth: 'no'
      }, {
        name: 'Awards',
        route: '/admin/admin-orders',
        auth: 'admin'
      }, {
        name: 'Education',
        route: '/admin/admin-products',
        auth: 'admin'
      }, {
        name: 'Contact',
        route: '/admin/admin-products',
        auth: 'admin'
      }, {
        name: 'Resume',
        route: '/admin/admin-products',
        auth: 'admin'
      }
    ];
  }

  actionChanged($event, name) {
    $event.stopPropagation();
    this.selectedAction = name;
  }
}
