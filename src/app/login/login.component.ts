import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  verify:string;

  @ViewChild('f') signinForm: NgForm;
  constructor() { }

  ngOnInit() {   
  }   

  userValidation(){
    var link = (<HTMLInputElement>document.getElementById("inputUsername")).value;
    console.log(link);
    if(link === "doctor") {
      this.verify = "/doctorhome";      
    }
    
    if(link === "nurse") {
      this.verify = "/home";      
    }
       
  }
  onSubmit(f:NgForm) {    

}
}