import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDirective} from '../../directives/scroll.directive';

@Component({
  selector: 'app-tti',
  templateUrl: './tti.page.html',
  styleUrls: ['./tti.page.scss'],
})
export class TtiPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  constructor(public scroll: ScrollDirective) { }

  ngOnInit() {
  }

}
