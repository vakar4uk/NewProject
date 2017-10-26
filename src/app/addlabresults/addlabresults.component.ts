import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../backend/data.service';
import { Subscription } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
interface person {
  PID: any;
  Fname: any;
  Lname: any;
  Sex: any;
  DOB: any;
  Street: any;
  Unit: any;
  City: any;
  State: any;
  Zipcode: any;
  PhoneNo: any;
  Email: any;
}
interface personArray {
  [index: number]: person;
}
interface blood {
  ResultsNo:any;
  Sodium:any;
  Potassium:any;
  Calcium:any;
  Glucose:any;
  Hemoglobin:any;
  Results_PID:any;
  DateTaken:any;

}
interface bloodArray {
  [index: number]: blood;
}

@Component({
  selector: 'app-addlabresults',
  templateUrl: './addlabresults.component.html',
  styleUrls: ['./addlabresults.component.css']
})
export class AddlabresultsComponent implements OnInit {

  @ViewChild('f') addLabResults: NgForm;
  public isTableHidden: boolean = true;
  public isInfoHidden: boolean = true;
  public pArray:personArray;
  public date:any;
  personUrl = "http://localhost:3000/Persons";
  bloodUrl= "http://localhost:3000/BloodTests";
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private http: HttpClient, public _datatask: DataService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this._datatask.ID);    
  }
  search(template: TemplateRef<any>) {
    //searching for person|patient
    
    var search = (<HTMLInputElement>document.getElementById("search")).value;
    console.log(search);
    this.http.get<personArray>(this.personUrl + "/" + search).subscribe(data => {
      console.log("Looking for:" + search);
      console.log(data);
      if(data[0] != undefined){
        this.isTableHidden = false;
      }
      else if(data[0] === undefined){
        this.modalRef = this.modalService.show(template);
      }
      this.pArray=data;
      console.log("Checking if data was Stored",this.pArray);

    },
      err => {
        console.log("No Valid Entry");
        this.modalRef = this.modalService.show(template);
      }
    );

  }
  getID(index){
    //get PID of person selected
    this._datatask.getID(this.pArray[index].PID);
    this.isInfoHidden = false;
  }
  onSubmit(template: TemplateRef<any>) {
    var date = (<HTMLInputElement>document.getElementById("testDate")).value;
    var sodium=(<HTMLInputElement>document.getElementById("sodium")).value;
    var potassium= (<HTMLInputElement>document.getElementById("potassium")).value;
    var calcium=(<HTMLInputElement>document.getElementById("calcium")).value;
    var glucose=(<HTMLInputElement>document.getElementById("glucose")).value;
    var hemoglobin=(<HTMLInputElement>document.getElementById("hemoglobin")).value;
    //if date exists get us template
    this.http.get<bloodArray>(this.bloodUrl + "/" + date+"/"+this._datatask.ID).subscribe(data => {
      console.log("Looking for:" + date);
      if(data[0] === undefined){
        this.modalRef = this.modalService.show(template);
      }
      else{
        this._datatask.addBloodT(sodium,potassium,calcium,glucose,hemoglobin,this._datatask.ID,date);
      }
    console.log(this.addLabResults);
    });
  }

}
