import {Directive, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';


@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  pageYoffset = 0;
  viewportHeight = window.innerHeight;

  constructor() { }

  logScrolling(ev){
    this.pageYoffset = ev.detail.scrollTop;
  }
}
