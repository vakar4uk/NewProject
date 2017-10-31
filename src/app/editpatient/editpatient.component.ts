import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../backend/data.service';
import { Subscription } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import *as myID from '../global-id';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';


@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})


export class EditpatientComponent implements OnInit {
  public modalRef: BsModalRef;
  isCondition = false;
  constructor(private modalService: BsModalService,private http: HttpClient, public _datatask: DataService, private _router: Router, private route: ActivatedRoute) {

  }
  //  public conditions = [
  //     {name:'head', value: '1'},

  //   ]; 

  @ViewChild('f') addPatient: NgForm;
  //public genders = ['Male', 'Female'];

  // public states = ['N/A', 'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  //                  'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida',                    
  //                  'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  //                  'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  //                  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
  //                  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
  //                  'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 
  //                  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 
  //                  'West Virginia', 'Wisconsin', 'Wyoming'
  // ];

  public isEdited: boolean = false;

  public inactive: boolean = true;
  public isTableHidden: boolean = true;
  public isInfoHidden: boolean = true;
  public id:number;
  public date:any;
  public conditions = [
    'BONE DEFORMITY', 'FRACTURE', 'EARACHE', 'FREQUENT SORE THROAT', 'HOARSENESS', 'RESPIRATORY PROBLEMS, BRONCHITIS, EMPHYSEMA, ETC.',
    'ASTHMA', 'TUBERCULOSIS', 'SHORTNESS OF BREATH', 'PAIN, PRESSURE IN CHEST', 'SWELLING OF ANKLES', 'ANEMIA',
    'HIGH BLOOD PRESSURE', 'LOW BLOOD PRESSURE', 'RHEUMATIC FEVER/SCARLET FEVER'
  ];

  ngOnInit() {
  }

  edit() {
    this.isEdited = true;
  }

  populate(){
    //if(this._datatask.ID != undefined){
      console.log("Populating");
      console.log(this._datatask.pArray[this._datatask.pIndex].Fname);
      (<HTMLInputElement>document.getElementById("firstName")).value=(this._datatask.pArray[this._datatask.pIndex].Fname);
      (<HTMLInputElement>document.getElementById("lastName")).value=(this._datatask.pArray[this._datatask.pIndex].Lname);
      var t = (this._datatask.pArray[this._datatask.pIndex].DOB.split(/[- T]/));
      this.date= t[0]+"-"+t[1]+"-"+t[2];
      (<HTMLInputElement>document.getElementById("dob")).value= this.date;
      (<HTMLInputElement>document.getElementById("gender")).value=(this._datatask.pArray[this._datatask.pIndex].Sex);
      (<HTMLInputElement>document.getElementById("street")).value=(this._datatask.pArray[this._datatask.pIndex].Street);
      (<HTMLInputElement>document.getElementById("unit")).value=(this._datatask.pArray[this._datatask.pIndex].Unit);
      (<HTMLInputElement>document.getElementById("City")).value=(this._datatask.pArray[this._datatask.pIndex].City);
      (<HTMLInputElement>document.getElementById("state")).value=(this._datatask.pArray[this._datatask.pIndex].State);
      (<HTMLInputElement>document.getElementById("zipcode")).value=(this._datatask.pArray[this._datatask.pIndex].Zipcode);
      (<HTMLInputElement>document.getElementById("phone")).value=(this._datatask.pArray[this._datatask.pIndex].PhoneNo);
      (<HTMLInputElement>document.getElementById("patEmail")).value=(this._datatask.pArray[this._datatask.pIndex].Email);
      (<HTMLInputElement>document.getElementById("notes")).value=this._datatask.pArray[this._datatask.pIndex].Notes;
    //}
  }

  // PRINT
  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('printArea').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
  // PRINT

  search(template: TemplateRef<any>) {
    //searching for person|patient
    
    var search = (<HTMLInputElement>document.getElementById("search")).value;
    console.log(search);
    this._datatask.searchPatient(search);
    //if it is not empty show table
      if(this._datatask.pArray[0] != undefined){
        this.isTableHidden = false;
      }
      //if it is empty show error
      else if(this._datatask.pArray[0] === undefined){
        this.modalRef = this.modalService.show(template);
      }
      console.log("Checking if data was Stored",this._datatask.pArray);



  }

