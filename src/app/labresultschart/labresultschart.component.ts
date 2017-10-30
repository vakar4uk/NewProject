
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-labresultschart',
  templateUrl: './labresultschart.component.html',
  styleUrls: ['./labresultschart.component.css'],
})
export class LabresultschartComponent {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Sodium'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Potassium'},
    {data: [80, 59, 12, 29, 89, 25, 14], label: 'Calcium'},
    {data: [25, 44, 53, 73, 29, 82, 26], label: 'Glucose'},
    {data: [10, 16, 38, 19, 35, 36, 15], label: 'Hemoglobin'},
  ];
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }
  
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}