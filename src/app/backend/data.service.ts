import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Login } from '../login/login'
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  private allLogin:Login[]=[];
  constructor(private _http: Http) {
    //this.getData().subscribe(data => obj = data, error => console.log(error));
  }


  getUsername(Username: any):Observable<any>{

    return this._http.get("http://localhost:3000/Person")
      .map((response: Response) => response.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.of(undefined)
      });

  }

  getPassword(Password: any):Observable<any>{
        return this._http.get("http://localhost:3000/Person")
          .map((response: Response) => response.json())
          .catch((error: any) => {
            console.log(error);
            return Observable.of(undefined)
          });

      }

  // editTask(item: Login) {

  //   let body = JSON.stringify(item);
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.put(this. + item., body, options)
  //     .map((response: Response) => response.json());

  // }

}
