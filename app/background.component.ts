import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ElementRef} from 'angular2/core';

@Component({
  selector: 'nametag-background',
  templateUrl: './app/background.component.html',
})
export class BackgroundComponent {
  @Input() color: string = '#14496A';

  minOpacityMultiplier: number = 0.25;
  maxOpacityMultiplier: number = 0.55;

  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    var nodes = Array.prototype.slice.call(
      this.el.nativeElement.querySelectorAll('polygon')
    );
    nodes.sort((a, b) => {
      var abb = a.getBBox();
      var bbb = b.getBBox();
      return (bbb.x + bbb.y) - (abb.x + abb.y);
    });

    nodes.forEach((poly, i, rr) => {
      var op = i * this.getRandomArbitrary(0.25, 0.95) / rr.length;
      poly.style.opacity = op;
    });
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}
