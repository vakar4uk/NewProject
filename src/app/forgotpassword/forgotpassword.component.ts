import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  @ViewChild('f') signinForm: NgForm;

  constructor() { }

  ngOnInit() {
  } 

  onSubmit() {
    console.log(this.signinForm);
  }

}
