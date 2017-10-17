import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { EditpatientComponent } from './editpatient/editpatient.component';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';

const appRoutes: Routes =[  
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'addpatient', component: AddpatientComponent },
  { path: 'scheduler', component: SchedulerComponent }, 
  { path: 'editpatient', component: EditpatientComponent },
  { path: 'doctorhome', component: DoctorhomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent,
    AddpatientComponent,
    SchedulerComponent,
    EditpatientComponent,
    DoctorhomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    AngularFontAwesomeModule,    
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

