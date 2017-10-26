import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-alertmessage',
  templateUrl: './alertmessage.component.html',
  styleUrls: ['./alertmessage.component.css']
})
export class AlertmessageComponent implements OnInit {
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  

  ngOnInit() {
    
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
