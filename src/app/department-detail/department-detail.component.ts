 import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
  <div style="padding: 10px 0px 0px 25px; margin:auto">
   <h3>You selected department with id = {{departmentId}}
   </h3>
   <a>Previous</a>
   &nbsp;&nbsp;&nbsp;&nbsp;
   <a>Next</a>
   </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId=id;
  }

}
