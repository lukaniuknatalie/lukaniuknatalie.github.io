import {Component, Input, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service';

@Component({
  selector: 'app-client-description',
  templateUrl: './client-description.component.html',
  styleUrls: ['./client-description.component.scss'],
})
export class ClientDescriptionComponent implements OnInit {
@Input() project: string;
currentProjectIndex: number;
  constructor(public projects: PortfolioService) { }

  ngOnInit() {
    this.getProjectIndex(this.project);
  }
  getProjectIndex(key){
    switch (key) {
      case 'tawazun': this.currentProjectIndex = 0;
      break;
      case 'revlab': this.currentProjectIndex = 1;
        break;
      case 'betonchart': this.currentProjectIndex = 2;
        break;
      case 'santiago': this.currentProjectIndex = 3;
        break;
      case 'fractal': this.currentProjectIndex = 4;
        break;
      case 'tti': this.currentProjectIndex = 5;
        break;
      case 'rokoko': this.currentProjectIndex = 6;
        break;
      case 'volt': this.currentProjectIndex = 7;
        break;
    }
  }
}
