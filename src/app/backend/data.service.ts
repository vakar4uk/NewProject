import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
//import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login/login';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  title = 'app';
  results = '';
  constructor(private http: HttpClient) {
  }
  
  getPerson(){
    return this.http.get("http://localhost:3000/Person").subscribe(data =>{
      console.log(data);
    });

  }

  getUsername(Username: any){
    return this.http.get("http://localhost:3000/Person").subscribe(data =>{
      console.log(data);
    });

  }

  getPassword(Password: any){
    return this.http.get("http://localhost:3000/Person").subscribe(data =>{
      console.log(data);
    });

  }


}


  // editTask(item: Login) {

  //   let body = JSON.stringify(item);
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.put(this. + item., body, options)
  //     .map((response: Response) => response.json());

  // }


