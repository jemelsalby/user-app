import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes=[
  {
    path:"",component:SigninComponent
  },
  {
    path:"new",component:SignupComponent
  },
  {
    path:"dash",component:DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
RouterModule.forRoot(routes),
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
