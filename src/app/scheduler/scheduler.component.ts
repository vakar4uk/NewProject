import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
  _bsValue: Date;
  get bsValue(): Date {
    return this._bsValue;
  }
 
  set bsValue(v: Date) {
    console.log(v);
    this._bsValue = v;
  }
 
  _bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
  get bsRangeValue(): any {
    return this._bsRangeValue;
  }
 
  set bsRangeValue(v: any) {
    this._bsRangeValue = v;
  }
 
  log(v: any) {console.log(v);}
  constructor() { }

  ngOnInit() {
  }

}



// lskd
