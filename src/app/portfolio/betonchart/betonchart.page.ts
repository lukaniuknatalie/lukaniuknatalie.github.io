import {Component, OnInit, ViewChild} from '@angular/core';
import {ScrollDirective} from '../../directives/scroll.directive';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-betonchart',
  templateUrl: './betonchart.page.html',
  styleUrls: ['./betonchart.page.scss'],
})
export class BetonchartPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  constructor(public scroll: ScrollDirective) { }

  ngOnInit() {
  }

}
