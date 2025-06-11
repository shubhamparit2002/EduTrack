import { Component, inject } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-addstudent',
  standalone: false,
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent {

    private service = inject(StudentserviceService)

   newStudent={
    id:"",
    name:"",
    email:"",
    age:"",
    department:"",
    course:"",
    phoneNo:"",
    address:"",
    dateOfAdmission:""
  }

  register(){

    

    this.service.addStudent(this.newStudent).subscribe({
      next : (Response) => {alert("Registation successfully Completed")},
      error : (err) => {
        if(err.status === 409){
          alert(err.error)
        }else{
          alert("Something went wrong");
        }
      }
    })
  }

}