  getID(index){
    this._datatask.pIndex=index;
    this._datatask.getID(this._datatask.pArray[index].PID);
    this.isInfoHidden = false;
    console.log("Index: "+this._datatask.pIndex);
    console.log("PID: "+this._datatask.ID);
    (<HTMLInputElement>document.getElementById("firstName")).value=this._datatask.pArray[this._datatask.pIndex].Fname;
    (<HTMLInputElement>document.getElementById("lastName")).value=this._datatask.pArray[this._datatask.pIndex].Lname;
    var t = this._datatask.pArray[this._datatask.pIndex].DOB.split(/[- T]/);
    this.date= t[0]+"-"+t[1]+"-"+t[2];
    (<HTMLInputElement>document.getElementById("dob")).value= this.date;
    (<HTMLInputElement>document.getElementById("gender")).value=this._datatask.pArray[this._datatask.pIndex].Sex;
    (<HTMLInputElement>document.getElementById("street")).value=this._datatask.pArray[this._datatask.pIndex].Street;
    (<HTMLInputElement>document.getElementById("unit")).value=this._datatask.pArray[this._datatask.pIndex].Unit;
    (<HTMLInputElement>document.getElementById("City")).value=this._datatask.pArray[this._datatask.pIndex].City;
    (<HTMLInputElement>document.getElementById("state")).value=this._datatask.pArray[this._datatask.pIndex].State;
    (<HTMLInputElement>document.getElementById("zipcode")).value=this._datatask.pArray[this._datatask.pIndex].Zipcode;
    (<HTMLInputElement>document.getElementById("phone")).value=this._datatask.pArray[this._datatask.pIndex].PhoneNo;
    (<HTMLInputElement>document.getElementById("patEmail")).value=this._datatask.pArray[this._datatask.pIndex].Email;
    (<HTMLInputElement>document.getElementById("notes")).value=this._datatask.pArray[this._datatask.pIndex].Notes;
  }
  onSubmit(template: TemplateRef<any>) {
    //updating person|patient Currently missing DOB and Gender
    var fname = (<HTMLInputElement>document.getElementById("firstName")).value;
    var lname = (<HTMLInputElement>document.getElementById("lastName")).value;
    var dob = (<HTMLInputElement>document.getElementById("dob")).value;
    var gender = (<HTMLInputElement>document.getElementById("gender")).value;
    var street = (<HTMLInputElement>document.getElementById("street")).value;
    var unit = (<HTMLInputElement>document.getElementById("unit")).value;
    var city = (<HTMLInputElement>document.getElementById("City")).value;
    var state = (<HTMLInputElement>document.getElementById("state")).value;
    var zip = (<HTMLInputElement>document.getElementById("zipcode")).value;
    var phone = (<HTMLInputElement>document.getElementById("phone")).value;
    var email = (<HTMLInputElement>document.getElementById("patEmail")).value;
    var notes = (<HTMLInputElement>document.getElementById("notes")).value;
    this._datatask.updatePerson(fname, lname,dob,gender, street, city, state, zip, phone, email, notes);
    this.modalRef = this.modalService.show(template);
  }
  changeStatusGender() {
    (<HTMLInputElement>document.getElementById('gender')).disabled=false;
    (<HTMLInputElement>document.getElementById('gender')).focus();    
  }

  changeStatusGender2() {
    (<HTMLInputElement>document.getElementById('gender')).disabled=true;
  }

  changeStatusFirstName() {
    (<HTMLInputElement>document.getElementById('firstName')).readOnly = false;
    (<HTMLInputElement>document.getElementById('firstName')).focus();
  }
  changeStatusFirstName1() {
    (<HTMLInputElement>document.getElementById('firstName')).readOnly = true;
  }
  changeStatusLastName() {
    (<HTMLInputElement>document.getElementById('lastName')).readOnly = false;
    (<HTMLInputElement>document.getElementById('lastName')).focus();
  }
  changeStatusLastName2() {
    (<HTMLInputElement>document.getElementById('lastName')).readOnly = true;
  }
  changeStatusDOB() {
    (<HTMLInputElement>document.getElementById('dob')).readOnly = false;
    (<HTMLInputElement>document.getElementById('dob')).focus();
  }
  changeStatusDOB2() {
    (<HTMLInputElement>document.getElementById('dob')).readOnly = true;
  }
  changeStatusAddress() {
    (<HTMLInputElement>document.getElementById('street')).readOnly = false;
    (<HTMLInputElement>document.getElementById('street')).focus();
  }
  changeStatusAddress2() {
    (<HTMLInputElement>document.getElementById('street')).readOnly = true;
  }
  changeStatusUnit() {
    (<HTMLInputElement>document.getElementById('unit')).readOnly = false;
    (<HTMLInputElement>document.getElementById('unit')).focus();
  }
  changeStatusUnit2() {
    (<HTMLInputElement>document.getElementById('unit')).readOnly = true;
  }
  changeStatusCity() {
    (<HTMLInputElement>document.getElementById('City')).readOnly = false;
    (<HTMLInputElement>document.getElementById('City')).focus();
  }
  changeStatusCity2() {
    (<HTMLInputElement>document.getElementById('City')).readOnly = true;
  }
  changeStatusState() {
    (<HTMLInputElement>document.getElementById('state')).disabled=false;
    (<HTMLInputElement>document.getElementById('state')).focus();    
  }

  changeStatusState2() {
    (<HTMLInputElement>document.getElementById('state')).disabled=true;
  }
  changeStatusZipcode() {
    (<HTMLInputElement>document.getElementById('zipcode')).readOnly = false;
    (<HTMLInputElement>document.getElementById('zipcode')).focus();
  }
  changeStatusZipcode2() {
    (<HTMLInputElement>document.getElementById('zipcode')).readOnly = true;
  }
  changeStatusPhone() {
    (<HTMLInputElement>document.getElementById('phone')).readOnly = false;
    (<HTMLInputElement>document.getElementById('phone')).focus();
  }
  changeStatusPhone2() {
    (<HTMLInputElement>document.getElementById('phone')).readOnly = true;
  }
  changeStatusPatEmail() {
    (<HTMLInputElement>document.getElementById('patEmail')).readOnly = false;
    (<HTMLInputElement>document.getElementById('patEmail')).focus();
  }
  changeStatusPatEmail2() {
    (<HTMLInputElement>document.getElementById('patEmail')).readOnly = true;
  }

  changeStatusNotes() {
    (<HTMLInputElement>document.getElementById('notes')).disabled = false;
    (<HTMLInputElement>document.getElementById('notes')).focus();
  }
  changeStatusNotes2() {
    (<HTMLInputElement>document.getElementById('notes')).disabled = true;
  }

  changeStatusInstructions() {
    (<HTMLInputElement>document.getElementById('instructions')).disabled = false;
    (<HTMLInputElement>document.getElementById('instructions')).focus();
  }
  changeStatusInstructions2() {
    (<HTMLInputElement>document.getElementById('instructions')).disabled = true;
  }
}
