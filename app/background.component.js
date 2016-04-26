System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var Point, Triangle, BackgroundComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            Point = (function () {
                function Point(x, y) {
                    this.x = x;
                    this.y = y;
                }
                return Point;
            }());
            Triangle = (function () {
                function Triangle(p1, p2, p3, opacity) {
                    this.p1 = p1;
                    this.p2 = p2;
                    this.p3 = p3;
                    this.opacity = opacity;
                }
                Triangle.prototype.formattedPoints = function () {
                    return this.p1.x + "," + this.p1.y + " " + this.p2.x + "," + this.p2.y + " " + this.p3.x + "," + this.p3.y;
                };
                return Triangle;
            }());
            BackgroundComponent = (function () {
                function BackgroundComponent() {
                }
                BackgroundComponent.prototype.ngOnInit = function () {
                    var dpi = 96;
                    this.width = 10.5 * dpi;
                    this.height = 13 * dpi;
                    var rows = 14;
                    var triangleHeight = this.height / rows;
                    var triangleWidth = triangleHeight * Math.sin(60 * Math.PI / 180);
                    var columns = Math.ceil(this.width / triangleWidth);
                    var allPoints = [];
                    for (var i = 0; i < columns; i++) {
                        var columnPoints = [];
                        for (var j = 0; j < rows; j++) {
                            columnPoints.push(new Point(i * triangleWidth, i % 2 === 0 ? j * triangleHeight : j * triangleHeight + triangleHeight / 2));
                        }
                        allPoints.push(columnPoints);
                    }
                    var allTriangles = [];
                    var cells = (rows - 2) + (columns - 1);
                    function getRandomBucketed(buckets) {
                        return Math.floor(Math.random() * (buckets + 1)) / buckets;
                    }
                    for (var column = 0; column < allPoints.length; column++) {
                        for (var row = 0; row < allPoints[column].length - 1; row++) {
                            if (allPoints[column - 1]) {
                                allTriangles.push(new Triangle(allPoints[column][row], allPoints[column - 1][(column % 2 === 0) ? row : row + 1], allPoints[column][row + 1], (1 - ((column + row) / cells)) * getRandomBucketed(15)));
                            }
                            if (allPoints[column + 1]) {
                                allTriangles.push(new Triangle(allPoints[column][row], allPoints[column + 1][(column % 2 === 0) ? row : row + 1], allPoints[column][row + 1], (1 - ((column + row) / cells)) * getRandomBucketed(15)));
                            }
                        }
                    }
                    this.triangles = allTriangles;
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], BackgroundComponent.prototype, "color", void 0);
                BackgroundComponent = __decorate([
                    core_1.Component({
                        selector: 'nametag-background',
                        templateUrl: './app/background.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], BackgroundComponent);
                return BackgroundComponent;
            }());
            exports_1("BackgroundComponent", BackgroundComponent);
        }
    }
});

//# sourceMappingURL=background.component.js.map
