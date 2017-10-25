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
@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})


export class EditpatientComponent implements OnInit {
  personUrl = "http://localhost:3000/Persons";
  isCondition = false;
  constructor(private http: HttpClient, public _datatask: DataService, private _router: Router, private route: ActivatedRoute) {

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

  public inactive: boolean = true;
  public pArray:personArray;
  public id:any;
  public date:any;
  public conditions = [
    'BONE DEFORMITY', 'FRACTURE', 'EARACHE', 'FREQUENT SORE THROAT', 'HOARSENESS', 'RESPIRATORY PROBLEMS, BRONCHITIS, EMPHYSEMA, ETC.',
    'ASTHMA', 'TUBERCULOSIS', 'SHORTNESS OF BREATH', 'PAIN, PRESSURE IN CHEST', 'SWELLING OF ANKLES', 'ANEMIA',
    'HIGH BLOOD PRESSURE', 'LOW BLOOD PRESSURE', 'RHEUMATIC FEVER/SCARLET FEVER'
  ];

  ngOnInit() {
  }
  search() {
    //searching for person|patient
    var search = (<HTMLInputElement>document.getElementById("search")).value;
    console.log(search);
    this.http.get<personArray>(this.personUrl + "/" + search).subscribe(data => {
      console.log("Looking for:" + search);
      console.log(data);
      this.pArray=data;
      console.log("Checking if data was Stored",this.pArray);
      // (<HTMLInputElement>document.getElementById("firstName")).value=data[0].Fname;
      // (<HTMLInputElement>document.getElementById("lastName")).value=data[0].Lname;
      // var t = data[0].DOB.split(/[- T]/);
      // this.date= t[0]+"-"+t[1]+"-"+t[2];
      // (<HTMLInputElement>document.getElementById("dob")).value= this.date;
      // (<HTMLInputElement>document.getElementById("gender")).value=data[0].Sex;
      // (<HTMLInputElement>document.getElementById("street")).value=data[0].Street;
      // (<HTMLInputElement>document.getElementById("unit")).value=data[0].Unit;
      // (<HTMLInputElement>document.getElementById("City")).value=data[0].City;
      // (<HTMLInputElement>document.getElementById("state")).value=data[0].State;
      // (<HTMLInputElement>document.getElementById("zipcode")).value=data[0].Zipcode;
      // (<HTMLInputElement>document.getElementById("phone")).value=data[0].PhoneNo;
      // (<HTMLInputElement>document.getElementById("patEmail")).value=data[0].Email;
    },
      err => {
        console.log("No Valid Entry");
      }
    );

  }
  getID(){
    console.log((<HTMLInputElement>document.getElementById("selectPatient")).value);
    this._datatask.getID(this.pArray[(<HTMLInputElement>document.getElementById("selectPatient")).value].PID);
    console.log(this._datatask.ID);
  }
  onSubmit() {
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
    this._datatask.updatePerson(fname, lname,dob,gender, street, city, state, zip, phone, email);
    //console.log(this.addPatient);
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
    (<HTMLInputElement>document.getElementById('state')).disabled = false;
    (<HTMLInputElement>document.getElementById('state')).focus();
  }
  changeStatusState2() {
    (<HTMLInputElement>document.getElementById('state')).disabled = true;
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
}
