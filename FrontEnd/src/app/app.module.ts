import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { FetchallComponent } from './fetchall/fetchall.component';
import { RemoveStudentComponent } from './remove-student/remove-student.component';
import { HomeComponent } from './home/home.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdateStudentComponent } from './update-student/update-student.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    FetchallComponent,
    RemoveStudentComponent,
    HomeComponent,
    AddstudentComponent,
    UpdateStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
