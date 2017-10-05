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
  private subscription: Subscription;
  model = {PID:'',Fname:'', Lname:'',Sex:'', DOB:''};
  constructor(private _datatask:DataService,private _router:Router,private route:ActivatedRoute) { 
  
  }
  ngOnInit(){

  }
  onSubmit() {
    this._datatask.getPerson();
    // (data:Login)=>{
    //     if(data!= null)
    //       this._router.navigate(['/home']);
    // }
     
    console.log(this.signinForm);

    
  }
}
