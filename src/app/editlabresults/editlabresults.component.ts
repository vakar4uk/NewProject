import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../backend/data.service';
import { Subscription } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TemplateRef } from '@angular/core';
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
  Notes:any;
}
interface personArray {
  [index: number]: person;
}
interface blood {
  ResultsNo: any;
  Sodium: any;
  Potassium: any;
  Calcium: any;
  Glucose: any;
  Hemoglobin: any;
  Results_PID: any;
  DateTaken: any;

}
interface bloodArray {
  [index: number]: blood;
}

@Component({
  selector: 'app-editlabresults',
  templateUrl: './editlabresults.component.html',
  styleUrls: ['./editlabresults.component.css']
})
export class EditlabresultsComponent implements OnInit {

  constructor(private modalService: BsModalService, private http: HttpClient, public _datatask: DataService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public isTableHidden: boolean = true;
  public isInfoHidden: boolean = true;
  public pArray: personArray;
  public date: any;
  bArray:bloodArray;
  personUrl = "http://localhost:3000/Persons";
  bloodUrl = "http://localhost:3000/BloodTests";
  public modalRef: BsModalRef;
  // public isTableHidden: boolean = true;
  // public isInfoHidden: boolean = true;

  public isSubmitted: boolean = false;

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
    this.http.get<personArray>(this.personUrl + "/" + search).subscribe(data => {
      console.log("Looking for:" + search);
      console.log(data);
      if (data[0] != undefined) {
        this.isTableHidden = false;
      }
      else if (data[0] === undefined) {
        this.modalRef = this.modalService.show(template);
      }
      this.pArray = data;
      console.log("Checking if data was Stored", this.pArray);

    },
      err => {
        console.log("No Valid Entry");
        this.modalRef = this.modalService.show(template);
      }
    );

  }
  getID(index) {
    //get PID of person selected
    this._datatask.getID(this.pArray[index].PID);
    
    // this.http.get<bloodArray>(this.bloodUrl + "/" + date + "/" + this._datatask.ID).subscribe(data => {
    //   console.log("Looking for:" + date);
    //   this.bArray = data;

    //   console.log(this.addLabResults);
    // },
    //   err => {
    //     console.log("Adding Entry");
    //     this._datatask.addBloodT(sodium, potassium, calcium, glucose, hemoglobin, this._datatask.ID, date);
    //   }
    // );
    // var date = (<HTMLInputElement>document.getElementById("testDate")).value;
    // var sodium = (<HTMLInputElement>document.getElementById("sodium")).value;
    // var potassium = (<HTMLInputElement>document.getElementById("potassium")).value;
    // var calcium = (<HTMLInputElement>document.getElementById("calcium")).value;
    // var glucose = (<HTMLInputElement>document.getElementById("glucose")).value;
    // var hemoglobin = (<HTMLInputElement>document.getElementById("hemoglobin")).value;
    this.isInfoHidden = false;
  }
  changeStatusSodium(){
    (<HTMLInputElement>document.getElementById('sodium')).readOnly=false;
    (<HTMLInputElement>document.getElementById('sodium')).focus();
  }
  changeStatusSodium2(){
    (<HTMLInputElement>document.getElementById('sodium')).readOnly=true;
  }
  changeStatusPotassium(){
    (<HTMLInputElement>document.getElementById('potassium')).readOnly=false;
    (<HTMLInputElement>document.getElementById('potassium')).focus();
  }
  changeStatusPotassium2(){
    (<HTMLInputElement>document.getElementById('potassium')).readOnly=true;
  }
  changeStatusCalcium(){
    (<HTMLInputElement>document.getElementById('calcium')).readOnly=false;
    (<HTMLInputElement>document.getElementById('calcium')).focus();    
  }
  changeStatusCalcium2(){
    (<HTMLInputElement>document.getElementById('calcium')).readOnly=true;
  }
  changeStatusGlucose(){
    (<HTMLInputElement>document.getElementById('glucose')).readOnly=false;
    (<HTMLInputElement>document.getElementById('glucose')).focus();    
  }
  changeStatusGlucose2(){
    (<HTMLInputElement>document.getElementById('glucose')).readOnly=true;
  }
  changeStatusHemoglobin(){
    (<HTMLInputElement>document.getElementById('hemoglobin')).readOnly=false;
    (<HTMLInputElement>document.getElementById('hemoglobin')).focus();    
  }
  changeStatusHemoglobin2(){
    (<HTMLInputElement>document.getElementById('hemoglobin')).readOnly=true;
  }
  

}
