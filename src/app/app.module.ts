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
import { SearchComponent } from './search/search.component';
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
import { HeaderComponent } from './header/header.component';
import { StickyfooterComponent } from './stickyfooter/stickyfooter.component';
import { ScrollablefooterComponent } from './scrollablefooter/scrollablefooter.component';
import { AlertmessageComponent } from './alertmessage/alertmessage.component';

const appRoutes: Routes =[  
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'addpatient', component: AddpatientComponent },
  { path: 'scheduler', component: SchedulerComponent }, 
  { path: 'search', component: SearchComponent },
  { path: 'doctorhome', component: DoctorhomeComponent }, 
  { path: 'editpatient', component: EditpatientComponent },
  { path: 'search', component: SearchComponent },
  { path: 'doctorsearch', component: DoctorSearchComponent },
  { path: 'addlabresults', component: AddlabresultsComponent },
  { path: 'doctorpahistory', component: DoctorpahistoryComponent },  
  { path: 'editlabresults', component: EditlabresultsComponent },
  { path: 'alertmessage', component: AlertmessageComponent },  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent,
    AddpatientComponent,
    SchedulerComponent,
    SearchComponent,
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
    AlertmessageComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,    
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot() 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private modalService: BsModalService) {}
  
  public modalRef: BsModalRef;
 }

