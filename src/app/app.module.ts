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

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddpatientComponent } from './addpatient/addpatient.component';

const appRoutes: Routes =[
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'addpatient', component: AddpatientComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent,
    AddpatientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
