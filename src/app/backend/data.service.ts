import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
//import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login/login';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

interface login {
  UID: any;
  Username: any;
  Email: any;
  Fname: any;
  Lname: any;
  Password: any;
  UserLevel: any;
}
interface person{
  PID:any;
  Fname:any;
  Lname:any;
  Sex:any;
  DOB:any;
  Street:any;
  Unit:any;
  City:any;
  State:any;
  Zipcode:any;
  PhoneNo:any;
  Email:any;
}
interface personArray{
  [index:number]:person;
}
interface loginArray {
  [index: number]: login;
}

@Injectable()
export class DataService {

  title = 'app';
  personUrl = "http://localhost:3000/Persons";
  userUrl = "http://localhost:3000/UserTemps";
  constructor(private http: HttpClient, private _router: Router, private route: ActivatedRoute) {
  }



  getUser(user: any, pass: any) {
    this.http.get<loginArray>(this.userUrl + "/" + user).subscribe(data => {
      console.log("Username:" + data[0].Username);
      console.log("Password:" + data[0].Password);
      console.log(data);
    },
      err => {
        console.log("Not Connected to DB or User does not exist");
      }
    );

  }
  addPerson(fname, lname, dob, gender, street, city, state, zip, phone, email) {
    const req = this.http.post(this.personUrl, {
      Fname:fname,
      Lname:lname,
      Sex:gender,
      DOB:dob,
      Street:street,
      City:city,
      State:state,
      Zipcode:zip,
      PhoneNo:phone,
      Email:email
    })
      .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
      );
  }
  searchPatient(search:any){
    this.http.get<personArray>(this.personUrl + "/" + search).subscribe(data => {
      console.log("Looking for:" +search);
      console.log(data);
      return data;
    },
      err => {
        console.log("No Valid Entry");
      }
    );
  }
  checkLogin(user: any, pass: any) {
    this.http.get<loginArray>(this.userUrl + "/" + user).subscribe(data => {
      if (data[0] === undefined) {
        console.log("Access Denied");
      }
      else if (data[0].Username === user && data[0].Password === pass && data[0].UserLevel === 1) {
        console.log("Welcome Doctor");
        this._router.navigate(['/doctorhome']);
      }
      else if (data[0].Username === user && data[0].Password === pass && data[0].UserLevel != 1) {
        console.log("Welcome Nurse");
        this._router.navigate(['/home']);
      }
    },
      err => {
        console.log("Not Connected to DB");
      });

  }
  //********missing DOB and Gender*********
  updatePerson(id,fname, lname, dob, gender, street, city, state, zip, phone, email) {
    const req = this.http.put(this.personUrl+"/"+id, {
      Fname:fname,
      Lname:lname,
      Sex:gender,
      DOB:dob,
      Street:street,
      City:city,
      State:state,
      Zipcode:zip,
      PhoneNo:phone,
      Email:email
    })
      .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
      );
  }


}




