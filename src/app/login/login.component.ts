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
  model = {Username:'', Password:''};
  constructor(private _datatask:DataService,private _router:Router,private route:ActivatedRoute) { 
  
  }
  ngOnInit(){

  }
  onSubmit() {
    this._datatask.getUsername(this.model).subscribe(
      (data:Login)=>{
        if(data!= null)
          this._router.navigate(['/dashboard']);
      },
      function (error){console.log("error"+error)},
      function(){console.log("subcription done")}
    );
    console.log(this.signinForm);

    
  }
}
