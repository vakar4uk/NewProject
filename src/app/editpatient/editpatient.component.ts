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
    (<HTMLInputElement>document.getElementById('firstName')).focus();
  }
  changeStatusFirstName1(){
    (<HTMLInputElement>document.getElementById('firstName')).readOnly=true;
  }
  changeStatusLastName(){
    (<HTMLInputElement>document.getElementById('lastName')).readOnly=false;
    (<HTMLInputElement>document.getElementById('lastName')).focus();
  }
  changeStatusLastName2(){
    (<HTMLInputElement>document.getElementById('lastName')).readOnly=true;
  }
  changeStatusDOB(){
    (<HTMLInputElement>document.getElementById('dob')).readOnly=false;
    (<HTMLInputElement>document.getElementById('dob')).focus();    
  }
  changeStatusDOB2(){
    (<HTMLInputElement>document.getElementById('dob')).readOnly=true;
  }
  changeStatusAddress(){
    (<HTMLInputElement>document.getElementById('street')).readOnly=false;
    (<HTMLInputElement>document.getElementById('street')).focus();    
  }
  changeStatusAddress2(){
    (<HTMLInputElement>document.getElementById('street')).readOnly=true;
  }
  changeStatusUnit(){
    (<HTMLInputElement>document.getElementById('unit')).readOnly=false;
    (<HTMLInputElement>document.getElementById('unit')).focus();    
  }
  changeStatusUnit2(){
    (<HTMLInputElement>document.getElementById('unit')).readOnly=true;
  }
  changeStatusCity(){
    (<HTMLInputElement>document.getElementById('City')).readOnly=false;
    (<HTMLInputElement>document.getElementById('City')).focus();    
  }
  changeStatusCity2(){
    (<HTMLInputElement>document.getElementById('City')).readOnly=true;
  }
  changeStatusState(){
    (<HTMLInputElement>document.getElementById('state')).disabled=false;
    (<HTMLInputElement>document.getElementById('state')).focus();    
  }
  changeStatusState2(){
    (<HTMLInputElement>document.getElementById('state')).disabled=true;
  }
  changeStatusZipcode(){
    (<HTMLInputElement>document.getElementById('zipcode')).readOnly=false;
    (<HTMLInputElement>document.getElementById('zipcode')).focus();    
  }
  changeStatusZipcode2(){
    (<HTMLInputElement>document.getElementById('zipcode')).readOnly=true;
  }
  changeStatusPhone(){
    (<HTMLInputElement>document.getElementById('phone')).readOnly=false;
    (<HTMLInputElement>document.getElementById('phone')).focus();    
  }
  changeStatusPhone2(){
    (<HTMLInputElement>document.getElementById('phone')).readOnly=true;
  }
  changeStatusPatEmail(){
    (<HTMLInputElement>document.getElementById('patEmail')).readOnly=false;
    (<HTMLInputElement>document.getElementById('patEmail')).focus();    
  }
  changeStatusPatEmail2(){
    (<HTMLInputElement>document.getElementById('patEmail')).readOnly=true;
  }
  changeStatusNotes(){
    (<HTMLInputElement>document.getElementById('notes')).disabled=false;
    (<HTMLInputElement>document.getElementById('notes')).focus();    
  }
  changeStatusNotes2(){
    (<HTMLInputElement>document.getElementById('notes')).disabled=true;
  }
}
