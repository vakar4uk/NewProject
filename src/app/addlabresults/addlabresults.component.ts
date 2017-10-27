import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addlabresults',
  templateUrl: './addlabresults.component.html',
  styleUrls: ['./addlabresults.component.css']
})
export class AddlabresultsComponent implements OnInit {

  @ViewChild('f') addLabResults: NgForm;
  // public isTableHidden: boolean = true;
  // public isInfoHidden: boolean = true;

  public isSubmitted: boolean = false;
  public hasRecords: boolean = false;

  constructor() { }

  ngOnInit() {    
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
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
  // PRINT


  onSubmit() {
    console.log(this.addLabResults);
  }

}
