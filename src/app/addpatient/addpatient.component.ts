import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService} from '../backend/data.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})

export class AddpatientComponent implements OnInit {  

  isCondition: false;
  
//  public conditions = [
//     {name:'head', value: '1'},
    
//   ]; 
constructor(private _datatask:DataService,private _router:Router,private route:ActivatedRoute) { 
  
}
  @ViewChild('f') addPatient: NgForm;
  

  // public states = ['N/A', 'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  //                  'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida',                    
  //                  'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  //                  'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  //                  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
  //                  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
  //                  'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 
  //                  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 
  //                  'West Virginia', 'Wisconsin', 'Wyoming'
  // ];
  

  
  public conditions = [
    'BONE DEFORMITY', 'FRACTURE', 'EARACHE', 'FREQUENT SORE THROAT', 'HOARSENESS', 'RESPIRATORY PROBLEMS, BRONCHITIS, EMPHYSEMA, ETC.',
    'ASTHMA', 'TUBERCULOSIS', 'SHORTNESS OF BREATH', 'PAIN, PRESSURE IN CHEST', 'SWELLING OF ANKLES', 'ANEMIA',
    'HIGH BLOOD PRESSURE', 'LOW BLOOD PRESSURE', 'RHEUMATIC FEVER/SCARLET FEVER'
  ];

  ngOnInit() {    
  }

  onSubmit() {
    var fname = (<HTMLInputElement>document.getElementById("firstName")).value;
    var lname = (<HTMLInputElement>document.getElementById("lastName")).value;
    var dob = (<HTMLInputElement>document.getElementById("dob")).value;
    var gender = (<HTMLInputElement>document.getElementById("gender")).value;
    console.log(gender);
    var street = (<HTMLInputElement>document.getElementById("street")).value;
    var unit = (<HTMLInputElement>document.getElementById("unit")).value;
    var city = (<HTMLInputElement>document.getElementById("City")).value;
    var state = (<HTMLInputElement>document.getElementById("state")).value;
    var zip = (<HTMLInputElement>document.getElementById("zipcode")).value;
    var phone = (<HTMLInputElement>document.getElementById("phone")).value;
    var email = (<HTMLInputElement>document.getElementById("patEmail")).value;
    //if(fname != undefined && lname != undefined && dob != undefined && gender != undefined && street != undefined && city != undefined){
    this._datatask.addPerson(fname, lname, dob, gender, street, city, state, zip, phone);
    //}
    //else{
    console.log("Patient/Person Added");
    //}
    console.log(this.addPatient);
  }


}
