import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
//import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login/login';
import { Observable } from 'rxjs/Rx';
import { Router,ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

  interface login{
    UID:any;
    Username:any;
    Email:any;
    Fname:any;
    Lname:any;
    Password:any;
    UserLevel:any;
  }
@Injectable()
export class DataService {

  title = 'app';
  results = '';
  personUrl="http://localhost:3000/Persons";
  userUrl="http://localhost:3000/UserTemps";
  constructor(private http: HttpClient, private _router:Router,private route:ActivatedRoute) {
  }
  
  getPerson(){
    return this.http.get(this.personUrl).subscribe(data =>{
      console.log(data);
    });

  }
  //verify the person or user
  checkPerson(person:Login){
    return this.http.get<Login>(this.personUrl).subscribe(data =>{
      if(data.Fname === person.Fname && data.Lname === person.Lname){
        console.log("User is logged in");
        this._router.navigate(['/home']);
      }
    }
  );
    
  }

  getUsername(user:any,pass:any){
    return this.http.get<login>(this.userUrl+"/"+user).subscribe(data =>{
      console.log(data);
    });

  }

  checkLogin(user:any,pass:any){
    return this.http.get<login>(this.userUrl+"/"+user).subscribe(data =>{
      if(data.Username === user && data.Password === pass){
        console.log("User is logged in");
        this._router.navigate(['/home']);
      }
      else
        console.log("Access Denied");
    });

  }


}




