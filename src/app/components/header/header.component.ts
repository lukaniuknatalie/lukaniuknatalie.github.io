import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  viewportWidth = window.innerWidth;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(window.innerWidth, window.innerHeight);
  }
  goHome(){
    this.router.navigate(['home']);
  }
  goAboutUs(){
    this.router.navigate(['about-us']);
  }
}
