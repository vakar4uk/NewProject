import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorpahistory',
  templateUrl: './doctorpahistory.component.html',
  styleUrls: ['./doctorpahistory.component.css']
})
export class DoctorpahistoryComponent implements OnInit {

  constructor() { }

  public conditions = [
    'BONE DEFORMITY', 'FRACTURE', 'EARACHE', 'FREQUENT SORE THROAT', 'HOARSENESS', 'RESPIRATORY PROBLEMS, BRONCHITIS, EMPHYSEMA, ETC.',
    'ASTHMA', 'TUBERCULOSIS', 'SHORTNESS OF BREATH', 'PAIN, PRESSURE IN CHEST', 'SWELLING OF ANKLES', 'ANEMIA',
    'HIGH BLOOD PRESSURE', 'LOW BLOOD PRESSURE', 'RHEUMATIC FEVER/SCARLET FEVER'
  ];
  ngOnInit() {
  }

}
