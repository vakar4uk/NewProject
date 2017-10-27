import { Component, OnInit } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  
})
export class HomeComponent implements OnInit {

  public isTableHidden: boolean = true;
  public isInfoHidden: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
