import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../backend/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})

export class SchedulerComponent implements OnInit {
  //minDate = new Date(2017, 5, 10);
  //maxDate = new Date(2018, 9, 15);
  _bsValue: Date;
  public isTableHidden: boolean = true;
  public isInfoHidden: boolean = true;
  
  get bsValue(): Date {
    return this._bsValue;
  }
 
  set bsValue(v: Date) {
    console.log(v);
    this._bsValue = v;
  }
 
 
  log(v: any) {console.log(v);}
  constructor(private http: HttpClient, public _datatask: DataService, private _router: Router, private route: ActivatedRoute) {
    
      }
  ngOnInit() {
  }
  selectDate(){
    this._datatask.getApptNo((<HTMLInputElement>document.getElementById("apptdate")).value);
    this.isTableHidden=false;
  }
  getindex(index) {
    
  }
  // onSubmit() {
  //   console.log(this.scheduler);
  // }
  

}



// lskd
