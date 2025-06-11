import { Component } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-remove-student',
  standalone: false,
  templateUrl: './remove-student.component.html',
  styleUrl: './remove-student.component.css'
})
export class RemoveStudentComponent {

  constructor(private service: StudentserviceService){}

  id:number | null = null;

  removeStudent(){


    if(this.id !== null){

      this.service.removestudent(Number(this.id)).subscribe({
      next : (response)=>alert("Student Removed SuccesFully"),
      error : (error) => alert("Error"+error.message) 
    })

    }else {
      alert("Enter Valid Id ");
    }

    
  }


}
