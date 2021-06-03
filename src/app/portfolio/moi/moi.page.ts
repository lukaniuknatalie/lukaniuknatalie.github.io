import {Component, OnInit, ViewChild} from '@angular/core';
import {ImagesDirective} from '../directives/images.directive';
import {IonContent} from '@ionic/angular';
import {ScrollDirective} from '../../directives/scroll.directive';
import {PortfolioService} from '../services/portfolio.service';

@Component({
  selector: 'app-moi',
  templateUrl: './moi.page.html',
  styleUrls: ['./moi.page.scss'],
})
export class MoiPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  viewportWidth = window.innerWidth;
  constructor(public images: ImagesDirective,
              public scroll: ScrollDirective,
              public port: PortfolioService) { }

  ngOnInit() {
  }

}
