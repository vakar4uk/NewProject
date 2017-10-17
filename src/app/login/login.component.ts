import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

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

  

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  userValidation(){
    var link = (<HTMLInputElement>document.getElementById("inputUsername")).value;
    console.log(link);
    if(link === "doctor") {
      this.verify = "/home";      
    }  
        
        console.log(this.verify);
  }
  onSubmit(f:NgForm) {    

}
}