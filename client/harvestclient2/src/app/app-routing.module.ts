import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentTableComponent} from "./view/student/student-table/student-table.component";
import {StudentFormComponent} from "./view/student/student-form/student-form.component";
import {StudentUpdateComponent} from "./view/student/student-update/student-update.component";
import {StudentDetailsComponent} from "./view/student/student-details/student-details.component";

const routes: Routes = [
  {path:'student', component:StudentTableComponent},
  {path:'student/form', component:StudentFormComponent},
  {path:'student/update', component:StudentUpdateComponent},
  {path:'student/details/:id', component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
