import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects-navigation',
  templateUrl: './projects-navigation.component.html',
  styleUrls: ['./projects-navigation.component.scss'],
})
export class ProjectsNavigationComponent implements OnInit {
@Input() currentProject: string;
  constructor(public router: Router) { }

  ngOnInit() {}
  goPrevious(currentProject){
    switch (currentProject) {
      case 'tawazun': this.router.navigate(['betonchart']);
        break;
      case 'revlab': this.router.navigate(['intros']);
        break;
      case 'betonchart': this.router.navigate(['revlab']);
        break;
      case 'santiago': this.router.navigate(['tawazun']);
        break;
      case 'fractal': this.router.navigate(['memory']);
        break;
      case 'tti': this.router.navigate(['moi']);
        break;
      case 'rokoko': this.router.navigate(['tti']);
        break;
      case 'volt': this.router.navigate(['rokoko']);
        break;
    }
  }
  goHome(){
    this.router.navigate(['home']);

  }
  goNext(currentProject){
    switch (currentProject) {
      case 'tawazun': this.router.navigate(['memory']);
        break;
      case 'revlab': this.router.navigate(['betonchart']);
        break;
      case 'betonchart': this.router.navigate(['tawazun']);
        break;
      case 'santiago': this.router.navigate(['moi']);
        break;
      case 'fractal': this.router.navigate(['tti']);
        break;
      case 'tti': this.router.navigate(['rokoko']);
        break;
      case 'rokoko': this.router.navigate(['intros']);
        break;
      case 'volt': this.router.navigate(['revlab']);
        break;
    }
  }
}
