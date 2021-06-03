import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDirective} from '../../directives/scroll.directive';

@Component({
  selector: 'app-intros',
  templateUrl: './intros.page.html',
  styleUrls: ['./intros.page.scss'],
})
export class IntrosPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  constructor(public scroll: ScrollDirective) { }

  ngOnInit() {
  }

}
