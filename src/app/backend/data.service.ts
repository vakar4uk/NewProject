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
//all the data structures
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
  Notes:any;
}
interface blood {
  ResultsNo: any;
  Sodium: any;
  Potassium: any;
  Calcium: any;
  Glucose: any;
  Hemoglobin: any;
  Results_PID: any;
  DateTaken: any;

}
interface personArray{
  [index:number]:person;
}
interface loginArray {
  [index: number]: login;
}
interface blood {
  ResultsNo: any;
  Sodium: any;
  Potassium: any;
  Calcium: any;
  Glucose: any;
  Hemoglobin: any;
  Results_PID: any;
  DateTaken: any;

}
interface bloodArray {
  [index: number]: blood;
}
interface Appointment {
  ApptNo: any;
  Appt_DrID: any;
  apptdate: any;
  Booked:any;
  ApptTime: any;
  Appt_PID: any;
}
interface appointmentArray {
  [index: number]: Appointment;
}
interface Doctor{
  Fname: any;
  Lname: any;
}
interface doctorArray {
  [index: number]: Doctor;
}
@Injectable()
export class DataService {
  //all the variables and declaration of said data structures
  title = 'app';
  personUrl = "http://localhost:3000/Persons";
  userUrl = "http://localhost:3000/UserTemps";
  bloodUrl = "http://localhost:3000/BloodTests";
  appointmentUrl = "http://localhost:3000/Appointments"
  doctorUrl= "http://localhost:3000/Doctors";
  pArray:personArray;
  bArray:bloodArray;
  lArray:loginArray;
  dArray: doctorArray;
  pIndex;
  bIndex;
  ID;
  IsDoctor:boolean;
  aArray:appointmentArray;
  constructor(private http: HttpClient, private _router: Router, private route: ActivatedRoute) {
  }

  
//base model for checking login can discard
  getUser(user: any, pass: any) {
    this.http.get<loginArray>(this.userUrl + "/" + user).subscribe(data => {
      console.log("Username:" + data[0].Username);
      console.log("Password:" + data[0].Password);
      console.log(data);
      this.lArray = data;
    },
      err => {
        console.log("Not Connected to DB or User does not exist");
      }
    );

  }
  //adding patient
  addPerson(fname, lname, dob, gender, street, city, state, zip, phone, email, notes) {
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
      Email:email,
      Notes:notes
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
  //looking for patient(s)
  searchPatient(search:any){
    this.http.get<personArray>(this.personUrl + "/" + search).subscribe(data => {
      console.log("Looking for:" +search);
      console.log(data);
      this.pArray = data;
      console.log("Number of entries: "+Object.keys(this.pArray).length);
    },
      err => {
        console.log("No Valid Entry");
      }
    );
  }
  //getting the global person index, blood index, and ID
  getPindex(index:any){
    this.pIndex=index;
  }
  getBindex(index:any){
    this.bIndex=index;
  }
  getID(id:any){
    this.ID = id;
  }
  //might not need but let's leave it for now
  getIDNewPat(phone:any){
    this.http.get<personArray>(this.personUrl + "/" + phone).subscribe(data => {
      console.log("Looking for: " +phone);
      console.log(data);
      this.ID = data[0].PID;
    },
      err => {
        console.log("Couldn't find: "+phone);
      }
    );
  }
  getApptNo(date:any){
    this.http.get<appointmentArray>(this.appointmentUrl + "/" + date).subscribe(data => {
      console.log("looking for: " + date);
      console.log(data);
      this.aArray = data;
    })
  }
  //change Appointment to taken
  updateApptStatus(apptno){
    const req = this.http.put(this.appointmentUrl+"/"+apptno, {
      Booked: "1",
    })
      .subscribe(
      res => {
        console.log("Update Success");
      },
      err => {
        console.log("Error occured");
      }
      );
  }
  getDoctor(dID){
    // for(var i=0; i < Object.entries(this.aArray).length; i++){
    //   this.http.get<doctorArray>(this.doctorUrl + "/" + dID).subscribe(data => {
    //     console.log("looking for: " + dID);
    //     console.log(data);
    //     //Object.keys(this.dArray.push(data);
    //   })
    // }
    for(let appt in this.aArray){
        this.http.get<doctorArray>(this.doctorUrl + "/" + this.aArray[appt].Appt_DrID).subscribe(data => {
        console.log("looking for: " + dID);
        console.log(data);
        this.dArray[appt].Fname = data[0].Fname;
        this.dArray[appt].Lname = data[0].Lname;
      })
    }
    console.log(this.dArray);
    
  }
  removeBooked(){
    //this.aArray = this.aArray.filter(item => item.id !== id);
      
  }
  //checks for correct username and password
  checkLogin(user: any, pass: any) {
    this.http.get<loginArray>(this.userUrl + "/" + user).subscribe(data => {
      if (data[0] === undefined) {
        console.log("Access Denied");
      }
      else if (data[0].Username === user && data[0].Password === pass && data[0].UserLevel === 1) {
        this.IsDoctor=true;
        console.log("Welcome Doctor");
        this._router.navigate(['/home']);
      }
      else if (data[0].Username === user && data[0].Password === pass && data[0].UserLevel != 1) {
        this.IsDoctor=false;
        console.log("Welcome Nurse");
        this._router.navigate(['/home']);
      }
    },
      err => {
        console.log("Not Connected to DB");
      });

  }
  //for edit patient
  updatePerson(fname, lname, dob, gender, street, city, state, zip, phone, email, notes) {
    const req = this.http.put(this.personUrl+"/"+this.ID, {
      Fname:fname,
      Lname:lname,
      Sex:gender,
      DOB:dob,
      Street:street,
      City:city,
      State:state,
      Zipcode:zip,
      PhoneNo:phone,
      Email:email,
      Notes:notes
    })
      .subscribe(
      res => {
        console.log("Update Success");
      },
      err => {
        console.log("Error occured");
      }
      );
  }
  //adding test result
  addBloodT(sod, pot, cal, glu, hem, resultPid, date) {
    const req = this.http.post(this.bloodUrl, {
      Sodium:sod,
      Potassium:pot,
      Calcium:cal,
      Glucose:glu,
      Hemoglobin:hem,
      Results_PID:resultPid,
      DateTaken:date
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
  searchBloodT(){
    this.http.get<bloodArray>(this.bloodUrl+"/"+this.ID).subscribe(data => {
      this.bArray = data;
      console.log("Inside data service")
      console.log(this.bArray);
    });
  }
  updateBloodT(resno, sod,pot,cal,glu,hem) {
    const req = this.http.put(this.bloodUrl+"/"+resno, {
      Sodium: sod,
      Potassium: pot,
      Calcium: cal,
      Glucose: glu,
      Hemoglobin: hem
    })
      .subscribe(
      res => {
        console.log("Update Success");
      },
      err => {
        console.log("Error occured");
      }
      );
  }

}




