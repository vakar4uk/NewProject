import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  @ViewChild('f') scheduler: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.scheduler);
  }
  

}
