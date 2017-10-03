import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes =[
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(appRoutes),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
