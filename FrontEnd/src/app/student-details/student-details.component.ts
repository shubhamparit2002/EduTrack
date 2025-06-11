import { Component } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  constructor(private stdService : StudentserviceService){}
 id : number | null = null

 student:any={};

 showTable : boolean = false;

 getbyId(){

      this.stdService.studentDetials(Number(this.id))
  
      .subscribe({
        next : (data) => this.student=data,
        error : () =>  this.student=null 
         })
           this.showTable=true;
 }


}
