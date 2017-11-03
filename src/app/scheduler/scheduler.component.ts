import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../backend/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';


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
  public modalRef: BsModalRef;
  public modalRef2: BsModalRef;
  public data: string = "";
  
  get bsValue(): Date {
    return this._bsValue;
  }
 
  set bsValue(v: Date) {
    console.log(v);
    this._bsValue = v;
  }
 
 
  log(v: any) {console.log(v);}
  constructor(private modalService: BsModalService, private http: HttpClient, public _datatask: DataService, private _router: Router, private route: ActivatedRoute) {
    
      }
  ngOnInit() {
  }

  selectDate(){
    this._datatask.getApptNo((<HTMLInputElement>document.getElementById("apptdate")).value);
    //this._datatask.getDoctor();
    this.isTableHidden=false;
  }
  getindex(index) {
    this._datatask.updateApptStatus(this._datatask.aArray[index].ApptNo);
    //this._datatask.aArray[index]
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public openModal2(template: TemplateRef<any>, index) {
    this.modalRef2 = this.modalService.show(template, {class: 'second'});
  } 
  // onSubmit() {
  //   console.log(this.scheduler);
  // }
  

}



