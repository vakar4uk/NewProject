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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public isTableHidden: boolean = true;
  public isInfoHidden: boolean = true;
  public modalRef: BsModalRef;
  isCondition = false;
  public id:any;
  public pArray:personArray;
  constructor(private modalService: BsModalService, private http: HttpClient, public _datatask: DataService, private _router: Router, private route: ActivatedRoute) {
  }

  search(template: TemplateRef<any>) {
    //searching for person|patient
    
    var search = (<HTMLInputElement>document.getElementById("search")).value;
    console.log(search);
    this.http.get<personArray>(this._datatask.personUrl + "/" + search).subscribe(data => {
      console.log("Looking for:" + search);
      console.log(data);
      if(data[0] != undefined){
        this.isTableHidden = false;
      }
      else if(data[0] === undefined){
        this.modalRef = this.modalService.show(template);
      }
      this._datatask.pArray=data;
      console.log("Checking if data was Stored",this._datatask.pArray);

    },
      err => {
        console.log("No Valid Entry");
        this.modalRef = this.modalService.show(template);
      }
    );

  }
  getID(index){
    this._datatask.getID(this._datatask.pArray[index].PID);
    this._datatask.pIndex=index;
    (<HTMLInputElement>document.getElementById("firstName")).value=this._datatask.pArray[this._datatask.pIndex].Fname;
    (<HTMLInputElement>document.getElementById("lastName")).value=this._datatask.pArray[this._datatask.pIndex].Lname;
    this.isInfoHidden = false;
    console.log("Index"+index);
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
