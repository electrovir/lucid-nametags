import {Component} from 'angular2/core';
import {BackgroundComponent} from './background.component';
@Component({
    selector: 'lucid-nametags',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [BackgroundComponent],
})
export class AppComponent {
  firstName: string;
  lastName: string;
  jobTitle: string;
  teamName: string;
  fillColor: string;
  customFillColor: string;

  print() {
    console.log('printing');
  }
}
