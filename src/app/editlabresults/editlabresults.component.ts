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

// interface person {
//   PID: any;
//   Fname: any;
//   Lname: any;
//   Sex: any;
//   DOB: any;
//   Street: any;
//   Unit: any;
//   City: any;
//   State: any;
//   Zipcode: any;
//   PhoneNo: any;
//   Email: any;
// }
// interface personArray {
//   [index: number]: person;
// }
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

  public isEdited: boolean = false;

  edit() {
    this.isEdited = true;
  }   

  public isTableHidden: boolean = true;
  public isInfoHidden: boolean = true;
  public date: any;
  public modalRef: BsModalRef;
  public modalRef2: BsModalRef;
  public config = {
    // animated: true,
    // keyboard: true,
    backdrop: true,
    ignoreBackdropClick: true
  };
  public isSubmitted: boolean = false;

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  public openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, this.config);
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
editResult() {
  var sod = (<HTMLInputElement>document.getElementById("sodium")).value;
  var pot = (<HTMLInputElement>document.getElementById("potassium")).value;
  var cal = (<HTMLInputElement>document.getElementById("calcium")).value;
  var glu = (<HTMLInputElement>document.getElementById("glucose")).value;
  var hem = (<HTMLInputElement>document.getElementById("hemoglobin")).value;
  this._datatask.updateBloodT(this._datatask.bArray[this._datatask.bIndex].ResultsNo,sod,pot,cal,glu,hem);
  // this.modalRef = this.modalService.show(template);
}
  // PRINT

  // search(template: TemplateRef<any>) {
  //   //searching for person|patient

  //   var search = (<HTMLInputElement>document.getElementById("search")).value;
  //   console.log(search);
  //   this.http.get<personArray>(this.personUrl + "/" + search).subscribe(data => {
  //     console.log("Looking for:" + search);
  //     console.log(data);
  //     if (data[0] != undefined) {
  //       this.isTableHidden = false;
  //     }
  //     else if (data[0] === undefined) {
  //       this.modalRef = this.modalService.show(template);
  //     }
  //     this.pArray = data;
  //     console.log("Checking if data was Stored", this.pArray);

  //   },
  //     err => {
  //       console.log("No Valid Entry");
  //       this.modalRef = this.modalService.show(template);
  //     }
  //   );

  // }
  getID(index) {
    this._datatask.bIndex=index;
    //this._datatask.searchBloodT();
    //get PID of person selected
    //this._datatask.getID(this.pArray[index].PID);
    //**** SCRAP LATER
    // this.http.get<bloodArray>(this.bloodUrl +  "/" + this._datatask.ID).subscribe(data => {
    //   this.bArray = data;

    // },
    //   err => {
    //     console.log("Adding Entry");
    //     //this._datatask.addBloodT(sodium, potassium, calcium, glucose, hemoglobin, this._datatask.ID, date);
    //   }
    // );
    //var date = (<HTMLInputElement>document.getElementById("testDate")).value;
    var t = (this._datatask.bArray[this._datatask.bIndex].DateTaken.split(/[- T]/));
    this.date= t[0]+"-"+t[1]+"-"+t[2];
    (<HTMLInputElement>document.getElementById("testDate")).value=this.date;
    (<HTMLInputElement>document.getElementById("sodium")).value = this._datatask.bArray[this._datatask.bIndex].Sodium;
    (<HTMLInputElement>document.getElementById("potassium")).value =this._datatask.bArray[this._datatask.bIndex].Potassium;
    (<HTMLInputElement>document.getElementById("calcium")).value= this._datatask.bArray[this._datatask.bIndex].Calcium;
    (<HTMLInputElement>document.getElementById("glucose")).value=this._datatask.bArray[this._datatask.bIndex].Glucose;
    (<HTMLInputElement>document.getElementById("hemoglobin")).value=this._datatask.bArray[this._datatask.bIndex].Hemoglobin;
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
  populate(){
    console.log("Populating");
    console.log(this._datatask.pArray[this._datatask.pIndex].Fname);
    (<HTMLInputElement>document.getElementById("firstName")).value=(this._datatask.pArray[this._datatask.pIndex].Fname);
    (<HTMLInputElement>document.getElementById("lastName")).value=(this._datatask.pArray[this._datatask.pIndex].Lname);
    this._datatask.searchBloodT();
    //console.log("Index 0 :"+this._datatask.bArray[0]);
    this.isTableHidden = false;
}

}
