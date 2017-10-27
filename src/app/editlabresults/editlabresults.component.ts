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

  // public isTableHidden: boolean = true;
  // public isInfoHidden: boolean = true;

  public isSubmitted: boolean = false;

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
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
  // PRINT

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
