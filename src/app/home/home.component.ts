import { Component, OnInit } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  // Who's logged in
  public ifDoctor: boolean = true;
  

  public isTableHidden: boolean = true;
  public isInfoHidden: boolean = true;
  public modalRef: BsModalRef;
  isCondition = false;
  public id:any;
  constructor(private modalService: BsModalService, private http: HttpClient, public _datatask: DataService, private _router: Router, private route: ActivatedRoute) {
  }
  /**********Something is wrong have 2 press twice************/
  search(template: TemplateRef<any>) {
    //searching for person|patient
    
    var search = (<HTMLInputElement>document.getElementById("search")).value;
    console.log(search);
    this._datatask.searchPatient(search);
    //if it is not empty show table
    setTimeout(this.check(template), 2000);
      
  }
  check(template: TemplateRef<any>){
    {
      if((this._datatask.pArray.length) != 0){
        this.isTableHidden = false;
      }
      //if it is empty show error
      else if((this._datatask.pArray.length) === 0){
        this.modalRef = this.modalService.show(template);
      }
     console.log("Checking if data was Stored",this._datatask.pArray);
      
  }
  }
  //this gets the ID and index for said person
  getID(index){
    this._datatask.getPindex(index);
    this._datatask.getID(this._datatask.pArray[this._datatask.pIndex].PID);
    (<HTMLInputElement>document.getElementById("firstName")).value=this._datatask.pArray[this._datatask.pIndex].Fname;
    (<HTMLInputElement>document.getElementById("lastName")).value=this._datatask.pArray[this._datatask.pIndex].Lname;
    this.isInfoHidden = false;
    console.log("Index:"+this._datatask.pIndex);
    console.log("PID:"+this._datatask.ID);
    
  }

  // Temporary for sandboxing
  //   public persons = [{
  //     Fname: "John",
  //     Lname: "Terry",
  //     PhoneNo: "123-456-7890",
  //   },
  //   {
  //     Fname: "Bob",
  //     Lname: "Sponge",
  //     PhoneNo: "123-456-7890",
  //   }
  // ];
  // Temporary for sandboxing

  ngOnInit() {
    //console.log(this.persons);
  }

}
