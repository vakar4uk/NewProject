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
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-addlabresults',
  templateUrl: './addlabresults.component.html',
  styleUrls: ['./addlabresults.component.css']
})
export class AddlabresultsComponent implements OnInit {

  @ViewChild('f') addLabResults: NgForm;
  public isTableHidden: boolean = true;
  public isInfoHidden: boolean = true;
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private http: HttpClient, public _datatask: DataService, private _router: Router, private route: ActivatedRoute) { }

  public isSubmitted: boolean = false;
  public hasRecords: boolean = false;

  ngOnInit() {

  }
   populate(){
      console.log("Populating");
      console.log(this._datatask.pArray[this._datatask.pIndex].Fname);
      (<HTMLInputElement>document.getElementById("firstName")).value=(this._datatask.pArray[this._datatask.pIndex].Fname);
      (<HTMLInputElement>document.getElementById("lastName")).value=(this._datatask.pArray[this._datatask.pIndex].Lname);
      
  }
  // search(template: TemplateRef<any>) {
  //   //searching for person|patient
  //   var search = (<HTMLInputElement>document.getElementById("search")).value;
  //   this._datatask.searchPatient(search);
  //     console.log("Looking for:" + search);
  //     console.log(this._datatask.pArray);
  //     if (this._datatask.pArray[0] != undefined) {
  //       this.isTableHidden = false;
  //     }
  //     else if (this._datatask.pArray[0] === undefined) {
  //       this.modalRef = this.modalService.show(template);
  //     }
  //     console.log("Checking if data was Stored", this._datatask.pArray);

  //     console.log("No Valid Entry");
  //     this.modalRef = this.modalService.show(template);

  // }
  getID(index) {
    //get PID of person selected
    this._datatask.pIndex=index;
    this._datatask.getID(this._datatask.pArray[this._datatask.pIndex].PID);
    this.isInfoHidden = false;
  }
  addRecord(template: TemplateRef<any>) {
    var date = (<HTMLInputElement>document.getElementById("testDate")).value;
    var sodium = (<HTMLInputElement>document.getElementById("sodium")).value;
    var potassium = (<HTMLInputElement>document.getElementById("potassium")).value;
    var calcium = (<HTMLInputElement>document.getElementById("calcium")).value;
    var glucose = (<HTMLInputElement>document.getElementById("glucose")).value;
    var hemoglobin = (<HTMLInputElement>document.getElementById("hemoglobin")).value;
    this._datatask.addBloodT(sodium, potassium, calcium, glucose, hemoglobin, this._datatask.ID, date);
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


  onSubmit() {

  }

}
