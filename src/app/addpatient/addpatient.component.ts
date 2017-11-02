import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService} from '../backend/data.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import {TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';


@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css'],  
})

export class AddpatientComponent implements OnInit {  
  public modalRef: BsModalRef;
  public modalRef2: BsModalRef;
  public config = {
    // animated: true,
    // keyboard: true,
    backdrop: true,
    ignoreBackdropClick: true
  };

  isCondition: false;

  maxLength = '2';
  
//  public conditions = [
//     {name:'head', value: '1'},
    
//   ]; 
constructor(private modalService: BsModalService,private _datatask:DataService,private _router:Router,private route:ActivatedRoute) { 
  
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

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  public openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, this.config);
  } 

  // PRINT
  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('printArea').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          .form {      
            margin-left: 380px;    
            padding: 10px;   
            background-color: #a7baba;
            border: 2px solid rgb(44, 95, 112);     
            border-radius: 30px;      
            margin-bottom: 10px;
        }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
  // PRINT

  refresh(): void {
    window.location.reload();
}

  addPerson() {
    var fname = (<HTMLInputElement>document.getElementById("firstName")).value;
    var lname = (<HTMLInputElement>document.getElementById("lastName")).value;
    var dob = (<HTMLInputElement>document.getElementById("dob")).value;
    var gender = (<HTMLInputElement>document.getElementById("gender")).value;
    var street = (<HTMLInputElement>document.getElementById("street")).value;
    var unit = (<HTMLInputElement>document.getElementById("unit")).value;
    var city = (<HTMLInputElement>document.getElementById("City")).value;
    var state = (<HTMLInputElement>document.getElementById("state")).value;
    var zip = (<HTMLInputElement>document.getElementById("zipcode")).value;
    var phone = (<HTMLInputElement>document.getElementById("phone")).value;
    var email = (<HTMLInputElement>document.getElementById("patEmail")).value;
    var notes = (<HTMLInputElement>document.getElementById("notes")).value;
    this._datatask.addPerson(fname, lname, dob, gender, street, city, state, zip, phone, email, notes);
    console.log("Patient/Person Added");
    // this.modalRef=this.modalService.show(template);
    console.log(this.addPatient);
  } 


}
