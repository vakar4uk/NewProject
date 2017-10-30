import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from './login';
import { NgForm } from '@angular/forms';
import { DataService} from '../backend/data.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  link = "";

  @ViewChild('f') signinForm: NgForm;
  selectedLogin: Login;
  constructor(private _datatask:DataService,private _router:Router,private route:ActivatedRoute) { 
  
  }
  ngOnInit(){


  }

  // userValidation(){
  //   var verify = (<HTMLInputElement>document.getElementById("inputUsername")).value;    
  //     if(verify === "doctor") {
  //       this.link = "/doctorhome";      
  //     }    
  //     if(verify === "nurse") {
  //       this.link = "/scheduler";     
  //     }   
  //   }       
  
  onSubmit() {
    //check if user input is valid or they missed something
    var user = (<HTMLInputElement>document.getElementById("inputUsername")).value;
    var pass = (<HTMLInputElement>document.getElementById("inputPassword")).value;
    if(user != undefined && pass != undefined){
      this._datatask.checkLogin(user,pass);
    }
    else{
      console.log("Access Denied");
    }
  }
}
