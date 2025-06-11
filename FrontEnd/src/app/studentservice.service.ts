import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(private http:HttpClient) { }


    baseUrl : string ="http://localhost:8080/student";


    
    studentDetials (id: Number):Observable<any>{
      return this.http.get(`${this.baseUrl}/fechById/${id}`);
    }


    allStudent(){
      return this.http.get(`${this.baseUrl}/fechAll`);
    }

    removestudent(id: Number){
     return this.http.delete(`${this.baseUrl}/delete/${id}`);
    }

    addStudent(student:any){
      return this.http.post(`${this.baseUrl}/register`,student);
    }

    update(student:any){
      return this.http.put(`${this.baseUrl}/update`,student)
    }

}
