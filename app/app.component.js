System.register(['angular2/core', './background.component', './trim.pipe'], function(exports_1, context_1) {
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
    var core_1, background_component_1, trim_pipe_1;
    var FillColor, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (background_component_1_1) {
                background_component_1 = background_component_1_1;
            },
            function (trim_pipe_1_1) {
                trim_pipe_1 = trim_pipe_1_1;
            }],
        execute: function() {
            FillColor = (function () {
                function FillColor(value, name) {
                    this.value = value;
                    this.name = name;
                }
                return FillColor;
            }());
            AppComponent = (function () {
                function AppComponent() {
                    this.fillColors = [
                        new FillColor('#29AAE1', 'Lucid blue'),
                        new FillColor('#FC8D2A', 'Lucidchart orange'),
                        new FillColor('#8CBF3F', 'Lucidpress green'),
                        new FillColor('#3D4752', 'Lucid blue steel'),
                        new FillColor('#77818C', 'Lucid blue steel 2'),
                        new FillColor('#2C84B5', 'Lucid blue dark'),
                        new FillColor('CUSTOM', 'Custom...'),
                    ];
                    this.fillColor = this.fillColors[0].value;
                }
                AppComponent.prototype.hasInputData = function () {
                    return !!this.firstName || !!this.lastName || !!this.jobTitle || !!this.teamName || !!this.headshotUrl;
                };
                AppComponent.prototype.print = function () {
                    window.print();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'lucid-nametags',
                        templateUrl: './app/app.component.html',
                        styleUrls: ['./app/app.component.css'],
                        directives: [background_component_1.BackgroundComponent],
                        pipes: [trim_pipe_1.TrimPipe],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
