import { Component } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-fetchall',
  standalone: false,
  templateUrl: './fetchall.component.html',
  styleUrl: './fetchall.component.css'
})
export class FetchallComponent {

  constructor(private service:StudentserviceService){}


  showTable:boolean=false;
  students:any={};

  allStudent(){
    this.service.allStudent().subscribe({
      next : (data)=> (this.students=data),
      error : () => (alert("Failed to fetch"))
     })
     this.showTable=true;
  }

}
