import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-editpatient', 
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})

export class EditpatientComponent implements OnInit {  

  isCondition: false;
  
//  public conditions = [
//     {name:'head', value: '1'},
    
//   ]; 

  @ViewChild('f') addPatient: NgForm;
  public genders = ['Male', 'Female'];

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
  
  public inactive:boolean = true;
  
  public conditions = [
    'BONE DEFORMITY', 'FRACTURE', 'EARACHE', 'FREQUENT SORE THROAT', 'HOARSENESS', 'RESPIRATORY PROBLEMS, BRONCHITIS, EMPHYSEMA, ETC.',
    'ASTHMA', 'TUBERCULOSIS', 'SHORTNESS OF BREATH', 'PAIN, PRESSURE IN CHEST', 'SWELLING OF ANKLES', 'ANEMIA',
    'HIGH BLOOD PRESSURE', 'LOW BLOOD PRESSURE', 'RHEUMATIC FEVER/SCARLET FEVER'
  ];

  ngOnInit() {    
  }

  onSubmit() {
    console.log(this.addPatient);
  }
  changeStatusFirstName(){
    (<HTMLInputElement>document.getElementById('firstName')).readOnly=false;
  }
  changeStatusFirstName1(){
    (<HTMLInputElement>document.getElementById('firstName')).readOnly=true;
  }
  changeStatusLastName(){
    (<HTMLInputElement>document.getElementById('lastName')).readOnly=false;
  }
  changeStatusDOB(){
    (<HTMLInputElement>document.getElementById('dob')).readOnly=false;
  }
  changeStatusAddress(){
    (<HTMLInputElement>document.getElementById('street')).readOnly=false;
  }
  changeStatusUnit(){
    (<HTMLInputElement>document.getElementById('unit')).readOnly=false;
  }
  changeStatusCity(){
    (<HTMLInputElement>document.getElementById('City')).readOnly=false;
  }
  changeStatusState(){
    (<HTMLInputElement>document.getElementById('state')).disabled=false;
  }
  changeStatusZipcode(){
    (<HTMLInputElement>document.getElementById('zipcode')).readOnly=false;
  }
  changeStatusPhone(){
    (<HTMLInputElement>document.getElementById('phone')).readOnly=false;
  }
  changeStatusPatEmail(){
    (<HTMLInputElement>document.getElementById('patEmail')).readOnly=false;
  }
  changeStatusNotes(){
    (<HTMLInputElement>document.getElementById('notes')).disabled=false;
  }

}
