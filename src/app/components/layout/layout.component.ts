import {ChangeDetectionStrategy, Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';

import {CompactType, GridsterConfig, GridsterItem, GridType} from 'angular-gridster2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  @ViewChild('chartContainer',{static: false}) container;
  @ViewChild('chartContainer2',{static: false}) container2;
  chart: anychart.charts.Pie = null;
   data = [
    {x: "John", value: 10000},
    {x: "Jake", value: 12000},
    {x: "Peter", value: 13000,
     normal:   {
                 fill: "#5cd65c",
                 stroke: null,
                 label: {enabled: true}
               },
     hovered:  {
                 fill: "#5cd65c",
                 stroke: null,
                 label: {enabled: true}
               },
     selected: {
                 fill: "#5cd65c",
                 stroke: null,
                 label: {enabled: true}
               }
    },
    {x: "James", value: 10000},
    {x: "Mary", value: 9000}
  ];
  chart2 = anychart.bar()
  myStyles = {
       'color': 'white',
       'font-size.em': 2,
       'background-color':'rgba(179, 27, 27, 0.952)'
    };
    myStylesGreen = {
      'color': 'white',
      'font-size.em': 2,
      'background-color':'rgba(27, 179, 27, 0.952)'
   };
   specific = {cols: 2, rows: 2, y: 1, x: 0,content:'100 ',style: this.myStylesGreen, title:' Premier'};
   specificLine = {cols: 2, rows: 2, y: 1, x: 2,content:'100 ',style: this.myStylesGreen, title:' Premier'}
  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      maxCols: 12,
      minCols: 12,
      maxRows: 6,
      minRows: 6,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [
      {cols: 1, rows: 1, y: 0, x: 0,content:'100 ',style: this.myStylesGreen, title:' Premier'},
      {x: 1, y: 0, cols: 1, rows: 1,content:'10',style: this.myStyles, title:'second'},
      {x: 2, y: 0, cols: 1, rows: 1,content:'250',style: this.myStylesGreen, title:'third'},
      {x: 3, y: 0, cols: 1, rows: 1,content:'120',style: this.myStylesGreen, title:'plus longtitre'}
    ];

     // Default data set mapping, hardcoded here.
     this.chart = anychart.pie();
     // set the data
    this.chart.data([
      ["Chocolate", 5],
      ["Rhubarb compote", 2],
      ["Crêpe Suzette", 2],
      ["American blueberry", 2],
      ["Buttermilk", 1]
    ]);

    // bar chart
    var series = this.chart2.bar(this.data);
  }

  ngAfterViewInit() {
    this.chart.container(this.container.nativeElement);
    this.chart2.container(this.container2.nativeElement);
    this.chart.draw();
    this.chart2.draw();
    
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1,content:'100',style:  {
      'color': 'white',
      'font-size.em': 2,
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'min-height': '1em',
      'width':'100%',
      'height': '100%',
      'border-radius': '50%',
      'background-color':'rgba(179, 27, 27, 0.952)'
   }});
    this.dashboard.push({x: 1, y: 0, cols: 1, rows: 1,content:'10',style: this.myStylesGreen});
    this.dashboard.push({x: 2, y: 0, cols: 1, rows: 1,content:'250',style: {"background-color": "rgba(79, 27, 27, 0.952)"}});
  }
  getMyStyles(item: any) {
    console.log(item.style)
   
    return item.style;
}  
}