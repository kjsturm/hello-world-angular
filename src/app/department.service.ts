import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import{IDepartment} from './department';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  private _url: string ="/assets/data/departments.json";

  constructor(private http: HttpClient) { }

  public getDepartments(): Observable<IDepartment[]>{       
    return  this.http.get<IDepartment[]>(this._url); 
  }
  
}