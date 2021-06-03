import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDirective} from '../../directives/scroll.directive';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.page.html',
  styleUrls: ['./memory.page.scss'],
})
export class MemoryPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  constructor(public scroll: ScrollDirective) { }

  ngOnInit() {
  }

}
