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

  getUsername(user:Login){
    return this.http.get<Login>(this.userUrl+"/"+user.Username).subscribe(data =>{
      console.log(data.Username);
    });

  }

  checkLogin(user:Login){
    return this.http.get<Login>(this.userUrl+"/"+user.Username).subscribe(data =>{
      if(data.Username === user.Username && data.Password === user.Password){
        console.log("User is logged in");
        this._router.navigate(['/home']);
      }
      else
        console.log("Access Denied");
    });

  }


}




