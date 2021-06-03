import {Component, OnInit, ViewChild} from '@angular/core';
import {ScrollDirective} from '../../directives/scroll.directive';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-revlab',
  templateUrl: './revlab.page.html',
  styleUrls: ['./revlab.page.scss'],
})
export class RevlabPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  constructor(public scroll: ScrollDirective) { }

  ngOnInit() {
  }

}
