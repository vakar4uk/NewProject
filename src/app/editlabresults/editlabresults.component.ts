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

  public isTableHidden: boolean = true;
  public isInfoHidden: boolean = true;

  changeStatusSodium(){
    (<HTMLInputElement>document.getElementById('sodium')).readOnly=false;
    (<HTMLInputElement>document.getElementById('sodium')).focus();
  }
  changeStatusSodium2(){
    (<HTMLInputElement>document.getElementById('sodium')).readOnly=true;
  }
  changeStatusPotassium(){
    (<HTMLInputElement>document.getElementById('potassium')).readOnly=false;
    (<HTMLInputElement>document.getElementById('potassium')).focus();
  }
  changeStatusPotassium2(){
    (<HTMLInputElement>document.getElementById('potassium')).readOnly=true;
  }
  changeStatusCalcium(){
    (<HTMLInputElement>document.getElementById('calcium')).readOnly=false;
    (<HTMLInputElement>document.getElementById('calcium')).focus();    
  }
  changeStatusCalcium2(){
    (<HTMLInputElement>document.getElementById('calcium')).readOnly=true;
  }
  changeStatusGlucose(){
    (<HTMLInputElement>document.getElementById('glucose')).readOnly=false;
    (<HTMLInputElement>document.getElementById('glucose')).focus();    
  }
  changeStatusGlucose2(){
    (<HTMLInputElement>document.getElementById('glucose')).readOnly=true;
  }
  changeStatusHemoglobin(){
    (<HTMLInputElement>document.getElementById('hemoglobin')).readOnly=false;
    (<HTMLInputElement>document.getElementById('hemoglobin')).focus();    
  }
  changeStatusHemoglobin2(){
    (<HTMLInputElement>document.getElementById('hemoglobin')).readOnly=true;
  }
  

}
