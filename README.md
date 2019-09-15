# Use anychart in a angular project
## add  reference path to app.module.ts

    /// <reference path="../../node_modules/anychart/dist/index.d.ts"/>
## load css file in angular.json

 "styles": [
              "src/styles.scss",
              "./node_modules/anychart/dist/css/anychart-ui.min.css",
              "./node_modules/anychart/dist/fonts/css/anychart-font.min.css"
            ]

## import anychart js script in main.ts
    import 'anychart/dist/js/anychart-base.min.js';
    import 'anychart/dist/js/anychart-ui.min.js';

## Use it in a component
    in html : <div class="" #container></div>
    in ts   :  chart: anychart.charts.Pie = null;
                ngOnInit() {
                    this.chart = anychart.pie();
                    // set the data
                     this.chart.data([
                        ["Chocolate", 5],
                        ["Rhubarb compote", 2],
                        ["Crêpe Suzette", 2],
                        ["American blueberry", 2],
                        ["Buttermilk", 1]
                    ]);
                }
                ngAfterViewInit() {
                    this.chart.container(this.container.nativeElement);
                    this.chart.draw();
                }
    
  }

# NgDashboardBuilder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
