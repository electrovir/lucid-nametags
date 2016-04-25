import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {OnInit} from 'angular2/core';

class Point {
  constructor(public x: number, public y: number) {}
}

class Triangle {
  constructor(public p1: Point, public p2: Point, public p3: Point, public opacity: number) {}
  formattedPoints() {
    return `${this.p1.x},${this.p1.y} ${this.p2.x},${this.p2.y} ${this.p3.x},${this.p3.y}`
  }
}

@Component({
  selector: 'nametag-background',
  templateUrl: './app/background.component.html',
})
export class BackgroundComponent {
  @Input() color: string;

  width: number;
  height: number;
  triangles: Triangle[];

  ngOnInit() {
    const dpi = 96;
    this.width = 10.5 * dpi;
    this.height = 13 * dpi;
    const rows = 14;
    const triangleHeight = this.height / rows;
    const triangleWidth = triangleHeight * Math.sin(60 * Math.PI / 180);
    const columns = Math.ceil(this.width / triangleWidth);

    let allPoints: Point[][] = [];

    for (let i = 0; i < columns; i++) {
      let columnPoints = [];
      for (let j = 0; j < rows; j++) {
        columnPoints.push(new Point(
          i * triangleWidth,
          i % 2 === 0 ? j * triangleHeight : j * triangleHeight + triangleHeight/2
        ));
      }
      allPoints.push(columnPoints);
    }

    let allTriangles: Triangle[] = [];

    const cells = (rows-2) + (columns-1);

    function getRandomBucketed(buckets) {
      return Math.floor(Math.random() * (buckets + 1)) / buckets;
    }

    for (let column = 0; column < allPoints.length; column++) {
      for (let row = 0; row < allPoints[column].length-1; row++) {
        if (allPoints[column-1]) {
          allTriangles.push(
            new Triangle(
              allPoints[column][row],
              allPoints[column-1][(column % 2 === 0) ? row : row+1],
              allPoints[column][row+1],
              (1 - ((column + row) / cells)) * getRandomBucketed(15)
            )
          );
        }
        if (allPoints[column+1]) {
          allTriangles.push(
            new Triangle(
              allPoints[column][row],
              allPoints[column+1][(column % 2 === 0) ? row : row+1],
              allPoints[column][row+1],
              (1 - ((column + row) / cells)) * getRandomBucketed(15)
            )
          );
        }
      }
    }

    this.triangles = allTriangles;

  }

}
