import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'employee-list',
  template: `
      <h2>Employee List</h2>
      <h3 style='color:red; font-weight:400'>{{errorMsg}}</h3>
      <ul *ngFor="let employee of employees">
      <li>{{employee.name}}
      </ul>
  `,
  // templateUrl: './employee-list.component.html',
  styles: [
  ]
  // styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  
  constructor(private _employeeService: EmployeeService, private _utilityService: UtilityService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => this.employees = data, error => this.errorMsg = error.message);    
  }

  public employees = [];

  public errorMsg;

}
