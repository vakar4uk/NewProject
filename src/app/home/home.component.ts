import { Component, OnInit } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // styles: [`
  // :host >>> .tooltip-inner {
  //   background-color: #009688;
  //   color: #fff;
  // }
  // :host >>> .tooltip .tooltip-arrow {
  //   border-bottom-color: #009688;
  // }
  //   `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
