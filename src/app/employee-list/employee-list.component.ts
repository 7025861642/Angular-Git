import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employee: Observable<Employee>;
  employees: Observable<Employee[]>;
  category: Observable<Category[]>;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
    this.category = this.employeeService.getCategoryList();

  }

  onOptionSelected(value: number) {
    console.log("the selected value is " + value);
    if (value == 0) {
      this.employees = this.employeeService.getEmployeesList();
    }
    else {
      this.employees = this.employeeService.getCategory(value);
    }
    // this.employees =this.employeeService.getEmployeesList();
    // this.category =this.employeeService.getCategoryList();
  }
  employeeDetails(emp_id: number){
    console.log("selected ID: " +emp_id);
    this.router.navigate(['details', emp_id]);
  }

}
