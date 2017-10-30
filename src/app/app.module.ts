import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { DataService} from './backend/data.service';


import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';




import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { EditpatientComponent } from './editpatient/editpatient.component';
import { DoctorSearchComponent } from './doctorsearch/doctorsearch.component';

import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';            //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScheduleModule} from 'primeng/primeng';
import { AddlabresultsComponent } from './addlabresults/addlabresults.component';
import { DoctorpahistoryComponent } from './doctorpahistory/doctorpahistory.component';
import { EditlabresultsComponent } from './editlabresults/editlabresults.component';
import { ChartsModule } from 'ng2-charts';
import { LabresultschartComponent } from './labresultschart/labresultschart.component';
import { HeaderComponent } from './header/header.component';
import { StickyfooterComponent } from './stickyfooter/stickyfooter.component';
import { ScrollablefooterComponent } from './scrollablefooter/scrollablefooter.component';
import { AlertmessageComponent } from './alertmessage/alertmessage.component';
import { TryComponent } from './try/try.component';
import { DoctorheaderComponent } from './doctorheader/doctorheader.component';
import { DoctorprescriptionComponent } from './doctorprescription/doctorprescription.component';
import { DoctorlabresultComponent } from './doctorlabresult/doctorlabresult.component';
import { LabhistoryComponent } from './labhistory/labhistory.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DoctorschedulerComponent } from './doctorscheduler/doctorscheduler.component';
import { SchedulerfordoctorComponent } from './schedulerfordoctor/schedulerfordoctor.component';

const appRoutes: Routes =[  
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'addpatient', component: AddpatientComponent },
  { path: 'scheduler', component: SchedulerComponent }, 
  { path: 'doctorhome', component: DoctorhomeComponent }, 
  { path: 'editpatient', component: EditpatientComponent },  
  { path: 'doctorsearch', component: DoctorSearchComponent },
  { path: 'addlabresults', component: AddlabresultsComponent },
  { path: 'doctorpahistory', component: DoctorpahistoryComponent },  
  { path: 'editlabresults', component: EditlabresultsComponent },
  { path: 'alertmessage', component: AlertmessageComponent },
  { path: 'try', component: TryComponent },  
  { path: 'doctorprescription', component: DoctorprescriptionComponent },  
  { path: 'doctorlabresult', component: DoctorlabresultComponent },  
  { path: 'labhistory', component: LabhistoryComponent }, 
  { path: 'labresultschart', component: LabresultschartComponent },  
  { path: 'doctorscheduler', component: DoctorschedulerComponent },  
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent,
    AddpatientComponent,
    SchedulerComponent,   
    DoctorhomeComponent, 
    EditpatientComponent, 
    DoctorSearchComponent,
    AddlabresultsComponent,
    DoctorpahistoryComponent,  
    AddlabresultsComponent, 
    EditlabresultsComponent, 
    HeaderComponent, 
    StickyfooterComponent, 
    ScrollablefooterComponent, 
    AlertmessageComponent, TryComponent, DoctorheaderComponent, DoctorprescriptionComponent, DoctorlabresultComponent, LabhistoryComponent, 
    LabresultschartComponent, DoctorschedulerComponent, SchedulerfordoctorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,    
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    ChartsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private modalService: BsModalService) {}
  
  public modalRef: BsModalRef;
 }

