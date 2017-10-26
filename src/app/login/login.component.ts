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
    var user = (<HTMLInputElement>document.getElementById("inputUsername")).value;
    var pass = (<HTMLInputElement>document.getElementById("inputPassword")).value;
    if(user != undefined && pass != undefined){
      //this._datatask.getUser(user,pass);
      this._datatask.checkLogin(user,pass);
    }
    // this._router.navigate(['/home']);
    else{
      console.log("Access Denied");
    }
  }
}
