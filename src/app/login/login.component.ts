import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  link = "";

  @ViewChild('f') signinForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  userValidation(){
    var verify = (<HTMLInputElement>document.getElementById("inputUsername")).value;    
      if(verify === "doctor") {
        this.link = "/doctorhome";      
      }    
      if(verify === "nurse") {
        this.link = "/scheduler";     
      }   
    }       
  
  onSubmit() {
    console.log(this.signinForm);
  } 

}
