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

  @ViewChild('f') signinForm: NgForm;
  selectedLogin: Login;
  constructor(private _datatask:DataService,private _router:Router,private route:ActivatedRoute) { 
  
  }
  ngOnInit(){

  }
  onSubmit() {
    this.selectedLogin.Username = (<HTMLInputElement>document.getElementById("inputUsername")).value;
    this.selectedLogin.Password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
    this._datatask.getUsername(this.selectedLogin);
    this._datatask.checkLogin(this.selectedLogin);
    // this._router.navigate(['/home']);
     
    console.log(this.signinForm);
  }
}
