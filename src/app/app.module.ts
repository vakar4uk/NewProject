import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';




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
import { ChartsModule } from 'ng2-charts';
import { LabresultschartComponent } from './labresultschart/labresultschart.component';

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
  { path: 'labresultschart', component: LabresultschartComponent },    
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
    LabresultschartComponent   
  ],
  imports: [
    BrowserModule,    
    FormsModule,    
    AngularFontAwesomeModule,    
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

