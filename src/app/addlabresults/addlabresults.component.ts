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

@Component({
  selector: 'app-addlabresults',
  templateUrl: './addlabresults.component.html',
  styleUrls: ['./addlabresults.component.css']
})
export class AddlabresultsComponent implements OnInit {

  @ViewChild('f') addLabResults: NgForm;

  constructor(private modalService: BsModalService,private http: HttpClient, public _datatask: DataService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this._datatask.ID);    
  }

  onSubmit() {
    var sodium=(<HTMLInputElement>document.getElementById("sodium")).value;
    var potassium= (<HTMLInputElement>document.getElementById("potassium")).value;
    var calcium=(<HTMLInputElement>document.getElementById("calcium")).value;
    var globulinn=(<HTMLInputElement>document.getElementById("globulinn")).value;
    var hemoglobin=(<HTMLInputElement>document.getElementById("hemoglobin")).value;
    console.log(this.addLabResults);
  }

}
