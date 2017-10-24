import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addlabresults',
  templateUrl: './addlabresults.component.html',
  styleUrls: ['./addlabresults.component.css']
})
export class AddlabresultsComponent implements OnInit {

  @ViewChild('f') addLabResults: NgForm;

  constructor() { }

  ngOnInit() {    
  }

  onSubmit() {
    console.log(this.addLabResults);
  }

}
