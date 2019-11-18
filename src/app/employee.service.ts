import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:52008/api'
  

  constructor(private http: HttpClient) { }
  
  getEmployeesList():Observable<any>{
    return this.http.get(this.baseUrl+'/Employee2');
  }
  getCategoryList():Observable<any>{
    return this.http.get(this.baseUrl+'/category');


  }
  getEmployee(emp_id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/Employee2/'+emp_id);
  }

  
  getCategory(emp_id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/category/'+emp_id);
  }

}
