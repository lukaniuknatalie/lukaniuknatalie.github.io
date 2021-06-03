import {Component, Input, OnInit } from '@angular/core';
import {ScrollDirective} from '../../directives/scroll.directive';

@Component({
  selector: 'app-scroll-to-top-btn',
  templateUrl: './scroll-to-top-btn.component.html',
  styleUrls: ['./scroll-to-top-btn.component.scss'],
})
export class ScrollToTopBtnComponent implements OnInit {
  @Input() content: any;
  constructor(public scroll: ScrollDirective) { }

  ngOnInit() {
  }

  scrollToTop(){
    this.content.scrollToTop(600);
  }
}
