import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FetchallComponent } from './fetchall/fetchall.component';
import { RemoveStudentComponent } from './remove-student/remove-student.component';
import { HomeComponent } from './home/home.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

const routes: Routes = [

    { path: '', component: HomeComponent 

    }, 
  {
    path:"get-by-id", component:StudentDetailsComponent
  },
  {
    path:"fetch-all", component:FetchallComponent
  },
  {
    path:"delete-by-id",component:RemoveStudentComponent
  },
  {
    path:"update-info",component:UpdateStudentComponent
  },
  {
    path:"register",component:AddstudentComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
