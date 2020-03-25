import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  template: `
  <div style="padding: 10px 0px 0px 10px; margin:0px 0px 0px 0px">
  <h3 style="padding: 10px 0px 0px 10px; margin:0px 0px 0px 0px; font-family:'Raleway', sans-serif;">
  Department List
  </h3>
  <h3 style='color:red; font-weight:400'>{{errorMsg}}</h3>
  <ul class="items">
    <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
      <span class="badge">{{department.id}}</span> {{department.name}}
    </li>
  </ul>
  </div>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;

  public departments = [];

  public errorMsg;  

  constructor(private route: ActivatedRoute, private router: Router, private _departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;});
    this._departmentService.getDepartments().subscribe(data => this.departments = data, error => this.errorMsg = error.message); 
  }

  onSelect(department){
    // this.router.navigate(['/departments', department.id]); //relative navigation method
    this.router.navigate([department.id],{relativeTo: this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
