import {Component} from 'angular2/core';
import {BackgroundComponent} from './background.component';
import {TrimPipe} from './trim.pipe';

class FillColor {
  constructor(value: string, name: string) {
    this.value = value;
    this.name = name;
  }
}

@Component({
    selector: 'lucid-nametags',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [BackgroundComponent],
    pipes: [TrimPipe],
})
export class AppComponent {

  fillColors: FillColor[] = [
    new FillColor('#29AAE1', 'Lucid blue'),
    new FillColor('#FC8D2A', 'Lucidchart orange'),
    new FillColor('#8CBF3F', 'Lucidpress green'),
    new FillColor('#3D4752', 'Lucid blue steel'),
    new FillColor('#77818C', 'Lucid blue steel 2'),
    new FillColor('#2C84B5', 'Lucid blue dark'),
    new FillColor('CUSTOM', 'Custom...'),
  ];

  firstName: string;
  lastName: string;
  jobTitle: string;
  teamName: string;
  fillColor: string = this.fillColors[0].value;
  customFillColor: string;
  headshotUrl: string;

  hasInputData() {
    return !!this.firstName || !!this.lastName || !! this.jobTitle || !! this.teamName || !!this.headshotUrl;
  }

  print() {
    console.log('printing');
  }
}
