import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentTableComponent } from './view/student/student-table/student-table.component';
import { StudentFormComponent } from './view/student/student-form/student-form.component';
import { StudentUpdateComponent } from './view/student/student-update/student-update.component';
import { StudentDetailsComponent } from './view/student/student-details/student-details.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    StudentFormComponent,
    StudentUpdateComponent,
    StudentDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
