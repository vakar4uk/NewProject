import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  verify = "";

  @ViewChild('f') signinForm: NgForm;
  constructor() { }

  ngOnInit() {    
    console.log(name);

  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit(f:NgForm) {    
    var link = (<HTMLInputElement>document.getElementById("inputUsername")).value;
    console.log(link);
    if(link === "doctor") {
      this.verify = "/home";
        }    
  }   

}
