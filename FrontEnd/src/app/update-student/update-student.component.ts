import { Component, inject } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-update-student',
  standalone: false,
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent {

  private service = inject(StudentserviceService);

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

  update(){
    this.service.update(this.newStudent).subscribe({
      next : (data) => {alert("Registation successfully completed")},
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
