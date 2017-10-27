import { Component, OnInit } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  
})
export class HomeComponent implements OnInit {

  // Who's logged in
  public ifDoctor: boolean = true;
  

  public isTableHidden: boolean = true;
  public isInfoHidden: boolean = true;

  constructor() { }

 

  // Temporary for sandboxing
  public persons = [{
    Fname: "John",
    Lname: "Terry",
    PhoneNo: "123-456-7890",
  },
  {
    Fname: "Bob",
    Lname: "Sponge",
    PhoneNo: "123-456-7890",
  }
];
 // Temporary for sandboxing
 
  ngOnInit() {
    console.log(this.persons);
  }

}
