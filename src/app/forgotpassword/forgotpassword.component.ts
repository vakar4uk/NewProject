import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-component',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  @ViewChild('f') signinForm: NgForm;
  email = '';

  ngOnInit() {
  } 

  onSubmit() {
  }

  myFunc(){
    console.log("function called");
  }

    // if(confirm("Are you sure to delete ")) {
    //   console.log("Implement delete functionality here");
    // }
  

}
