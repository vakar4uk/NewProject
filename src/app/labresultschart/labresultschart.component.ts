
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-labresultschart',
  templateUrl: './labresultschart.component.html',
  styleUrls: ['./labresultschart.component.css']
})
export class LabresultschartComponent {
 // lineChart
 public lineChartData:Array<any> = [
   {data: [65, 59, 80, 81, 56, 55], label: 'Series A'},
   {data: [28, 48, 40, 19, 86, 27], label: 'Series B'},
   {data: [12, 32, 133, 2, 65, 84], label: 'Series C'},
   {data: [94, 3, 67, 19, 42, 21], label: 'Series D'},
   {data: [72, 38, 87, 5, 33, 59], label: 'Series E'},
   
 ];
 public lineChartLabels:Array<any> = ['2012', '2013', '2014', '2015', '2016', '2017'];
 public lineChartOptions:any = {
   responsive: true
 };
 public lineChartColors:Array<any> = [
   { // dark green
     backgroundColor: 'rgba(4,118,19,0.2)',
     borderColor: 'rgba(4,118,19,1)',
     pointBackgroundColor: 'rgba(4,118,19,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(4,118,19,0.8)'
   },
   { // green
     backgroundColor: 'rgba(22,206,47,0.2)',
     borderColor: 'rgba(22,206,47,1)',
     pointBackgroundColor: 'rgba(22,206,47,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(22,206,47,1)'
   },
   { // purple
     backgroundColor: 'rgba(76,42,110,0.2)',
     borderColor: 'rgba(76,42,110,1)',
     pointBackgroundColor: 'rgba(76,42,110,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(76,42,110,0.8)'
   },
   { // dark red
    backgroundColor: 'rgba(22,203,206,0.2)',
    borderColor: 'rgba(22,203,206,1)',
    pointBackgroundColor: 'rgba(22,203,206,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(22,203,206,1)'
   },
   { // blue
     backgroundColor: 'rgba(12,12,170,0.2)',
     borderColor: 'rgba(12,12,170,1)',
     pointBackgroundColor: 'rgba(12,12,170,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(12,12,170,0.8)'
   }
 ];
 public lineChartLegend:boolean = true;
 public lineChartType:string = 'line';

 public randomize():void {
   let _lineChartData:Array<any> = new Array(this.lineChartData.length);
   for (let i = 0; i < this.lineChartData.length; i++) {
     _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
     }
   }
   this.lineChartData = _lineChartData;
 }

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }
}