import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  navigation = [
    {
      title : 'Home',
      url   : '/home',
      icon  : 'home',
    },
    {
      title : 'About us',
      url   : '/about-us',
      icon  : 'beer-outline',
    },
  ]

  constructor() { }

  ngOnInit() {}

}
