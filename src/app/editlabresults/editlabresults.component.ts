import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editlabresults',
  templateUrl: './editlabresults.component.html',
  styleUrls: ['./editlabresults.component.css']
})
export class EditlabresultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  changeStatusSodium(){
    (<HTMLInputElement>document.getElementById('sodium')).readOnly=false;
    (<HTMLInputElement>document.getElementById('sodium')).focus();
  }
  changeStatusSodium2(){
    (<HTMLInputElement>document.getElementById('sodium')).readOnly=true;
  }
  changeStatusPotassium(){
    (<HTMLInputElement>document.getElementById('lastName')).readOnly=false;
    (<HTMLInputElement>document.getElementById('lastName')).focus();
  }
  changeStatusPotassium2(){
    (<HTMLInputElement>document.getElementById('lastName')).readOnly=true;
  }
  changeStatusCalcium(){
    (<HTMLInputElement>document.getElementById('dob')).readOnly=false;
    (<HTMLInputElement>document.getElementById('dob')).focus();    
  }
  changeStatusCalcium2(){
    (<HTMLInputElement>document.getElementById('dob')).readOnly=true;
  }
  changeStatusGlucose(){
    (<HTMLInputElement>document.getElementById('street')).readOnly=false;
    (<HTMLInputElement>document.getElementById('street')).focus();    
  }
  changeStatusGlucose2(){
    (<HTMLInputElement>document.getElementById('street')).readOnly=true;
  }
  changeStatusHemoglobin(){
    (<HTMLInputElement>document.getElementById('unit')).readOnly=false;
    (<HTMLInputElement>document.getElementById('unit')).focus();    
  }
  changeStatusHemoglobin2(){
    (<HTMLInputElement>document.getElementById('unit')).readOnly=true;
  }
  

}
