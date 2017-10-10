import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})

export class AddpatientComponent implements OnInit {  

  @ViewChild('f') addPatient: NgForm;
  public genders = ['Male', 'Female'];

    public states = [
      { value: 'al', display: 'Alaska' },
      { value: 'guest', display: 'Guest' },
      { value: 'custom', display: 'Custom' }
  ];

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
    console.log(this.addPatient);
  }


}
