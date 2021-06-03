import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDirective} from '../../directives/scroll.directive';

@Component({
  selector: 'app-rokoko',
  templateUrl: './rokoko.page.html',
  styleUrls: ['./rokoko.page.scss'],
})
export class RokokoPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  constructor(public scroll: ScrollDirective) { }

  ngOnInit() {
  }

}
