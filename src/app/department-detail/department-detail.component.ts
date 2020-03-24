import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
  <div style="padding: 10px 0px 0px 25px; margin:auto">
  <h3 style='color:red; font-weight:400'>{{errorMsg}}</h3>
   <h3>You selected department with id = {{departmentId}}
   </h3>
   <a (click)="goPrevious()">Previous</a>
   &nbsp;&nbsp;&nbsp;&nbsp;
   <a (click)="goNext()">Next</a>
   &nbsp;&nbsp;&nbsp;&nbsp;
   <a (click)="gotoDepartments()">Back</a>
   <!--<button (click)="gotoDepartments()">Back</button>-->
   </div>
   
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  private useMap=true;

  public departmentId;

  public errorMsg;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(!this.useMap){
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
    }
    else{
      this.route.paramMap.subscribe((params: ParamMap) => {
        let id = parseInt(params.get('id'));
        this.departmentId = id;
      })
    }
  }

  goPrevious() {
    let previousId = this.departmentId > 0 ? this.departmentId - 1 : 0;
    this.router.navigate(['/departments', previousId]);
    console.log('clicked goPrevious');
    if(!this.useMap){
    this.departmentId = previousId;
    }
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
    console.log('clicked goNext');
    if(!this.useMap){
    this.departmentId = nextId;
    }
  }

  gotoDepartments(){
    let selectedId = this.departmentId? this.departmentId:null;
    this.router.navigate(['/departments', {id: selectedId}]);
  }

}
